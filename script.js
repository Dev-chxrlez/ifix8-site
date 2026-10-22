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
      "brands.note": "IFix8 is an independent repair shop. Brand names and logos belong to their owners.",

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
      "visit.phone": "Phone"
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
      "brands.note": "Ang IFix8 ay isang independent na repair shop. Ang mga brand name at logo ay pag-aari ng kani-kanilang may-ari.",

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
      "visit.phone": "Telepono"
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

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
