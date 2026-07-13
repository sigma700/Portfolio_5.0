/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */
const projects = [
  {
    title: "Al-Ahsan Motors",
    image:
      "https://res.cloudinary.com/dnadawobi/image/upload/v1783969940/Screenshot_2026-07-13_221146_ipqbwh.png",
    tags: ["Next js", "Framer-Motion"],
    link: "https://al-ahsan-ke.vercel.app/",
    desc: "Car dealership website",
  },
  {
    title: "Alphazion Ltd",
    image:
      "https://res.cloudinary.com/dnadawobi/image/upload/v1782155312/Screenshot_2026-06-20_004434_x8zbid.jpg",
    tags: ["HTML", "CSS"],
    link: "https://regal-scone-d475d1.netlify.app/",
    desc: "Professional website for a HVAC company based in Kenya",
  },
  // {
  //   title: "LAK Advocates",
  //   image:
  //     "https://res.cloudinary.com/dnadawobi/image/upload/v1782217742/Screenshot_2026-06-17_104818_hgtqtp.png",
  //   tags: ["NEXT Js", "TailWindCss", "FRAMER-MOTION"],
  //   link: "https://lak-eta.vercel.app/",
  //   desc: "Professional website for a law firm",
  // },
  {
    title: "Mindful Living KE",
    image:
      "https://res.cloudinary.com/dnadawobi/image/upload/v1780596696/mindfulLiving_gy9yfn.png",
    tags: ["React", "Paystack", "Node.js"],
    link: "https://mindfullivingke.onrender.com",
    desc: "Full-stack e-commerce for BF Suma distribution",
  },
  {
    title: "Macista Limited",
    image:
      "https://res.cloudinary.com/dnadawobi/image/upload/v1780574604/macista_fichv1.png",
    tags: ["React", "Express", "SEO"],
    link: "https://www.macista.co.ke/",
    desc: "Full corporate website for a Kenyan enterprise",
  },
  {
    title: "BrewHaven",
    image:
      "https://res.cloudinary.com/dnadawobi/image/upload/v1780574607/brew_haven_mfdmik.png",
    tags: ["ReactJs", "Tailwind CSS", "AWS"],
    link: "https://brewhaven-qea1.onrender.com/",
    desc: "Coffee e-commerce platform with payment integration",
  },
  {
    title: "Jordan Morris Portfolio",
    image:
      "https://res.cloudinary.com/dnadawobi/image/upload/v1780574604/jordan_morris_portfolio_bkrann.png",
    tags: ["React", "Next.js"],
    link: "https://jordanmorris.onrender.com/",
    desc: "Professional portfolio for a US-based client",
  },
  {
    title: "Protiba",
    image:
      "https://res.cloudinary.com/dnadawobi/image/upload/v1780574605/Screenshot_2025-09-20_203806_k3zhms.png",
    tags: ["React", "Node.js", "MongoDB", "Framer Motion"],
    link: "https://protiba.onrender.com/",
    desc: "AI-powered school timetable generator SaaS",
  },
];

/* PROCESS DATA */
const processSteps = [
  {
    name: "Discovery",
    color: "#84cc16",
    desc: "We align on your vision, goals, and audience. I dig deep to understand your business, competitors, and what success looks like.",
  },
  {
    name: "Strategy",
    color: "#3b82f6",
    desc: "I map out the technical architecture, user flows, and technology stack. Every decision is made with scalability in mind.",
  },
  {
    name: "Design",
    color: "#f59e0b",
    desc: "Pixel-perfect UI/UX design that balances beauty with function. I craft interfaces that users love and convert.",
  },
  {
    name: "Development",
    color: "#8b5cf6",
    desc: "Clean, maintainable code is shipped daily. I build with the MERN stack — fast, secure, and production-ready.",
  },
  {
    name: "Launch",
    color: "#ec4899",
    desc: "Deployment, testing, and a smooth go-live. I handle DNS, hosting setup, SSL, and make sure everything runs perfectly.",
  },
  {
    name: "Support",
    color: "#14b8a6",
    desc: "Post-launch care: bug fixes, updates, and guidance. I'm here to ensure your product stays healthy and grows with you.",
  },
];

