/* ============================================
   AMMAD PORTFOLIO — main.js
   ============================================ */

/* ── Dark mode default (set before paint) ── */
document.body.classList.add('dark');

/* ── Loader ── */
;(function() {
  const loader = document.getElementById('loader');
  const prog   = document.getElementById('loaderProgress');
  if (!loader) return;
  let p = 0;
  const t = setInterval(() => {
    p += Math.random() * 13 + 4;
    if (p >= 100) {
      p = 100; clearInterval(t);
      const spiral = document.getElementById('spiral');
      if (spiral) {
        spiral.style.transition = 'filter .7s ease, opacity .7s ease';
        spiral.style.filter = 'blur(0px) brightness(1.12)';
      }
      setTimeout(() => loader.classList.add('done'), 420);
      setTimeout(() => { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 1350);
    }
    if (prog) prog.textContent = Math.floor(p);
  }, 88);
})();

/* ── Smooth Custom Cursor (desktop only) ── */
;(function() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  // Skip if touch device
  if (window.matchMedia('(hover: none)').matches) {
    cursor.style.display = 'none';
    return;
  }
  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let tx = cx, ty = cy;
  let raf;

  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });

  function loop() {
    // Lerp — GPU-friendly via translate3d
    cx += (tx - cx) * 0.16;
    cy += (ty - cy) * 0.16;
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%,-50%)`;
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  document.querySelectorAll('[data-hover], a, button, input, textarea, .proj, .exp-row, .chip').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
})();

/* ── Scroll Progress ── */
;(function() {
  const bar = document.getElementById('progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.transform = `scaleX(${p})`;
  }, { passive: true });
})();

/* ── Reveal on scroll ── */
;(function() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ── Dark/Light toggle ── */
;(function() {
  const toggle = document.getElementById('toggle');
  if (!toggle) return;
  toggle.textContent = 'Light';  // default is dark
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  });
})();

/* ── Marquee ── */
;(function() {
  const wrap = document.getElementById('marquee');
  if (!wrap) return;
  const items = ['Python','Machine Learning','Flask','C++','Data Structures','Prompt Engineering','SQL','Full-Stack','Canva'];
  const star = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/></svg>`;
  wrap.innerHTML = [...items, ...items].map(t => `<span>${t}${star}</span>`).join('');
})();

/* ── Experience Data ── */
;(function() {
  const container = document.getElementById('exp');
  if (!container) return;
  const data = [
    { y: '2025', t: 'Campus Lead — SZABIST', b: 'Leading 4 developers on a web platform. Mentoring peers in C++ & DSA.' },
    { y: '2024', t: 'Social Media Manager',  b: 'Freelance content & community for Instagram, Facebook, LinkedIn.' },
    { y: '2023', t: 'MS Office Specialist',  b: 'Reports, dashboards, and pitch decks across academic projects.' },
  ];
  container.innerHTML = data.map(e => `
    <div class="exp-row reveal">
      <div class="exp-year">${e.y}</div>
      <div class="exp-title">${e.t}</div>
      <div class="exp-body">${e.b}</div>
      <svg class="exp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M7 17 17 7M7 7h10v10"/>
      </svg>
    </div>`).join('');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.exp-row').forEach(el => io.observe(el));
})();

/* ── Projects ── */
;(function() {
  const grid = document.getElementById('projGrid');
  if (!grid) return;
  const projects = [
    {
      t: 'Chat-Buddy', tag: 'Full-Stack', d: 'April 2025',
      desc: 'Social web app with auth, real-time messaging & group chats. Built with Flask, OOP architecture, and pickle-based persistence.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87"/></svg>'
    },
    {
      t: 'Assignment Similarity Checker', tag: 'Algorithms', d: 'March 2025',
      desc: 'Plagiarism detector using hash maps + merge sort to cluster and rank similar submissions at scale.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>'
    },
    {
      t: 'Fitness Prediction Model', tag: 'Machine Learning', d: 'Feb–Mar 2025',
      desc: 'Supervised regression model with end-to-end preprocessing and a live UI for real-time predictions.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 1 1-5 0V17a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3 2.5 2.5 0 0 1 2.5-3ZM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 1 0 5 0V17a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3 2.5 2.5 0 0 0-2.5-3Z"/></svg>'
    },
  ];
  grid.innerHTML = projects.map(p => `
    <div class="proj reveal">
      <div class="proj-head">${p.icon}<span class="proj-tag">${p.tag}</span></div>
      <div class="proj-date">${p.d}</div>
      <h3>${p.t}</h3>
      <p>${p.desc}</p>
    </div>`).join('');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.proj').forEach(el => io.observe(el));
})();

/* ── Skills ── */
;(function() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  const skills = {
    'Programming':  ['Python','C++','Flask','HTML/CSS','SQL'],
    'AI / ML':      ['Machine Learning','Regression','Data Preprocessing','Prompt Engineering'],
    'MS Office':    ['Word','Excel','PowerPoint'],
    'Social':       ['Instagram','Facebook','LinkedIn','Canva'],
    'Tools':        ['VS Code','PyCharm','Jupyter','Git','Cursor','Claude MCP'],
  };
  grid.innerHTML = Object.entries(skills).map(([k, v]) => `
    <div class="reveal">
      <div class="cat">${k}</div>
      <div class="chips">${v.map(s => `<span class="chip">${s}</span>`).join('')}</div>
    </div>`).join('');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.skills-grid > div').forEach(el => io.observe(el));
})();

