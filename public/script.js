/**
 * Satvik Jambagi - Portfolio Core Script
 * Includes System Ingress Portal, Scrolling Diagnostic Logs, Supernova Canvas, Custom Cursor, Terminal Emulator, and API Integrations.
 */

// 1. Projects Database
const projectsData = [
  {
    id: "browserbaba",
    title: "BrowserBaba",
    category: "ai-gen",
    tech: ["FastAPI", "React", "TypeScript", "LangChain", "Qdrant", "Gemini", "OpenAI"],
    github: "https://github.com/7vik2005/BrowserBaba",
    shortDesc: "An enterprise-grade Chrome Extension that indexes active webpages into Qdrant vector databases in real-time, enabling semantic chats with any site or complete domain from a React sidebar.",
    overview: "BrowserBaba breaks the sequential search barrier by introducing autonomous, sidebar-driven RAG architecture to web browsing. Once indexed, webpages and complete domains are queried using hybrid search mechanisms directly from the client sidebar.",
    features: [
      "Strips out DOM menus, footers, and advertising layout blocks using Mozilla Readability parser (reduces context noise by 80%).",
      "Performs semantic indexing by recursively splitting article bodies into chunks, converting them to 3072-dimensional embeddings via Gemini's API.",
      "Implements a hybrid Cosine-Overlap Reranker sorting vector hits by token overlap density to raise signal precision.",
      "Leverages Chrome Extension Storage to maintain persistent conversation sessions and collection logs."
    ]
  },
  {
    id: "mediscope",
    title: "MediScope AI",
    category: "ai-gen",
    tech: ["PyTorch", "FastAPI", "Next.js", "FAISS", "OCR", "SHAP"],
    github: "https://github.com/7vik2005/MediScope-AI",
    shortDesc: "A clinical diagnostics platform calculating multi-label disease predictions from tabular markers and unstructured report text via multimodal PyTorch networks, explained via SHAP.",
    overview: "MediScope AI fuses raw clinical parameters and text notes to yield predictive metrics. It handles unstructured health records, clinical files, and scanned diagnostic report sheets using advanced AI-driven extraction and explainable decision paths.",
    features: [
      "Fuses structured clinical parameters and clinical textual embeddings using a dual-input deep neural network engineered in PyTorch.",
      "Calculates explainability matrices on predictions utilizing PyTorch-integrated SHAP (SHapley Additive exPlanations) to trace diagnostics features.",
      "Deploys a multi-tiered OCR processing engine to convert scanned charts, note files, and health sheets into sanitized text formats.",
      "Maintains a persistent local FAISS index for semantic querying and retrieval-augmented clinical consultation workflows."
    ]
  },
  {
    id: "shakespeare",
    title: "ShakespeareGPT",
    category: "ai-gen",
    tech: ["TensorFlow", "Python", "NumPy", "Matplotlib", "NLP"],
    github: "https://github.com/7vik2005/ShakespeareGPT",
    shortDesc: "A decoder-only GPT style Transformer architecture coded from scratch in TensorFlow and trained on the complete works of William Shakespeare for autoregressive generation.",
    overview: "This project is a detailed implementation of the classic generative Transformer architecture outlined in the 'Attention Is All You Need' paper. It operates on character-level vocabularies to model semantic distributions and generate custom text sequences.",
    features: [
      "Constructed Multi-Head Self-Attention layers, causal masking blocks, positional sinusoidal encoders, residual routes, and layer norms from base TF matrices.",
      "Incorporated configurable training pipelines containing TensorBoard monitors to visualize perplexity declines and gradient health.",
      "Engineered an attention-weight visualizer using Matplotlib to inspect internal multi-head matrix focus maps over output sequences.",
      "Supports tunable autoregressive inference via temperature adjustments, top-k selection, and top-p (nucleus) decoding algorithms."
    ]
  },
  {
    id: "querytwin",
    title: "QueryTwin AI",
    category: "ai-gen",
    tech: ["Python", "XGBoost", "Streamlit", "SHAP", "Optuna", "NLP"],
    github: "https://github.com/7vik2005/QueryTwin-AI",
    shortDesc: "An intelligent question deduplication system mapping natural language queries using 22 handcrafted semantic features and TF-IDF arrays into a Bayesian-optimized XGBoost classifier.",
    overview: "QueryTwin flags semantic overlaps between question strings. By processing syntactical features alongside dense statistical weights, it determines if separate prompts ask the same thing in different words.",
    features: [
      "Feature engineers 22 text features including character/word overlaps, Jaccard distances, fuzzy string matching indices, and corpus frequencies.",
      "Trains a binary XGBoost classifier optimized with Bayesian hyperparameter searches using the Optuna framework.",
      "Provides SHAP feature attribution displays to inspect features driving duplicate flags in real-time.",
      "Wraps the inference framework inside an interactive Streamlit GUI supporting multi-pair inputs."
    ]
  },
  {
    id: "nomnom",
    title: "NomNom",
    category: "dist-web",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "RabbitMQ", "Socket.IO", "Stripe", "Razorpay"],
    github: "https://github.com/7vik2005/NomNom",
    shortDesc: "A distributed microservices food delivery application containing real-time rider dispatch systems, location-aware queries, and dual-payment gateways wrapped in a Neo-Brutalist UI.",
    overview: "NomNom is a full-stack distributed system built to manage order cycles from catalog browses to rider dropoffs. It communicates asynchronously via message brokers to protect transactional boundaries.",
    features: [
      "Architected event-driven workflows utilizing RabbitMQ queues to decouple order states, rider allocations, and checkout operations.",
      "Utilizes geospatial queries in MongoDB to query, distance-sort, and index restaurant lists within milliseconds relative to user coordinates.",
      "Engineered a real-time order tracking loop using bi-directional Socket.IO connections displaying live dispatch states.",
      "Integrates Stripe (global cards) and Razorpay (INR) to manage secure transactions under transactional safety limits."
    ]
  },
  {
    id: "prohire",
    title: "ProHire Nexus",
    category: "dist-web",
    tech: ["Next.js", "React", "TypeScript", "Express.js", "PostgreSQL", "Redis", "Apache Kafka", "Gemini API"],
    github: "https://github.com/7vik2005/ProHire-Nexus",
    shortDesc: "A scalable, microservice-based recruitment portal that processes resume formats, utilizes Redis caches for queries, and pipelines Kafka brokers for asynchronous notifications.",
    overview: "ProHire Nexus handles candidate registration, resume indexing, application stages, and notification queues across decoupled nodes. It automates profile parsing using AI-driven integrations.",
    features: [
      "Engineered asynchronous pipelines on Apache Kafka message brokers to dispatch alerts and mailings across microservice modules.",
      "Utilizes Redis caching layouts to quicken query times on high-traffic listings and job feeds.",
      "Integrates Google Gemini APIs to run automated ATS analysis checking structural keywords and scoring profiles.",
      "Built with high-performance Next.js frontends connected to Express microservices via secure token-based REST layers."
    ]
  },
  {
    id: "convox",
    title: "Convox",
    category: "dist-web",
    tech: ["Node.js", "React", "Express.js", "MongoDB", "WebRTC", "Socket.IO", "AWS Translate"],
    github: "https://github.com/7vik2005/Convox",
    shortDesc: "A WebRTC language exchange portal supporting live video channels, instant messaging feeds, and real-time translation pipelines powered by AWS systems.",
    overview: "Convox brings international learners together. It couples low-latency video feeds with instant-translation text boxes, breaking down language barriers dynamically.",
    features: [
      "Orchestrates peer-to-peer WebRTC connections with signaling structures written over Socket.IO servers.",
      "Hooks text feeds into AWS Translation endpoints to decode messages into target languages on-the-fly.",
      "Secures customer sessions using JSON Web Token frameworks backed by MongoDB database schemas.",
      "Fully responsive design utilizing modern layout flexes and media handles."
    ]
  },
  {
    id: "satzillax",
    title: "SATzillaX",
    category: "sys-alg",
    tech: ["C++17", "Algorithms", "Boolean SAT", "Data Structures", "Heuristics"],
    github: "https://github.com/7vik2005/SATzillaX",
    shortDesc: "A high-performance Boolean Satisfiability (SAT) solver implementing Conflict-Driven Clause Learning (CDCL) algorithms and optimized data structures from scratch in pure C++17.",
    overview: "SATzillaX tackles NP-complete combinatorics by implementing optimization techniques found in modern industrial solvers (like Minisat). It parses DIMACS CNF files and explores search branches systematically.",
    features: [
      "Implements 1-UIP (First Unique Implication Point) conflict analysis to dynamically derive and learn back-jump clauses during search.",
      "Optimizes constraint propagation loops utilizing Two-Watched Literals heuristics to drastically lower literal checking operations.",
      "Controls search paths using VSIDS (Variable State Independent Decaying Sum) decision heuristics and phase-saving records.",
      "Employs non-chronological backtracking and geometric restart loops to escape local minima in complex formulas."
    ]
  },
  {
    id: "copycat",
    title: "CopyCat Crusher",
    category: "sys-alg",
    tech: ["C++17", "LLVM", "libclang", "CMake", "AST Analysis"],
    github: "https://github.com/7vik2005/CopyCat-Crushers",
    shortDesc: "A static code clone detector parsing C++ projects into Abstract Syntax Trees (AST) using LLVM libclang API to calculate structural similarities.",
    overview: "CopyCat Crusher checks code files for structural plagiarism. Instead of primitive string comparisons, it analyzes token structures and tree structures to capture code renames and layout swaps.",
    features: [
      "Integrates LLVM's libclang library to build reliable AST graphs of source scripts.",
      "Analyzes similarity rates using Levenshtein distance metrics on serialized AST node structures.",
      "Handles variable renames, spacing variations, and formatting revisions by translating blocks to normalized symbol sets.",
      "Configures build chains via CMake setups supporting automated cross-compiling."
    ]
  },
  {
    id: "firesense",
    title: "FireSense AI",
    category: "cv-sec",
    tech: ["Python", "YOLOv8", "OpenCV", "Flask", "AWS", "Twilio API"],
    github: "https://github.com/7vik2005/FireSense-AI",
    shortDesc: "A computer vision safety system running fine-tuned YOLOv8 object detection weights over video feeds to recognize fire and smoke, triggering emergency notification alerts.",
    overview: "FireSense AI monitors industrial environments. By applying fine-tuned computer vision models to raw cameras, it guarantees rapid alarm triggers before physical heat sensors activate.",
    features: [
      "Fine-tuned the YOLOv8 object detection model on custom datasets to tag smoke and flame patterns with high recall.",
      "Processes camera inputs in real-time using OpenCV frames, filtering out structural noises.",
      "Triggers automatic alert pipelines via Twilio (SMS calls) and SMTP servers the moment confidence bounds clear triggers.",
      "Hosts control dials and video streaming streams inside a modular Flask web frame."
    ]
  },
  {
    id: "deskguardian",
    title: "DeskGuardian",
    category: "cv-sec",
    tech: ["Python", "OpenCV", "dlib", "PyQt5", "Scikit-learn"],
    github: "https://github.com/7vik2005/DeskGuardian",
    shortDesc: "An AI posture corrector and fatigue monitor desktop application utilizing facial landmark detection and classification models under PyQt5 wrappers.",
    overview: "DeskGuardian operates in the OS background, assessing user neck alignment, computing blink frequencies (EAR), and warning developers when fatigue or slumping crosses healthy limits.",
    features: [
      "Calculates vertical and horizontal neck-slump angles by analyzing landmarks extracted from face feeds via dlib models.",
      "Computes Eye Aspect Ratios (EAR) to detect drowsiness indicators and logs blink counts.",
      "Constructed GUI dashboard and tray states using PyQt5 framework features.",
      "Applies Scikit-learn thresholds to personalize warnings based on individual baseline posture metrics."
    ]
  },
  {
    id: "telesentry",
    title: "TeleSentry AI",
    category: "cv-sec",
    tech: ["Python", "Scikit-learn", "Streamlit", "FastAPI", "SHAP", "Docker"],
    github: "https://github.com/7vik2005/TeleSentry-AI",
    shortDesc: "A telecom fraud detection analytics engine matching rule checks and Isolation Forest anomaly models to flag suspicious caller logs, with SHAP diagnostics.",
    overview: "TeleSentry AI scans massive Call Detail Records (CDRs). It combines deterministic compliance rules with machine learning classification models to isolate anomalous spikes.",
    features: [
      "Deploys unsupervised Isolation Forest algorithms to parse tabular call statistics for abnormal behavior indexes.",
      "Integrates SHAP frameworks to trace feature weight vectors contributing to individual anomaly scores.",
      "Serves model queries using FastAPI endpoints packaged under Docker containers for deployment readiness.",
      "Renders dynamic analytics dashboards and model sliders using Streamlit layouts."
    ]
  }
];