const testimonials = [
  {
    name: "Mercy Mwenda",
    role: "CEO, Macista Limited",
    image: "/pexels-andrea-piacquadio-774909.jpg",
    quote:
      "We agreed the project would take four weeks but by the end of that week he had already sent me the application for review. Highly recommend working with him.",
  },
  {
    name: "Kevin Mwangi",
    role: "Founder, Kentech Solutions",
    image: "/kevin.png",
    quote:
      "Think about someone who does what he says. Allan is your guy. I was shocked by the seriousness he put into the work. Definitely someone to invest in.",
  },
  {
    name: "Amanda Reed",
    role: "Manager, BrewHaven USA",
    image: "/Screenshot 2025-10-24 165044.png",
    quote:
      "Needed a simple e-commerce application for my coffee shop and he delivered exactly as I had imagined it. A big thank you.",
  },
];

const skillsData = [
  {
    name: "MongoDB",
    cat: "Database",
    color: "#22c55e",
    faIcon: "fas fa-database",
    desc: "NoSQL document database powering scalable, flexible data storage.",
    tags: ["Schemas", "Aggregation", "Atlas", "Mongoose"],
  },
  {
    name: "Express.js",
    cat: "Backend Framework",
    color: "#d1d5db",
    faIcon: "fas fa-bolt",
    desc: "Minimal and fast Node.js web framework used to build RESTful APIs and server-side logic.",
    tags: ["REST APIs", "Middleware", "Routing", "MVC"],
  },
  {
    name: "React.js",
    cat: "Frontend Library",
    color: "#22d3ee",
    faIcon: "fab fa-react",
    desc: "Component-based UI library for building interactive, performant single-page applications.",
    tags: ["Hooks", "Context", "React Router", "SPA"],
  },
  {
    name: "Node.js",
    cat: "Runtime",
    color: "#84cc16",
    faIcon: "fab fa-node-js",
    desc: "JavaScript runtime that lets me build fast, event-driven back-end services.",
    tags: ["npm", "Event Loop", "Streams", "ES Modules"],
  },
  {
    name: "Git",
    cat: "Version Control",
    color: "#f97316",
    faIcon: "fab fa-git-alt",
    desc: "Version control system used across all projects for collaboration, branching, and CI/CD pipelines.",
    tags: ["GitHub", "Branching", "PRs", "CI/CD"],
  },
  {
    name: "Linux",
    cat: "Operating System",
    color: "#fde047",
    faIcon: "fab fa-linux",
    desc: "Primary development environment. Comfortable with the terminal, bash scripting, and server administration.",
    tags: ["Ubuntu", "Bash", "SSH", "Cron Jobs"],
  },
  {
    name: "REST APIs",
    cat: "API Design",
    color: "#fb923c",
    faIcon: "fas fa-plug",
    desc: "Designed and consumed RESTful APIs across multiple client projects with proper auth and error handling.",
    tags: ["JWT", "Postman", "OpenAPI", "OAuth"],
  },
  {
    name: "Framer Motion",
    cat: "Animation",
    color: "#f472b6",
    faIcon: "fas fa-cubes",
    desc: "Production-ready animation library used to craft fluid, physics-based interactions across UIs.",
    tags: ["Variants", "Gestures", "ScrollTrigger", "Spring"],
  },
  {
    name: "Tailwind CSS",
    cat: "Styling",
    color: "#38bdf8",
    faIcon: "fab fa-css3-alt",
    desc: "Utility-first CSS framework that accelerates UI development without leaving the HTML.",
    tags: ["Responsive", "Dark Mode", "JIT", "Custom Config"],
  },
  {
    name: "Next.js",
    cat: "Framework",
    color: "#ffffff",
    faIcon: "fab fa-react",
    desc: "React framework with SSR, SSG, and ISR for building production-grade web applications.",
    tags: ["SSR", "SSG", "App Router", "API Routes"],
  },
  {
    name: "TypeScript",
    cat: "Language",
    color: "#3b82f6",
    faIcon: "fas fa-code",
    desc: "Typed superset of JavaScript used to write safer, more maintainable code across large codebases.",
    tags: ["Types", "Generics", "Interfaces", "TSConfig"],
  },
  {
    name: "Docker",
    cat: "DevOps",
    color: "#0ea5e9",
    faIcon: "fab fa-docker",
    desc: "Containerisation tool used to package applications and ensure consistent environments in deployment.",
    tags: ["Containers", "Docker Compose", "Images", "Registry"],
  },
];