/* ── Contact Form ── */
;(function() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const n = form.name.value.trim();
    const em = form.email.value.trim();
    const m = form.msg.value.trim();
    if (!n || !em || !m) { status.textContent = 'Please fill in all fields.'; return; }
    const subject = encodeURIComponent(`Portfolio inquiry from ${n}`);
    const body = encodeURIComponent(`${m}\n\n— ${n} (${em})`);
    window.location.href = `mailto:ammadgo123@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app…';
    form.reset();
  });
})();

/* ── CV Download (placeholder) ── */
;(function() {
  const btn = document.getElementById('downloadCv');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert('CV download: replace this handler with your actual PDF base64 or file link.');
  });
})();

/* ── Three.js: Hero Spiral (desktop only) ── */
;(function() {
  if (typeof THREE === 'undefined') return;
  // Skip on mobile — too heavy, clutters content
  if (window.innerWidth < 768) return;

  const canvas = document.getElementById('spiral');
  const heroEl = document.querySelector('.hero');
  if (!canvas || !heroEl) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, .1, 1000);
  camera.position.z = 12;

  function resize() {
    const w = heroEl.clientWidth, h = heroEl.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize, { passive: true }); resize();

  const group = new THREE.Group();
  const N = 380;
  const accent = new THREE.Color('#e2541a');
  const glow   = new THREE.Color('#f3a04a');
  for (let i = 0; i < N; i++) {
    const t = i / N;
    const a = t * Math.PI * 13;
    const r = .4 + t * 5.2;
    const y = (t - .5) * 8.5;
    const geo = new THREE.SphereGeometry(.055 + t * .045, 7, 7);
    const col = accent.clone().lerp(glow, t);
    const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .5 + t * .42 });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    group.add(m);
  }
  scene.add(group);

  // Only track mouse on non-touch
  let mx = 0, my = 0;
  if (window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', e => {
      mx = (e.clientX / window.innerWidth - .5);
      my = (e.clientY / window.innerHeight - .5);
    }, { passive: true });
  }

  let running = true;
  function tick(t) {
    if (!running) return;
    group.rotation.y = t * .00022;
    group.rotation.x = Math.sin(t * .00028) * .28 + my * .35;
    camera.position.x += (mx * 1.1 - camera.position.x) * .028;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // Update accent color on theme switch
  const obs = new MutationObserver(() => {
    const c = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#e2541a';
    accent.set(c);
  });
  obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
})();

/* ── Three.js: Skills 3D background (desktop only) ── */
;(function() {
  if (typeof THREE === 'undefined') return;
  if (window.innerWidth < 768) return;

  const canvas = document.getElementById('skills-3d');
  const sec    = document.getElementById('skills');
  if (!canvas || !sec) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, .1, 100);
  camera.position.z = 6;

  function resize() {
    const w = sec.clientWidth, h = sec.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize, { passive: true }); resize();

  const group = new THREE.Group(); scene.add(group);
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.4, .42, 160, 22),
    new THREE.MeshBasicMaterial({ color: 0xe2541a, wireframe: true, transparent: true, opacity: .48 })
  );
  group.add(knot);
  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.55, 1),
    new THREE.MeshBasicMaterial({ color: 0xf3a04a, wireframe: true, transparent: true, opacity: .22 })
  );
  group.add(ico);

  let lx = 0, ly = 0;
  if (window.matchMedia('(hover: hover)').matches) {
    sec.addEventListener('mousemove', e => {
      const r = sec.getBoundingClientRect();
      lx = (e.clientX - r.left) / r.width - .5;
      ly = (e.clientY - r.top)  / r.height - .5;
    }, { passive: true });
  }

  function tick(t) {
    knot.rotation.x = t * .0005; knot.rotation.y = t * .0008;
    ico.rotation.x = -t * .00025; ico.rotation.y = t * .00035;
    group.rotation.y += (lx * .55 - group.rotation.y) * .045;
    group.rotation.x += (ly * .38 - group.rotation.x) * .045;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* ── Persistent Wave Grid BG (desktop only) ── */
;(function() {
  if (typeof THREE === 'undefined') return;
  // Completely skip on mobile — CSS gradient handles it
  if (window.innerWidth < 768) return;

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, .1, 200);
  camera.position.set(0, 8, 18); camera.lookAt(0, 0, 0);

  // Fewer segments + smaller dots = cleaner look
  const geom = new THREE.PlaneGeometry(60, 60, 50, 50);
  const mat  = new THREE.PointsMaterial({ color: 0xe2541a, size: .055, transparent: true, opacity: .55 });
  const pts  = new THREE.Points(geom, mat);
  pts.rotation.x = -Math.PI / 2.2;
  scene.add(pts);

  const pos  = geom.attributes.position;
  const orig = pos.array.slice();

  let mx = 0, my = 0;
  if (window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', e => {
      mx = (e.clientX / window.innerWidth  - .5) * 2;
      my = (e.clientY / window.innerHeight - .5) * 2;
    }, { passive: true });
  }

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  resize(); window.addEventListener('resize', resize, { passive: true });

  let t = 0;
  function loop() {
    t += .011;
    for (let i = 0; i < pos.count; i++) {
      const x = orig[i * 3], y = orig[i * 3 + 1];
      pos.array[i * 3 + 2] = Math.sin(x * .33 + t) * Math.cos(y * .33 + t * .78) * 1.15;
    }
    pos.needsUpdate = true;
    pts.rotation.z += .00065;
    camera.position.x += (mx * 2.8 - camera.position.x) * .025;
    camera.position.y += (8 - my * 1.8 - camera.position.y) * .025;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  loop();

  const obs = new MutationObserver(() => {
    const c = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#e2541a';
    mat.color.set(c);
  });
  obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
})();
