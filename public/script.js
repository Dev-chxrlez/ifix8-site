(function () {
  document.documentElement.classList.add("js");

  // ---------- Translations ----------
  var T = {
    en: {
      "nav.services": "Services",
      "nav.how": "How it works",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.book": "Book",

      "hero.eyebrow": "Phone repair in Las Piñas",
      "hero.title": 'Your phone.<br><span class="gradient-text">Good as new.</span>',
      "hero.lead": "Expert repairs for iPhone, Samsung, Honor, Vivo, Huawei, Infinix, Oppo and more. Free check-up. 1-week warranty.",
      "hero.book": "Book a repair",
      "hero.call": "Call",
      "hero.card1.title": "1-week warranty",
      "hero.card1.sub": "On every repair",
      "hero.notif.time": "now",
      "hero.notif.text": "Your phone is fixed and ready for pickup.",
      "hero.card2.title": "Free check-up",
      "hero.card2.sub": "Know the price first",

      "hl.1.title": "Free check-up",
      "hl.1.text": "We find the problem at no cost.",
      "hl.2.title": "1-week warranty",
      "hl.2.text": "Every repair is covered.",
      "hl.3.title": "Quote first",
      "hl.3.text": "No work starts without your OK.",
      "hl.4.title": "Right in Talon Tres",
      "hl.4.text": "Local, friendly and easy to reach.",

      "svc.eyebrow": "Services",
      "svc.title": 'Whatever broke.<br>We <span class="dim">fix it.</span>',
      "svc.lead": "From cracked screens to tired batteries, we find the problem for free and fix it right.",
      "svc.bookThis": "Book this repair",
      "svc.screen.title": "Screen replacement",
      "svc.screen.text": "Cracked glass, dead pixels or unresponsive touch.",
      "svc.battery.title": "Battery replacement",
      "svc.battery.text": "Fast drain, swelling or random shutdowns.",
      "svc.port.title": "Charging port",
      "svc.port.text": "Loose cable or won’t charge at all.",
      "svc.water.title": "Water damage",
      "svc.water.text": "Dropped it in water? Bring it in fast.",
      "svc.camera.title": "Camera repair",
      "svc.camera.text": "Blurry photos, cracked lens or black camera.",
      "svc.audio.title": "Speaker & mic",
      "svc.audio.text": "Can’t hear, or can’t be heard on calls.",
      "svc.back.title": "Back glass & housing",
      "svc.back.text": "Cracked back or damaged frame.",
      "svc.software.title": "Software issues",
      "svc.software.text": "Boot loops, freezing or slow performance.",

      "brands.eyebrow": "Brands",
      "brands.title": "All the brands you use.",
      "brands.more": "and more",

      "how.eyebrow": "How it works",
      "how.title": "Simple from start to finish.",
      "how.1.title": "Book or call",
      "how.1.text": "Reserve a slot online or give us a call.",
      "how.2.title": "Free check-up",
      "how.2.text": "We diagnose the problem at no cost.",
      "how.3.title": "Approve the quote",
      "how.3.text": "You know the price before we start. No surprises.",
      "how.4.title": "Pick it up",
      "how.4.text": "Fixed and covered by a 1-week warranty.",

      "war.eyebrow": "Warranty",
      "war.title": 'Fixed right.<br><span class="gradient-text">Guaranteed.</span>',
      "war.text": "Every repair comes with a 1-week warranty. If the same issue comes back within a week, bring it back and we’ll make it right.",

      "book.eyebrow": "Booking",
      "book.title": "Book your repair.",
      "book.sub": "Tell us what’s wrong and we’ll contact you to confirm your slot.",
      "form.name": "Full name",
      "form.phone": "Mobile number",
      "form.brand": "Brand",
      "form.model": "Model",
      "form.modelPh": "e.g. iPhone 13",
      "form.issue": "Problem",
      "form.date": "Preferred date",
      "form.details": "Details (optional)",
      "form.choose": "Choose…",
      "form.other": "Other",
      "form.notSure": "Not sure",
      "form.submit": "Send booking request",
      "form.sending": "Sending…",
      "form.ok": "Thanks! We’ll text or call you shortly to confirm.",
      "form.err": "Something went wrong. Please call us at 0907 102 6027.",

      "faq.title": "Questions? Answers.",
      "faq.1.q": "How much does a repair cost?",
      "faq.1.a": "It depends on your model and the part needed. The check-up is free, and we give you a quote before any work begins.",
      "faq.2.q": "How long does a repair take?",
      "faq.2.a": "It depends on the repair and part availability. We’ll give you a time estimate during your free check-up.",
      "faq.3.q": "What does the warranty cover?",
      "faq.3.a": "Each repair includes a 1-week warranty on the work done and the parts replaced. It doesn’t cover new physical or water damage.",
      "faq.4.q": "Is my data safe?",
      "faq.4.a": "Your privacy matters. We only check what’s needed to test the repair. We still recommend backing up your phone before bringing it in.",
      "faq.5.q": "Do I need to book first?",
      "faq.5.a": "Booking or calling ahead helps us prepare the right parts and makes sure we’re ready for you.",

      "visit.eyebrow": "Contact",
      "visit.title": "Come visit us.",
      "visit.address": "Address",
      "visit.hours": "Hours",
      "visit.phone": "Phone",

      "chat.open": "Chat with us",
      "chat.close": "Close chat",
      "chat.title": "IFix8 Assistant",
      "chat.sub": "AI assistant · replies instantly",
      "chat.hello": "Hi! I’m the IFix8 assistant. Ask me about repairs or hours, or book a repair right here.",
      "chat.q1": "How much is a screen repair?",
      "chat.q2": "What are your hours?",
      "chat.q3": "Where are you located?",
      "chat.q4": "My phone got wet",
      "chat.q5": "I want to book a repair",
      "chat.placeholder": "Ask a question…",
      "chat.send": "Send",
      "chat.note": "AI answers can be wrong. Only share your name and number if you’re booking.",
      "chat.err": "Sorry, I can’t answer right now. Please call us at 0907 102 6027.",
      "chat.busy": "Too many messages right now. Please wait a few minutes or call 0907 102 6027.",
      "chat.bookTitle": "Your booking request",
      "chat.bookHint": "Need to change something? Just tell me.",
      "chat.bookSent": "Sent",
      "chat.bookCheck": "That mobile number doesn’t look right. Could you send it again? (e.g. 0917 123 4567)"
    },

    tl: {
      "nav.services": "Serbisyo",
      "nav.how": "Paano",
      "nav.faq": "FAQ",
      "nav.contact": "Kontak",
      "nav.book": "Mag-book",

      "hero.eyebrow": "Phone repair sa Las Piñas",
      "hero.title": 'Ang phone mo.<br><span class="gradient-text">Parang bago ulit.</span>',
      "hero.lead": "Eksperto sa pag-ayos ng iPhone, Samsung, Honor, Vivo, Huawei, Infinix, Oppo at iba pa. Libreng check-up. 1-linggong warranty.",
      "hero.book": "Mag-book ng repair",
      "hero.call": "Tumawag",
      "hero.card1.title": "1-linggong warranty",
      "hero.card1.sub": "Sa bawat repair",
      "hero.notif.time": "ngayon",
      "hero.notif.text": "Ayos na ang phone mo. Pwede mo nang kunin.",
      "hero.card2.title": "Libreng check-up",
      "hero.card2.sub": "Alamin muna ang presyo",

      "hl.1.title": "Libreng check-up",
      "hl.1.text": "Hahanapin namin ang sira nang libre.",
      "hl.2.title": "1-linggong warranty",
      "hl.2.text": "Sakop ang bawat repair.",
      "hl.3.title": "Presyo muna",
      "hl.3.text": "Walang sisimulan nang walang OK mo.",
      "hl.4.title": "Dito lang sa Talon Tres",
      "hl.4.text": "Malapit, magiliw at madaling puntahan.",

      "svc.eyebrow": "Serbisyo",
      "svc.title": 'Anuman ang sira.<br><span class="dim">Aayusin namin.</span>',
      "svc.lead": "Mula sa basag na screen hanggang sa mahinang baterya, libre naming hahanapin ang sira at aayusin nang tama.",
      "svc.bookThis": "I-book ang repair na ito",
      "svc.screen.title": "Palit screen",
      "svc.screen.text": "Basag, may dead pixels o hindi gumagana ang touch.",
      "svc.battery.title": "Palit baterya",
      "svc.battery.text": "Mabilis malowbat, lumobo o biglang namamatay.",
      "svc.port.title": "Charging port",
      "svc.port.text": "Maluwag ang cable o ayaw mag-charge.",
      "svc.water.title": "Nabasa / nalubog",
      "svc.water.text": "Nahulog sa tubig? Dalhin agad sa amin.",
      "svc.camera.title": "Ayos camera",
      "svc.camera.text": "Malabo ang kuha, basag ang lens o itim ang camera.",
      "svc.audio.title": "Speaker at mic",
      "svc.audio.text": "Hindi marinig o hindi ka marinig sa tawag.",
      "svc.back.title": "Back glass at housing",
      "svc.back.text": "Basag ang likod o sira ang frame.",
      "svc.software.title": "Problema sa software",
      "svc.software.text": "Nag-boot loop, nagha-hang o mabagal.",

      "brands.eyebrow": "Mga Brand",
      "brands.title": "Lahat ng brand na gamit mo.",
      "brands.more": "at iba pa",

      "how.eyebrow": "Paano",
      "how.title": "Madali mula umpisa hanggang dulo.",
      "how.1.title": "Mag-book o tumawag",
      "how.1.text": "Mag-reserve online o tawagan kami.",
      "how.2.title": "Libreng check-up",
      "how.2.text": "Titingnan namin ang problema nang libre.",
      "how.3.title": "Aprubahan ang presyo",
      "how.3.text": "Alam mo ang presyo bago namin simulan. Walang sorpresa.",
      "how.4.title": "Kunin ang phone",
      "how.4.text": "Ayos na, may kasama pang 1-linggong warranty.",

      "war.eyebrow": "Warranty",
      "war.title": 'Ayos na ayos.<br><span class="gradient-text">Garantisado.</span>',
      "war.text": "Bawat repair ay may 1-linggong warranty. Kapag bumalik ang parehong problema sa loob ng isang linggo, ibalik lang at aayusin namin.",

      "book.eyebrow": "Booking",
      "book.title": "I-book ang repair mo.",
      "book.sub": "Sabihin sa amin ang problema at kokontakin ka namin para kumpirmahin ang schedule mo.",
      "form.name": "Buong pangalan",
      "form.phone": "Numero ng cellphone",
      "form.brand": "Brand",
      "form.model": "Model",
      "form.modelPh": "hal. iPhone 13",
      "form.issue": "Problema",
      "form.date": "Gustong petsa",
      "form.details": "Detalye (opsyonal)",
      "form.choose": "Pumili…",
      "form.other": "Iba pa",
      "form.notSure": "Hindi sigurado",
      "form.submit": "Ipadala ang booking",
      "form.sending": "Ipinapadala…",
      "form.ok": "Salamat! Ite-text o tatawagan ka namin para kumpirmahin.",
      "form.err": "May nangyaring mali. Tumawag na lang sa 0907 102 6027.",

      "faq.title": "May tanong? May sagot.",
      "faq.1.q": "Magkano ang repair?",
      "faq.1.a": "Depende sa model at piyesang kailangan. Libre ang check-up, at bibigyan ka namin ng presyo bago magsimula.",
      "faq.2.q": "Gaano katagal ang repair?",
      "faq.2.a": "Depende sa repair at kung may stock ng piyesa. Sasabihin namin ang tantiyang oras sa libreng check-up.",
      "faq.3.q": "Ano ang sakop ng warranty?",
      "faq.3.a": "May 1-linggong warranty ang bawat repair sa trabaho at piyesang pinalitan. Hindi sakop ang bagong pisikal na sira o pagkabasa.",
      "faq.4.q": "Ligtas ba ang data ko?",
      "faq.4.a": "Mahalaga sa amin ang privacy mo. Ang kailangan lang para ma-test ang repair ang titingnan namin. Mainam pa ring mag-backup bago dalhin.",
      "faq.5.q": "Kailangan bang mag-book muna?",
      "faq.5.a": "Mas mainam mag-book o tumawag muna para maihanda namin ang tamang piyesa at handa kami pagdating mo.",

      "visit.eyebrow": "Kontak",
      "visit.title": "Bisitahin kami.",
      "visit.address": "Address",
      "visit.hours": "Oras",
      "visit.phone": "Telepono",

      "chat.open": "Makipag-chat sa amin",
      "chat.close": "Isara ang chat",
      "chat.title": "IFix8 Assistant",
      "chat.sub": "AI assistant · sumasagot agad",
      "chat.hello": "Hi! Ako ang IFix8 assistant. Magtanong tungkol sa repair o oras, o mag-book dito mismo.",
      "chat.q1": "Magkano ang palit screen?",
      "chat.q2": "Anong oras kayo bukas?",
      "chat.q3": "Saan kayo matatagpuan?",
      "chat.q4": "Nabasa ang phone ko",
      "chat.q5": "Gusto kong mag-book ng repair",
      "chat.placeholder": "Magtanong…",
      "chat.send": "Ipadala",
      "chat.note": "Maaaring mali ang sagot ng AI. Ibahagi lang ang pangalan at numero kung magbu-book.",
      "chat.err": "Pasensya, hindi ako makasagot ngayon. Tumawag sa 0907 102 6027.",
      "chat.busy": "Masyadong maraming mensahe ngayon. Maghintay ng ilang minuto o tumawag sa 0907 102 6027.",
      "chat.bookTitle": "Ang iyong booking request",
      "chat.bookHint": "May gustong baguhin? Sabihin mo lang.",
      "chat.bookSent": "Naipadala na",
      "chat.bookCheck": "Mukhang mali ang mobile number. Pakisend ulit? (hal. 0917 123 4567)"
    }
  };

  var current = "en";

  function t(key) {
    return (T[current] && T[current][key]) || T.en[key] || "";
  }

  function setLang(lang) {
    if (!T[lang]) lang = "en";
    current = lang;
    document.documentElement.lang = lang === "tl" ? "tl" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-html"));
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-placeholder"));
      if (v) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-aria"));
      if (v) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    renderScreenDate();

    try { localStorage.setItem("ifix8-lang", lang); } catch (e) {}
  }

  // Lock screen clock: iOS style (12-hour, no AM/PM), refreshed every second
  function renderScreenDate() {
    var now = new Date();
    var dateEl = document.getElementById("screen-date");
    var timeEl = document.getElementById("screen-time");
    if (timeEl) {
      var h = now.getHours() % 12 || 12;
      timeEl.textContent = h + ":" + String(now.getMinutes()).padStart(2, "0");
    }
    if (dateEl) {
      try {
        dateEl.textContent = now.toLocaleDateString(current === "tl" ? "fil-PH" : "en-US", { weekday: "long", month: "long", day: "numeric" });
      } catch (e) {}
    }
  }
  renderScreenDate();
  setInterval(renderScreenDate, 1000);

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem("ifix8-lang"); } catch (e) {}
  if (saved && saved !== "en") setLang(saved);

  // ---------- Scroll reveal ----------
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // ---------- Booking form (Netlify Forms) ----------
  var form = document.getElementById("booking-form");
  var status = document.getElementById("form-status");
  var dateInput = document.getElementById("f-date");

  // Service card arrows pre-select the problem in the booking form
  var issueSelect = document.getElementById("f-issue");
  document.querySelectorAll("[data-issue]").forEach(function (a) {
    a.addEventListener("click", function () {
      if (issueSelect) issueSelect.value = a.getAttribute("data-issue");
    });
  });

  if (dateInput) {
    var d = new Date();
    dateInput.min = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = t("form.sending");
      status.textContent = "";
      status.className = "form-status";

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          form.reset();
          status.textContent = t("form.ok");
          status.classList.add("ok");
        })
        .catch(function () {
          status.textContent = t("form.err");
          status.classList.add("err");
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = t("form.submit");
        });
    });
  }

  // ---------- AI support chat (calls /api/chat, a Netlify Function) ----------
  var fab = document.getElementById("chat-fab");
  var panel = document.getElementById("chat-panel");
  var chatLog = document.getElementById("chat-log");
  var chatForm = document.getElementById("chat-form");
  var chatInput = document.getElementById("chat-input");
  var chips = document.getElementById("chat-chips");
  var chatHistory = [];
  var waiting = false;

  function setChat(open) {
    panel.hidden = !open;
    fab.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("chat-open", open);
    if (open) chatInput.focus();
  }

  function addMsg(text, who) {
    var el = document.createElement("div");
    el.className = "msg " + who;
    el.textContent = text;
    chatLog.appendChild(el);
    chatLog.scrollTop = chatLog.scrollHeight;
    return el;
  }

  // Bot replies are kept in the history; consecutive ones are merged into one turn
  function pushBot(text) {
    var last = chatHistory[chatHistory.length - 1];
    if (last && last.role === "assistant") last.content += "\n" + text;
    else chatHistory.push({ role: "assistant", content: text });
  }

  var ISSUE_KEYS = {
    "Screen": "svc.screen.title", "Battery": "svc.battery.title", "Charging port": "svc.port.title",
    "Water damage": "svc.water.title", "Camera": "svc.camera.title", "Speaker/mic": "svc.audio.title",
    "Back glass/housing": "svc.back.title", "Software": "svc.software.title", "Not sure": "form.notSure"
  };

  // Booking summary from the assistant; nothing is sent until the customer presses the button
  function addBookingCard(b) {
    var card = document.createElement("div");
    card.className = "msg bot booking-card";
    var title = document.createElement("strong");
    title.textContent = t("chat.bookTitle");
    card.appendChild(title);

    var dl = document.createElement("dl");
    [
      ["form.name", b.name],
      ["form.phone", b.phone],
      ["form.brand", b.brand === "Other" ? t("form.other") : b.brand],
      ["form.model", b.model],
      ["form.issue", t(ISSUE_KEYS[b.issue] || "form.notSure")],
      ["form.date", b.date],
      ["form.details", b.details]
    ].forEach(function (row) {
      if (!row[1]) return;
      var dt = document.createElement("dt");
      dt.textContent = t(row[0]).replace(/\s*\(.*\)$/, "");
      var dd = document.createElement("dd");
      dd.textContent = row[1];
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
    card.appendChild(dl);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn";
    btn.textContent = t("form.submit");
    card.appendChild(btn);
    var hint = document.createElement("small");
    hint.textContent = t("chat.bookHint");
    card.appendChild(hint);

    btn.addEventListener("click", function () {
      btn.disabled = true;
      btn.textContent = t("form.sending");
      var data = new URLSearchParams({ "form-name": "booking", source: "chat" });
      ["name", "phone", "brand", "model", "issue", "date", "details"].forEach(function (k) { data.append(k, b[k] || ""); });
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString()
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          btn.textContent = t("chat.bookSent");
          hint.remove();
          addMsg(t("form.ok"), "bot");
          pushBot("(The customer sent this booking request. The shop will contact them to confirm.)");
        })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = t("form.submit");
          addMsg(t("form.err"), "bot error");
        });
    });

    chatLog.appendChild(card);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function send(text) {
    text = text.trim();
    if (!text || waiting) return;
    waiting = true;
    chips.hidden = true;
    chatInput.value = "";
    addMsg(text, "user");
    chatHistory.push({ role: "user", content: text });

    var typing = document.createElement("div");
    typing.className = "msg bot typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    chatLog.appendChild(typing);
    chatLog.scrollTop = chatLog.scrollHeight;

    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatHistory })
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          return { status: res.status, data: data };
        });
      })
      .then(function (r) {
        typing.remove();
        var d = r.data;
        if (r.status === 200 && (d.reply || d.booking || d.bookingInvalid)) {
          if (d.reply) {
            addMsg(d.reply, "bot");
            pushBot(d.reply);
          }
          if (d.booking) {
            addBookingCard(d.booking);
            pushBot("(Booking summary shown to the customer with a Send button: " + JSON.stringify(d.booking) + ")");
          } else if (d.bookingInvalid) {
            addMsg(t("chat.bookCheck"), "bot");
            pushBot(t("chat.bookCheck"));
          }
        } else {
          chatHistory.pop(); // drop the unanswered question so the next try stays valid
          addMsg(t(r.status === 429 ? "chat.busy" : "chat.err"), "bot error");
        }
      })
      .catch(function () {
        typing.remove();
        chatHistory.pop();
        addMsg(t("chat.err"), "bot error");
      })
      .then(function () {
        waiting = false;
      });
  }

  if (fab && panel) {
    fab.addEventListener("click", function () { setChat(panel.hidden); });
    document.getElementById("chat-close").addEventListener("click", function () { setChat(false); fab.focus(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { setChat(false); fab.focus(); }
    });
    chatForm.addEventListener("submit", function (e) {
      e.preventDefault();
      send(chatInput.value);
    });
    chips.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () { send(b.textContent); });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