// 2. DOM Elements & Initial Setup
let isLandingActive = true; 
let isSupernova = false;
let logIntervals = [];

document.addEventListener("DOMContentLoaded", () => {
  initLandingPage();
  initCustomCursor();
  renderProjects();
  initFilters();
  initTerminal();
  initModals();
  initNavigation();
  initScrollAnimations();
  initContactForm();
});

// 3. System Ingress Portal & Diagnostics logs
const leftLogPool = [
  "[SYS] Initializing local connection...",
  "[SYS] Mounting database tables...",
  "[RAG] BrowserBaba vector store: active",
  "[CDCL] SATzillaX watched literals check: OK",
  "[SYS] Postgres response time: 2ms",
  "[KAFKA] Decoupled notification consumer online",
  "[AI] MediScope OCR preprocessing ready",
  "[SYS] Redis cluster node connected (127.0.0.1:6379)",
  "[RAG] Qdrant collections initialized: 12 maps",
  "[SYS] Compiling static assets... DONE"
];

const rightLogPool = [
  "[SYS] Gateway authorization complete",
  "[TF] Shakespeare dataset parsing... OK",
  "[CV] FireSense YOLOv8 camera bounds mapped",
  "[SYS] AWS cluster EC2 check status: OK",
  "[XG] QueryTwin Optuna tuning initialized",
  "[CV] DeskGuardian dlib facial model allocated",
  "[SYS] Docker bridge interface online",
  "[SYS] Middleware authentication rules compiled",
  "[SYS] Allocated cognitive sub-agents: 4",
  "[SYS] Decrypting clause structures... SUCCESS"
];

