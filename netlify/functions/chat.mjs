// IFix8 support chat: proxies the site's chat widget to Claude.
// Needs ANTHROPIC_API_KEY set in Netlify (Project configuration → Environment variables).
import Anthropic from "@anthropic-ai/sdk";

const MODEL = "claude-opus-5-5";
const MAX_TURNS = 20;           // messages kept from the conversation
const MAX_CHARS = 1000;         // per message
const RATE_LIMIT = 20;          // requests per IP per window
const RATE_WINDOW_MS = 10 * 60 * 1000;

const SYSTEM_PROMPT = `You are the IFix8 support assistant on the IFix8 website. IFix8 is a phone repair shop.

Business facts (only state what is listed here):
- Location: Admiral, Talon Tres, Las Piñas City, Metro Manila, Philippines.
- Hours: 8:00 AM to 12:00 PM.
- Phone: 0907 102 6027 (calls). Email: Charlesguarino9@gmail.com. Facebook: facebook.com/Ch4rles.Gu4rin0
- Brands repaired: iPhone, Samsung, Honor, Vivo, Huawei, Infinix, Oppo and more.
- Services: screen replacement, battery replacement, charging port, water damage, camera repair, speaker and mic, back glass and housing, software issues (boot loops, freezing, slow performance).
- Free check-up. The customer gets a quote and approves it before any work starts.
- Every repair has a 1-week warranty on the work done and the parts replaced. It does not cover new physical or water damage.
- Customers book with the booking form on this page (the "Book a repair" button) or by calling.

How to answer:
- Keep replies short and friendly: 1-4 sentences, plain text, no markdown headings or tables.
- Reply in the customer's language: English, Tagalog, or Taglish.
- Prices and repair times are not published. Never guess a price, price range or turnaround time. Explain that it depends on the model and part, the check-up is free, and they get an exact quote before any work. Suggest booking or calling.
- For water damage, tell them to power the phone off, not charge it, and bring it in as soon as possible.
- You cannot book appointments, check repair status, or see customer records. Point them to the booking form or the phone number for those.
- Basic troubleshooting tips are fine (restart, check the cable, update software), but recommend a free check-up for hardware problems.
- Stay on IFix8 and phone repair topics. Politely decline anything unrelated.
- Never claim to be a human. If you don't know something, say so and give the phone number.`;

const client = new Anthropic(); // reads ANTHROPIC_API_KEY
const hits = new Map(); // best-effort per-instance rate limit

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

// Accept only [{role: "user"|"assistant", content: string}], starting and ending with a user turn.
function cleanMessages(input) {
  if (!Array.isArray(input)) return null;
  const msgs = input.slice(-MAX_TURNS).map(m => ({
    role: m && m.role === "assistant" ? "assistant" : "user",
    content: typeof m?.content === "string" ? m.content.trim().slice(0, MAX_CHARS) : "",
  })).filter(m => m.content);
  while (msgs.length && msgs[0].role !== "user") msgs.shift();
  if (!msgs.length || msgs[msgs.length - 1].role !== "user") return null;
  return msgs;
}

export default async (req, context) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });
  if (!process.env.ANTHROPIC_API_KEY) return json(503, { error: "not_configured" });
  if (rateLimited(context?.ip || "unknown")) return json(429, { error: "rate_limited" });

  let body;
  try { body = await req.json(); } catch { return json(400, { error: "bad_request" }); }
  const messages = cleanMessages(body?.messages);
  if (!messages) return json(400, { error: "bad_request" });

  try {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 2048,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      cache_control: { type: "ephemeral" },
      system: SYSTEM_PROMPT,
      messages,
    });

    if (response.stop_reason === "refusal") return json(200, { reply: null, error: "refusal" });
    const reply = response.content
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("\n")
      .trim();
    return json(200, { reply: reply || null });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return json(429, { error: "busy" });
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("Anthropic auth failed: check ANTHROPIC_API_KEY");
      return json(503, { error: "not_configured" });
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`Anthropic API error ${error.status}:`, error.message);
      return json(502, { error: "upstream" });
    }
    console.error("Chat function error:", error);
    return json(500, { error: "server" });
  }
};

export const config = { path: "/api/chat" };