/* RENDER PROJECTS */
document.getElementById("projects-grid").innerHTML = projects
  .map(
    (p) => `
      <div class="project-card reveal">
        <div class="project-img-wrap">
          <img class="project-img" loading="lazy" src="${p.image}" alt="${p.title}" onerror="this.style.background='#0a1628';this.removeAttribute('src')">
          <div class="project-img-overlay"></div>
          <div class="project-hover-icon"><div class="project-hover-btn">&#8599;</div></div>
          <div class="project-shimmer"></div>
        </div>
        <div class="project-content">
          <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
          <div class="project-name">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <a href="${p.link}" target="_blank" rel="noopener" class="project-link">View Live <span>&#8599;</span></a>
        </div>
      </div>
    `,
  )
  .join("");

/* RENDER TESTIMONIALS */
document.getElementById("test-grid").innerHTML = testimonials
  .map(
    (t) => `
      <div class="test-card reveal">
        <div class="test-stars">${[1, 2, 3, 4, 5].map(() => `<span class="test-star">&#9733;</span>`).join("")}</div>
        <div class="test-quote-mark">&#8220;</div>
        <p class="test-text">${t.quote}</p>
        <div class="test-author">
          <img class="test-avatar" src="${t.image}" alt="${t.name}" onerror="this.style.background='#1a2a40';this.removeAttribute('src')">
          <div><div class="test-name">${t.name}</div><div class="test-role">${t.role}</div></div>
        </div>
      </div>
    `,
  )
  .join("");

/* SCROLL PROGRESS */
const scrollProg = document.getElementById("scroll-prog");
window.addEventListener("scroll", () => {
  scrollProg.style.transform = `scaleX(${window.scrollY / (document.body.scrollHeight - window.innerHeight)})`;
});

/* CREDENTIAL CARDS — tilt effect */
(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  if (prefersReducedMotion || isTouch) return;

  const cards = document.querySelectorAll(".cred-card[data-tilt]");
  const MAX_TILT = 6;

  cards.forEach((card) => {
    let rafId = null;
    let pending = null;

    function applyTilt() {
      if (!pending) return;
      const {px, py, rect} = pending;
      const rx = ((py / rect.height) * 2 - 1) * -MAX_TILT;
      const ry = ((px / rect.width) * 2 - 1) * MAX_TILT;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
      card.style.setProperty("--mx", `${px}px`);
      card.style.setProperty("--my", `${py}px`);
      rafId = null;
    }

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      pending = {
        px: e.clientX - rect.left,
        py: e.clientY - rect.top,
        rect,
      };
      if (!rafId) rafId = requestAnimationFrame(applyTilt);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
    });
  });
})();

/* SKILLS SLIDER */
(function () {
  const wrap = document.getElementById("skills-slides");
  const dotsW = document.getElementById("skills-dots");
  let current = 0,
    total = skillsData.length,
    timer;

  wrap.innerHTML = skillsData
    .map(
      (
        s,
        i,
      ) => `<div class="skills-slide${i === 0 ? " active" : ""}" data-idx="${i}">
      <div class="slide-inner">
        <div class="slide-icon-wrap">
          <div class="slide-icon-box">
            <div class="slide-icon-glow" style="background:${s.color}"></div>
            <i class="${s.faIcon}" style="font-size: 68px; color: ${s.color};"></i>
          </div>
          <div class="slide-num" style="color:${s.color}">${String(i + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}</div>
        </div>
        <div class="slide-info">
          <div class="slide-cat" style="color:${s.color}">${s.cat}</div>
          <div class="slide-name" style="color:${s.color}">${s.name}</div>
          <div class="slide-desc">${s.desc}</div>
          <div class="slide-tags">${s.tags.map((t) => `<span class="slide-tag">${t}</span>`).join("")}</div>
        </div>
      </div>
    </div>`,
    )
    .join("");

  dotsW.innerHTML = skillsData
    .map(
      (_, i) =>
        `<div class="skills-dot${i === 0 ? " active" : ""}" data-i="${i}"></div>`,
    )
    .join("");

  function goTo(n) {
    const slides = wrap.querySelectorAll(".skills-slide");
    const dots = dotsW.querySelectorAll(".skills-dot");
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (n + total) % total;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function autoPlay() {
    timer = setInterval(() => goTo(current + 1), 4000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  document.getElementById("skills-next").addEventListener("click", () => {
    stopAuto();
    goTo(current + 1);
    autoPlay();
  });
  document.getElementById("skills-prev").addEventListener("click", () => {
    stopAuto();
    goTo(current - 1);
    autoPlay();
  });
  dotsW.addEventListener("click", (e) => {
    const dot = e.target.closest(".skills-dot");
    if (dot) {
      stopAuto();
      goTo(+dot.dataset.i);
      autoPlay();
    }
  });
  autoPlay();
})();

/* ═══════════════════════════════════════════════
   PROCESS ZIGZAG — PER-ITEM SCROLLTRIGGER
   Each step now animates against its OWN position in the
   viewport (start: "top 85%", end: "top 40%") instead of a
   single master timeline scrubbed across the whole section's
   scroll distance. That old approach tied each item's reveal
   progress to total section height / step count, which meant
   an item could finish (or barely start) animating while it
   was still off-screen — the actual cause of content getting
   "hidden" mid-scroll. This guarantees every step is fully
   revealed while it is inside the viewport, on any screen size.
   ═══════════════════════════════════════════════ */
(function () {
  const list = document.getElementById("process-zz-list");
  const svg = document.getElementById("process-zz-svg");
  const wrap = document.getElementById("process-zz-wrap");
  if (!list) return;

  list.innerHTML = processSteps
    .map((step, i) => {
      const even = i % 2 === 0;
      const card = `<div class="process-zz-card" style="--process-color:${step.color}" data-card="${i}">
        <div style="position:absolute;top:0;right:0;width:70px;height:70px;border-radius:50%;background:radial-gradient(circle,${step.color}12,transparent 70%);pointer-events:none"></div>
        <div class="process-step-num" style="color:${step.color}">${String(i + 1).padStart(2, "0")} / ${String(processSteps.length).padStart(2, "0")}</div>
        <div class="process-name" style="--process-color:${step.color}">${step.name}</div>
        <div class="process-desc">${step.desc}</div>
      </div>`;
      const node = `<div class="process-zz-node"><div class="process-zz-dot" style="--process-color:${step.color}" data-dot="${i}"></div></div>`;
      const spacer = `<div class="process-zz-spacer"></div>`;
      return `<div class="process-zz-item" data-index="${i}" style="margin-bottom:40px">${even ? card + node + spacer : spacer + node + card}</div>`;
    })
    .join("");

  function drawLines() {
    const dots = list.querySelectorAll("[data-dot]");
    if (dots.length < 2) {
      svg.innerHTML = "";
      return;
    }
    const wRect = wrap.getBoundingClientRect();
    let paths = "";
    for (let i = 0; i < dots.length - 1; i++) {
      const a = dots[i].getBoundingClientRect();
      const b = dots[i + 1].getBoundingClientRect();
      const ax = a.left - wRect.left + a.width / 2;
      const ay = a.top - wRect.top + a.height / 2 + window.scrollY;
      const bx = b.left - wRect.left + b.width / 2;
      const by = b.top - wRect.top + b.height / 2 + window.scrollY;
      const midY = (ay + by) / 2;
      const col = processSteps[i].color;
      paths += `<path id="proczzpath-${i}" d="M${ax},${ay} C${ax},${midY} ${bx},${midY} ${bx},${by}" stroke="${col}" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="1000" stroke-dashoffset="1000" opacity="0.6"/>`;
    }
    svg.innerHTML = paths;

    document.querySelectorAll("#process-zz-svg path").forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.dataset.length = len;
    });
  }

  function initPerItemTriggers() {
    const items = list.querySelectorAll(".process-zz-item");

    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === wrap || st.trigger === list) return;
      if (st.vars && st.vars.__processStep) st.kill();
    });

    items.forEach((item, i) => {
      const card = item.querySelector(".process-zz-card");
      const dot = item.querySelector(".process-zz-dot");
      const stepNum = item.querySelector(".process-step-num");
      const nameEl = item.querySelector(".process-name");
      const descEl = item.querySelector(".process-desc");
      const color = card.style.getPropertyValue("--process-color").trim();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
          invalidateOnRefresh: true,
          __processStep: true,
        },
        defaults: {ease: "power3.out"},
      });

      tl.set(item, {opacity: 1}, 0);

      tl.fromTo(
        dot,
        {scale: 0.3, opacity: 0, boxShadow: "0 0 0 0 rgba(0,0,0,0)"},
        {
          scale: 1.8,
          opacity: 1,
          boxShadow: `0 0 20px ${color}66, 0 0 60px ${color}33`,
          duration: 0.5,
          ease: "back.out(2.5)",
        },
        0,
      ).to(
        dot,
        {
          scale: 1,
          boxShadow: `0 0 12px ${color}44, 0 0 30px ${color}22`,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.5,
      );

      tl.to(
        card,
        {
          borderColor: color,
          boxShadow: `0 0 40px ${color}33, 0 20px 60px rgba(0,0,0,0.5)`,
          duration: 0.4,
          ease: "power2.out",
        },
        0.05,
      );

      tl.fromTo(
        stepNum,
        {y: 16, opacity: 0},
        {y: 0, opacity: 1, duration: 0.35, ease: "power2.out"},
        0.1,
      );

      tl.fromTo(
        nameEl,
        {y: 30, opacity: 0, clipPath: "inset(0 0 100% 0)"},
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.6,
          ease: "power4.out",
        },
        0.15,
      );

      tl.fromTo(
        descEl,
        {y: 16, opacity: 0},
        {y: 0, opacity: 1, duration: 0.4, ease: "power3.out"},
        0.4,
      );

      const path = document.getElementById(`proczzpath-${i}`);
      if (path) {
        const len = parseFloat(path.dataset.length) || 600;
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
            invalidateOnRefresh: true,
            __processStep: true,
          },
        });
      }
    });
  }

  function initTiltEffect() {
    const cards = list.querySelectorAll(".process-zz-card");
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
        card.style.transition = "transform 0.1s ease-out";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
        card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      });
    });
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    list
      .querySelectorAll(".process-zz-item")
      .forEach((el) => (el.style.opacity = "1"));
    return;
  }

  setTimeout(() => {
    drawLines();
    initTiltEffect();
    initPerItemTriggers();
  }, 100);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      drawLines();
      ScrollTrigger.getAll().forEach((st) => st.refresh());
    }, 250);
  });
})();

/* SALES CHART */
(function () {
  const canvas = document.getElementById("sales-chart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const labels = [
    "Pre-Launch",
    "Month 1",
    "Month 2",
    "Month 3",
    "Month 4",
    "Month 5",
    "Month 6",
  ];
  const macista = [100, 108, 116, 122, 127, 131, 130];
  const mindful = [100, 103, 106, 108, 109, 110, 110.45];
  const brewhaven = [100, 112, 122, 130, 136, 139, 140.66];
  const colors = {m: "#84cc16", mi: "#3b82f6", b: "#a78bfa"};
  let progress = 0,
    animating = false;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function draw(p) {
    const W = canvas.width,
      H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    const isMobile = W < 500;
    const pad = {
      left: isMobile ? 38 : 52,
      right: isMobile ? 60 : 80,
      top: 24,
      bottom: isMobile ? 44 : 52,
    };
    const chartW = W - pad.left - pad.right,
      chartH = H - pad.top - pad.bottom;
    const yMin = 95,
      yMax = 148;
    const ySteps = [100, 110, 120, 130, 140];

    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.lineWidth = 1;
    ySteps.forEach((v) => {
      const y = pad.top + chartH * (1 - (v - yMin) / (yMax - yMin));
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(W - pad.right, y);
      ctx.stroke();
      ctx.fillStyle = "rgba(107,114,128,0.75)";
      ctx.font = `${isMobile ? 9 : 10}px JetBrains Mono,monospace`;
      ctx.textAlign = "right";
      ctx.fillText(v, pad.left - 6, y + 4);
    });

    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(107,114,128,0.7)";
    ctx.font = `${isMobile ? 8 : 10}px JetBrains Mono,monospace`;
    labels.forEach((l, i) => {
      const x = pad.left + (i / (labels.length - 1)) * chartW;
      ctx.fillText(isMobile && i % 2 !== 0 ? "" : l, x, H - pad.bottom + 18);
    });

    function drawLine(data, color) {
      const pts = [];
      const count = Math.floor(p * (data.length - 1));
      const frac = p * (data.length - 1) - count;
      for (let i = 0; i <= count; i++) {
        pts.push([
          pad.left + (i / (labels.length - 1)) * chartW,
          pad.top + chartH * (1 - (data[i] - yMin) / (yMax - yMin)),
        ]);
      }
      if (count < data.length - 1) {
        const i = count;
        const x = pad.left + (i / (labels.length - 1)) * chartW;
        const nx = pad.left + ((i + 1) / (labels.length - 1)) * chartW;
        const y = pad.top + chartH * (1 - (data[i] - yMin) / (yMax - yMin));
        const ny =
          pad.top + chartH * (1 - (data[i + 1] - yMin) / (yMax - yMin));
        pts.push([lerp(x, nx, frac), lerp(y, ny, frac)]);
      }
      if (pts.length < 2) return;

      const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
      grad.addColorStop(0, color + "28");
      grad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pad.top + chartH);
      pts.forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.lineTo(pts[pts.length - 1][0], pad.top + chartH);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) {
        const cpx = (pts[i - 1][0] + pts[i][0]) / 2;
        ctx.bezierCurveTo(
          cpx,
          pts[i - 1][1],
          cpx,
          pts[i][1],
          pts[i][0],
          pts[i][1],
        );
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.stroke();
      ctx.shadowBlur = 0;

      pts.forEach(([x, y], idx) => {
        if (idx === pts.length - 1) {
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.shadowBlur = 14;
          ctx.shadowColor = color;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.fill();
          ctx.shadowBlur = 0;
          const val = data[Math.min(count, data.length - 1)];
          const label = `+${(val - 100).toFixed(2)}%`;
          ctx.fillStyle = color;
          ctx.font = `bold ${isMobile ? 10 : 12}px Space Grotesk,sans-serif`;
          ctx.textAlign = "left";
          ctx.fillText(label, x + 10, y - 6);
        } else {
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      });
    }

    drawLine(macista, colors.m);
    drawLine(mindful, colors.mi);
    drawLine(brewhaven, colors.b);
  }

  function startAnim() {
    if (animating) return;
    animating = true;
    progress = 0;

    function step() {
      progress = Math.min(progress + 0.011, 1);
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight || 320;
      draw(progress);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const sec = document.getElementById("sales-graph-section");

  function checkView() {
    if (!sec) return;
    if (sec.getBoundingClientRect().top < window.innerHeight * 0.85) {
      startAnim();
      window.removeEventListener("scroll", checkView);
    }
  }
  window.addEventListener("scroll", checkView);
  checkView();
  window.addEventListener("resize", () => {
    if (animating && progress >= 1) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight || 320;
      draw(1);
    }
  });
})();

/* TYPING EFFECT */
setTimeout(() => {
  new Typed("#typed-role", {
    strings: [
      "FullStack Web Developer",
      "MERN Stack Engineer",
      "UI/UX Craftsman",
      "Tech Entrepreneur",
    ],
    typeSpeed: 50,
    backSpeed: 28,
    backDelay: 1800,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
}, 1400);

/* CONTACT FORM */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById("form-btn");
  document.getElementById("form-btn-text").textContent = "Sending...";
  document.getElementById("form-btn-arrow").textContent = "";
  btn.style.opacity = "0.7";
  btn.style.pointerEvents = "none";
  setTimeout(() => {
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("form-success").style.display = "block";
  }, 1800);
}

/* GSAP SCROLL REVEALS */
gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll(".reveal").forEach((el) => {
  gsap.fromTo(
    el,
    {opacity: 0, y: 50},
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    },
  );
});

gsap
  .timeline({delay: 0.2})
  .to(".hero-name-line span", {
    y: "0%",
    duration: 1,
    ease: "power4.out",
    stagger: 0.12,
  })
  .to(
    ".hero-role",
    {opacity: 1, y: 0, duration: 0.6, ease: "power3.out"},
    "-=0.3",
  )
  .to(".hero-desc", {opacity: 1, duration: 0.6, ease: "power3.out"}, "-=0.2")
  .to(
    ".hero-actions",
    {opacity: 1, y: 0, duration: 0.6, ease: "power3.out"},
    "-=0.2",
  )
  .to(".hero-scroll-hint", {opacity: 1, duration: 0.4}, "-=0.1")
  .to(
    ".hero-photo-side",
    {opacity: 1, x: 0, duration: 0.8, ease: "power3.out"},
    "-=0.6",
  );

gsap.to("#about .about-headline", {
  yPercent: -15,
  ease: "none",
  scrollTrigger: {
    trigger: "#about",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

/* PRELOADER */
(function () {
  const bar = document.getElementById("preloader-bar");
  const pct = document.getElementById("preloader-pct");
  const loader = document.getElementById("preloader");
  gsap.to(loader.querySelectorAll("#preloader-name span"), {
    y: "0%",
    duration: 0.6,
    ease: "power4.out",
    stagger: 0.05,
    delay: 0.1,
  });
  let prog = 0;
  const iv = setInterval(() => {
    prog += Math.random() * 18 + 3;
    if (prog >= 100) prog = 100;
    bar.style.width = prog + "%";
    pct.textContent = String(Math.floor(prog)).padStart(3, "0") + "%";
    if (prog >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.in",
          onComplete: () => {
            loader.style.display = "none";
          },
        });
      }, 300);
    }
  }, 60);
})();

/* Lazy-load blur-in for project images */
document.querySelectorAll(".project-img").forEach((img) => {
  if (img.complete) img.classList.add("loaded");
  else img.addEventListener("load", () => img.classList.add("loaded"));
});

/* MOBILE MENU */
(function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  const closeBtn = document.getElementById("menuClose");
  const links = document.querySelectorAll(".mobile-menu-links li");
  let isOpen = false;
  let animationRunning = false;

  function openMenu() {
    if (animationRunning || isOpen) return;
    animationRunning = true;
    isOpen = true;
    document.body.classList.add("menu-open");
    hamburger.classList.add("active");
    overlay.classList.add("open");
    menu.classList.add("open");
    gsap.fromTo(
      links,
      {opacity: 0, x: 30},
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.15,
        onComplete: () => {
          animationRunning = false;
        },
      },
    );
  }

  function closeMenu() {
    if (animationRunning || !isOpen) return;
    animationRunning = true;
    gsap.to(links, {
      opacity: 0,
      x: 30,
      duration: 0.25,
      ease: "power2.in",
      stagger: 0.03,
      onComplete: () => {
        overlay.classList.remove("open");
        menu.classList.remove("open");
        hamburger.classList.remove("active");
        document.body.classList.remove("menu-open");
        isOpen = false;
        animationRunning = false;
      },
    });
  }

  hamburger.addEventListener("click", () => {
    if (isOpen) closeMenu();
    else openMenu();
  });

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) closeMenu();
  });

  links.forEach((li) => {
    const a = li.querySelector("a");
    if (a) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const href = a.getAttribute("href");
        closeMenu();
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({behavior: "smooth"});
        }, 350);
      });
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && isOpen) closeMenu();
  });

  const focusableElements = menu.querySelectorAll(
    'a, button, [tabindex]:not([tabindex="-1"])',
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  menu.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  });
})();

/* ═══════════════════════════════════════════════
   FAQ — Smooth accordion + staggered reveal
   ═══════════════════════════════════════════════ */
(function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, i) => {
    gsap.fromTo(
      item,
      {opacity: 0, y: 30},
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");

    summary.addEventListener("click", (e) => {
      e.preventDefault();

      const isOpen = item.open;

      faqItems.forEach((other) => {
        if (other !== item && other.open) {
          other.open = false;
        }
      });

      if (isOpen) {
        item.open = false;
      } else {
        item.open = true;
      }
    });
  });

  document.querySelectorAll(".faq-answer").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
})();

/* ═══════════════════════════════════════════════
   PRICING TOGGLE
   ═══════════════════════════════════════════════ */
(function () {
  const MAINTENANCE_ADDON = 30000;
  const WHATSAPP_BASE = "https://wa.me/792624342?text=";

  const cards = document.querySelectorAll(".price-card");
  const toggleOnetime = document.getElementById("toggleOnetime");
  const toggleMaintenance = document.getElementById("toggleMaintenance");
  const togglePill = document.getElementById("togglePill");
  let maintenanceOn = false;

  function formatKsh(n) {
    return n.toLocaleString("en-US");
  }

  function positionPill(target) {
    const shell = target.parentElement;
    const shellRect = shell.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    togglePill.style.width = rect.width + "px";
    togglePill.style.transform =
      "translateX(" + (rect.left - shellRect.left - 6) + "px)";
  }

  function setToggle(isMaintenance) {
    maintenanceOn = isMaintenance;
    toggleOnetime.classList.toggle("active", !isMaintenance);
    toggleMaintenance.classList.toggle("active", isMaintenance);
    positionPill(isMaintenance ? toggleMaintenance : toggleOnetime);
    updatePrices();
    updateWhatsAppLinks();
  }

  function updatePrices() {
    cards.forEach((card) => {
      const base = parseInt(card.dataset.base, 10);
      const amountEl = card.querySelector("[data-amount]");
      const noteEl = card.querySelector("[data-note]");
      const newTotal = maintenanceOn ? base + MAINTENANCE_ADDON : base;
      const newNote = maintenanceOn
        ? "Includes 6 months maintenance"
        : "One‑time payment";

      amountEl.classList.add("swapping");
      noteEl.classList.add("swapping");
      setTimeout(() => {
        amountEl.textContent = formatKsh(newTotal);
        noteEl.textContent = newNote;
        amountEl.classList.remove("swapping");
        noteEl.classList.remove("swapping");
      }, 180);
    });
  }

  function updateWhatsAppLinks() {
    cards.forEach((card) => {
      const base = parseInt(card.dataset.base, 10);
      const name = card.dataset.name;
      const total = maintenanceOn ? base + MAINTENANCE_ADDON : base;
      const planLabel = maintenanceOn
        ? "package, KSh " +
          formatKsh(total) +
          ", including 6 month maintenance,"
        : "package, KSh " + formatKsh(total) + ",";
      const link = card.querySelector("[data-whatsapp-link]");
      const msg =
        "Hi Allan, I'm interested in the " +
        name +
        " " +
        planLabel +
        " for my business. Could we discuss details?";
      link.href = WHATSAPP_BASE + encodeURIComponent(msg);
    });
  }

  toggleOnetime.addEventListener("click", () => setToggle(false));
  toggleMaintenance.addEventListener("click", () => setToggle(true));

  window.addEventListener("load", () => {
    positionPill(toggleOnetime);
    updateWhatsAppLinks();
  });

  window.addEventListener("resize", () => {
    positionPill(maintenanceOn ? toggleMaintenance : toggleOnetime);
  });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    cards.forEach((c) => c.classList.add("in-view"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(cards).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, idx * 140);
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.2, rootMargin: "0px 0px -40px 0px"},
    );
    cards.forEach((card) => observer.observe(card));
  }
})();