function initLandingPage() {
  const canvas = document.getElementById("landing-canvas");
  const landingScreen = document.getElementById("landing-screen");
  const enterBtn = document.getElementById("enter-btn");
  const navLogoBtn = document.getElementById("nav-logo-btn");
  const landingTitle = document.querySelector(".landing-title");
  const navLogoText = document.querySelector(".nav-logo .logo-text");
  const coreContainer = document.getElementById("ingressCore");

  if (!landingScreen || !enterBtn) return;

  // Enforce scroll lock when landing page is loaded
  document.documentElement.classList.add("scroll-locked");
  document.body.classList.add("scroll-locked");

  // Initial title character splits
  prepareIngressText(landingTitle);
  prepareIngressText(navLogoText);

  // Diagnostic Log streams loop
  startBootLogs();

  // Entering home page - Supernova transition
  enterBtn.addEventListener("click", () => {
    isSupernova = true;
    coreContainer?.classList.add("supernova-active");
    landingScreen.classList.add("exit-active");
    
    // Release scroll lock
    document.documentElement.classList.remove("scroll-locked");
    document.body.classList.remove("scroll-locked");
    
    stopBootLogs();

    // Disable loop after fade animation (900ms)
    setTimeout(() => {
      isLandingActive = false;
    }, 900);

    // Terminal autofocus
    setTimeout(() => {
      document.getElementById("terminalInput")?.focus();
    }, 950);
  });

  // Logo click back to portal
  navLogoBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    isLandingActive = true;
    isSupernova = false;
    
    coreContainer?.classList.remove("supernova-active");
    landingScreen.classList.remove("exit-active");
    
    // Re-lock scrolling
    document.documentElement.classList.add("scroll-locked");
    document.body.classList.add("scroll-locked");
    
    initCanvasAnimation();
    startBootLogs();
  });

  // Background Interactive Canvas
  function initCanvasAnimation() {
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let particles = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    class Particle {
      constructor(x, y, isSupernovaPart = false) {
        this.x = x !== undefined ? x : Math.random() * width;
        this.y = y !== undefined ? y : Math.random() * height;
        
        if (isSupernovaPart) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 8 + 4;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.size = Math.random() * 3 + 1.5;
        } else {
          this.vx = (Math.random() - 0.5) * 0.7;
          this.vy = (Math.random() - 0.5) * 0.7;
          this.size = Math.random() * 2 + 1;
        }
        this.alpha = 1;
        this.decay = isSupernovaPart ? Math.random() * 0.015 + 0.005 : 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (isSupernova) {
          this.alpha -= this.decay;
        }

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(204, 164, 59, ${this.alpha * 0.4})`;
        ctx.fill();
      }
    }

    const count = Math.min(60, Math.floor((width * height) / 18000));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    let mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("click", (e) => {
      if (!isLandingActive) return;
      if (e.clientX === undefined || e.clientY === undefined) return;
      
      // Burst on regular click
      if (!isSupernova) {
        for (let i = 0; i < 5; i++) {
          let p = new Particle(e.clientX, e.clientY);
          p.vx = (Math.random() - 0.5) * 2.5;
          p.vy = (Math.random() - 0.5) * 2.5;
          particles.push(p);
        }
      }
    });

    function animate() {
      if (!isLandingActive) return; 

      ctx.clearRect(0, 0, width, height);

      // Supernova state injects explosion particles from core center
      if (isSupernova && particles.length < 150) {
        const centerX = width / 2;
        const centerY = height / 2;
        for (let i = 0; i < 15; i++) {
          particles.push(new Particle(centerX, centerY, true));
        }
      }

      // Filter decayed supernova particles
      particles = particles.filter(p => p.alpha > 0);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Connections (skipping if supernova is active for visual simplicity)
      if (!isSupernova) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(204, 164, 59, ${0.2 * (1 - dist / 110)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }

          if (mouse.x !== null && mouse.y !== null) {
            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(204, 164, 59, ${0.25 * (1 - dist / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  initCanvasAnimation();
}

// Scrolling Diagnostics logs logic
function startBootLogs() {
  stopBootLogs();
  
  const leftBox = document.getElementById("bootLogsLeft");
  const rightBox = document.getElementById("bootLogsRight");

  if (!leftBox || !rightBox) return;

  leftBox.innerHTML = "";
  rightBox.innerHTML = "";

  function feedLog(box, pool) {
    const text = pool[Math.floor(Math.random() * pool.length)];
    const line = document.createElement("div");
    line.className = "boot-log-line";
    
    // Add date/timestamp prefix
    const time = new Date().toLocaleTimeString().split(" ")[0];
    line.innerHTML = `<span class="text-accent">[${time}]</span> ${text}`;
    
    box.appendChild(line);
    
    // Keep max 20 logs in container
    if (box.children.length > 20) {
      box.removeChild(box.firstChild);
    }
    
    // Scroll container
    box.scrollTop = box.scrollHeight;
  }

  // Interval feeders
  const leftInt = setInterval(() => feedLog(leftBox, leftLogPool), 350);
  const rightInt = setInterval(() => feedLog(rightBox, rightLogPool), 420);
  
  logIntervals.push(leftInt, rightInt);
}

function stopBootLogs() {
  logIntervals.forEach(clearInterval);
  logIntervals = [];
}

// Fixed-width Character Splitter for zero-width-shift Ingress animations
function prepareIngressText(element) {
  if (!element) return;
  const originalText = element.dataset.value || element.textContent;
  if (!originalText) return;
  
  element.innerHTML = "";
  originalText.split("").forEach((char, index) => {
    const span = document.createElement("span");
    if (char === " ") {
      span.className = "glitch-char space";
      span.innerHTML = "&nbsp;";
    } else {
      span.className = "glitch-char";
      span.textContent = char;
      span.style.animationDelay = `${index * 30}ms`;
    }
    element.appendChild(span);
  });
}

// 4. Custom Follow Cursor
function initCustomCursor() {
  const dot = document.getElementById("custom-cursor-dot");
  const ring = document.getElementById("custom-cursor-ring");

  if (!dot || !ring) return;

  let ringX = 0, ringY = 0;
  let mouseX = 0, mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function tickCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(tickCursor);
  }
  tickCursor();

  // Event Delegation hover
  const hoverablesSelector = "a, button, input, textarea, .filter-tab, .modal-close, .resume-option-card, .read-details-btn, .core-center";
  
  document.body.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverablesSelector)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.body.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverablesSelector)) {
      document.body.classList.remove("cursor-hover");
    }
  });
}

// 5. Projects Rendering
function renderProjects(filterValue = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  const filtered = filterValue === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filterValue);
    
  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.setAttribute("data-id", project.id);
    
    let iconClass = "fa-folder";
    if (project.category === "ai-gen") iconClass = "fa-brain";
    else if (project.category === "dist-web") iconClass = "fa-server";
    else if (project.category === "sys-alg") iconClass = "fa-square-root-alt";
    else if (project.category === "cv-sec") iconClass = "fa-shield-halved";

    const techPills = project.tech.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join("");
    
    card.innerHTML = `
      <div class="project-card-header">
        <h3>${project.title}</h3>
        <i class="fas ${iconClass} project-icon"></i>
      </div>
      <div class="project-card-body">
        <p class="project-card-desc">${project.shortDesc}</p>
        <div class="project-card-tech">
          ${techPills}
        </div>
      </div>
      <div class="project-card-footer">
        <button class="read-details-btn" onclick="openProjectDrawer('${project.id}')">
          Read Details <i class="fas fa-arrow-right"></i>
        </button>
        <div class="project-card-links">
          <a href="${project.github}" target="_blank" aria-label="Github code"><i class="fab fa-github"></i></a>
        </div>
      </div>
    `;
    grid.appendChild(card);
    
    setTimeout(() => card.classList.add("visible"), 50);
  });
}

// 6. Project Filters
function initFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

// 7. Modals Binders
let activeModal = null;

function initModals() {
  const resumeBtn = document.getElementById("resumeSelectorBtn");
  const resumeModal = document.getElementById("resumeModal");
  const closeResume = document.getElementById("closeResumeModal");
  
  const closeDetails = document.getElementById("closeDetailsModal");
  const detailsModal = document.getElementById("projectDetailsModal");

  resumeBtn?.addEventListener("click", () => openModal(resumeModal));
  closeResume?.addEventListener("click", () => closeModal(resumeModal));
  closeDetails?.addEventListener("click", () => closeModal(detailsModal));

  window.addEventListener("click", (e) => {
    if (e.target === resumeModal) closeModal(resumeModal);
    if (e.target === detailsModal) closeModal(detailsModal);
  });
}

function openModal(modal) {
  modal.classList.add("active");
  document.body.classList.add("scroll-locked");
  activeModal = modal;
}

function closeModal(modal) {
  modal.classList.remove("active");
  
  const landingScreen = document.getElementById("landing-screen");
  if (landingScreen && !landingScreen.classList.contains("exit-active")) {
    document.body.classList.add("scroll-locked");
  } else {
    document.body.classList.remove("scroll-locked");
  }
  
  activeModal = null;
}

// Open dynamic details drawer
window.openProjectDrawer = function(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectDetailsModal");
  const title = document.getElementById("modalProjectTitle");
  const github = document.getElementById("modalProjectGithub");
  const techContainer = document.getElementById("modalProjectTech");
  const desc = document.getElementById("modalProjectDesc");
  const featuresList = document.getElementById("modalProjectFeatures");

  title.textContent = project.title;
  github.href = project.github;
  techContainer.innerHTML = project.tech.map(t => `<span class="tag">${t}</span>`).join("");
  desc.textContent = project.overview;
  featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join("");

  openModal(modal);
};

// 8. Interactive Terminal
function initTerminal() {
  const terminalInput = document.getElementById("terminalInput");
  const terminalBody = document.getElementById("terminalBody");

  if (!terminalInput || !terminalBody) return;

  const widget = document.querySelector(".terminal-widget");
  widget?.addEventListener("click", () => {
    terminalInput.focus();
  });

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = terminalInput.value.trim().toLowerCase();
      processCommand(command);
      terminalInput.value = "";
    }
  });
}

function printToTerminal(text, type = "normal") {
  const terminalBody = document.getElementById("terminalBody");
  if (!terminalBody) return;

  const line = document.createElement("div");
  
  if (type === "command") {
    line.className = "terminal-line font-medium";
    line.innerHTML = `<span class="terminal-prompt">satvik@portfolio:~$</span> ${text}`;
  } else if (type === "accent") {
    line.className = "terminal-line text-accent";
    line.textContent = text;
  } else {
    line.className = "terminal-line";
    line.innerHTML = text;
  }

  const inputLine = terminalBody.querySelector(".terminal-input-line");
  terminalBody.insertBefore(line, inputLine);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function processCommand(cmd) {
  if (!cmd) return;
  
  printToTerminal(cmd, "command");

  switch(cmd) {
    case "help":
      printToTerminal("Available commands:");
      printToTerminal("  <span class='text-accent'>about</span>       - Brief personal overview");
      printToTerminal("  <span class='text-accent'>skills</span>      - Technical languages and tools catalog");
      printToTerminal("  <span class='text-accent'>experience</span>  - Work and leadership experience summary");
      printToTerminal("  <span class='text-accent'>projects</span>    - List all 12 projects on record");
      printToTerminal("  <span class='text-accent'>resume</span>      - Open the resume track selection panel");
      printToTerminal("  <span class='text-accent'>contact</span>     - View contact info & social profiles");
      printToTerminal("  <span class='text-accent'>clear</span>       - Clear the screen buffer");
      break;
      
    case "about":
      printToTerminal("Satvik Jambagi - B.Tech CSE undergrad at VIT (2023-27).");
      printToTerminal("AI/ML & Full Stack Developer specializing in distributed architectures and agentic AI pipelines.");
      printToTerminal("Current CGPA: 9.36. 1150+ coding problems solved globally.");
      break;
      
    case "skills":
      printToTerminal("Languages: C++17, Python, TypeScript, React, Next.js, Java, SQL, C, HTML/CSS");
      printToTerminal("Backend & Systems: Node.js, Express, FastAPI, Kafka, RabbitMQ, Socket.IO, Redis");
      printToTerminal("AI & Generative AI: PyTorch, TensorFlow, LangGraph, LangChain, LangSmith, MCP, SHAP, RAG");
      printToTerminal("Cloud & Databases: PostgreSQL, MongoDB, Docker, AWS (EC2/S3/CloudFront), FAISS");
      break;
      
    case "experience":
      printToTerminal("AI Engineer Intern - Physics Wallah (Mar 2025 – Aug 2025)");
      printToTerminal("  - Built 'NutriBaba' nutrition platform integrating multimodal LLMs.");
      printToTerminal("  - Managed 5+ MCP servers and orchestrated LangGraph agent models.");
      printToTerminal("Senior Core Member - VIT Stellar (2024-2025)");
      printToTerminal("  - Mentored 50+ participants on astronomical coordinates.");
      break;
      
    case "projects":
      printToTerminal("All 12 Projects on Record:");
      projectsData.forEach(p => {
        printToTerminal(`  - <span class='text-accent'>${p.title}</span> (${p.tech.slice(0, 3).join(", ")})`);
      });
      printToTerminal("Type 'open [project-name]' is not supported, scroll down to interact with drawers!");
      break;
      
    case "resume":
      printToTerminal("Opening resume selectors...", "accent");
      const resumeModal = document.getElementById("resumeModal");
      if (resumeModal) openModal(resumeModal);
      break;
      
    case "contact":
      printToTerminal("Email: satvikjambagi@gmail.com");
      printToTerminal("Phone: +91 80802 73783");
      printToTerminal("GitHub: https://github.com/7vik2005");
      printToTerminal("LinkedIn: https://www.linkedin.com/in/satvik-jambagi/");
      break;
      
    case "clear":
      const body = document.getElementById("terminalBody");
      if (body) {
        const inputLine = body.querySelector(".terminal-input-line");
        body.innerHTML = "";
        body.appendChild(inputLine);
      }
      break;
      
    default:
      printToTerminal(`Command not found: '${cmd}'. Type 'help' for instructions.`);
  }
}

// 9. Navigation & Hamburger Menu
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section, header");
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// 10. Scroll Reveal Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll(".fade-in, .skill-group, .ach-card, .timeline-item, .edu-card, .cred-card");
  elements.forEach((el, index) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = `${(index % 3) * 100}ms`;
    observer.observe(el);
  });
}

// 11. Contact Form POST Handler
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessage").value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !email || !message) {
      showNotification("Please fill in all inputs.", "error");
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Sending... <i class='fas fa-spinner fa-spin ml-2'></i>";
    submitBtn.disabled = true;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (response.ok) {
        showNotification(data.message || "Message sent successfully!", "success");
        form.reset();
      } else {
        showNotification(data.message || "Something went wrong.", "error");
      }
    } catch (err) {
      console.error(err);
      showNotification("Network error. Please try again.", "error");
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Custom notifications overlay
function showNotification(msg, type = "info") {
  const container = document.createElement("div");
  container.className = `notification notification-${type}`;
  
  container.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    background-color: ${type === "success" ? "#cca43b" : "#e11d48"};
    color: ${type === "success" ? "#000" : "#fff"};
    font-family: var(--font-header);
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 100000;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  `;

  const icon = type === "success" ? "fa-circle-check" : "fa-circle-xmark";
  container.innerHTML = `<i class="fas ${icon}"></i> <span>${msg}</span>`;

  document.body.appendChild(container);

  setTimeout(() => {
    container.style.transform = "translateY(0)";
    container.style.opacity = "1";
  }, 10);

  setTimeout(() => {
    container.style.transform = "translateY(100px)";
    container.style.opacity = "0";
    setTimeout(() => container.remove(), 300);
  }, 4000);
}
