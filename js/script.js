/* ---------------- Page Loader ---------------- */
window.addEventListener('load', ()=>{
  const loader = document.getElementById('pageLoader');
  if(!loader) return;
  setTimeout(()=>{
    loader.classList.add('loaded');
    setTimeout(()=> loader.remove(), 700);
  }, 350);
});

/* ---------------- DATA ---------------- */
const categories = ["All","Photography","Video","Animations","Graphic Design","3D","AI Works"];

const works = [
 // Photography — includes EXIF metadata (aperture, shutter, ISO, focal length)
 {id:1,title:"Framing",cat:"Photography",year:"2025",desc:"Using natural framing elements to draw the eye toward the subject and add depth to the composition.",img:"img/framing.jpg",tall:true,exif:{aperture:"5",shutter:"1/125s",iso:800,focal:22}},
 {id:2,title:"Diagonal Triangle",cat:"Photography",year:"2025",desc:"Exploring diagonal lines and triangular composition to create dynamic tension within the frame.",img:"img/diagonal.jpg",exif:{aperture:"4.5",shutter:"1/160s",iso:800,focal:18}},
 {id:3,title:"Rules of Third",cat:"Photography",year:"2025",desc:"Applying the rule of thirds to balance the subject against negative space.",img:"img/rot.jpeg",tall:true,exif:{aperture:"1.4",shutter:"1/400s",iso:100,focal:16}},
 {id:4,title:"Patterns and Texture",cat:"Photography",year:"2025",desc:"A study in repeating patterns and tactile texture captured through natural light.",img:"img/texture.jpg",exif:{aperture:"5",shutter:"1/125s",iso:800,focal:22}},
 {id:5,title:"Center",cat:"Photography",year:"2025",desc:"A centred composition exercise focused on symmetry and a strong single focal point.",img:"img/center.jpg",tall:true,exif:{aperture:"4.5",shutter:"1/2000s",iso:250,focal:18}},

 // Video — clean static thumbnail, opens inline player on click (no play-icon overlay)
 {id:6,title:"Beca — Group Project",cat:"Video",year:"2024",desc:"A collaborative video project exploring the trishaw (\"beca\") culture of Melaka, produced with a small team.",img:"img/beca.jpeg",video:true,youtubeId:"K6kfQ5A3pag",tall:true},
 {id:7,title:"Healing Spots — Pair Work",cat:"Video",year:"2024",desc:"A calming short film created in pairs, highlighting quiet spaces around campus for rest and reflection.",img:"img/healing.jpeg",video:true,youtubeId:"vI9pqX6G_jw",youtubeStart:19},

 // Animation — same clean-thumbnail + inline-player behaviour as Video
 {id:8,title:"Lip Sync",cat:"Animations",year:"2025",desc:"A short lip-sync animation exercise focused on matching mouth shapes to dialogue timing.",img:"img/lipsync.png",video:true,youtubeId:"_RMjIjxooAM",tall:true},
 {id:9,title:"Walk Cycle",cat:"Animations",year:"2025",desc:"A classic walk-cycle animation study exploring weight, timing and natural movement.",img:"img/walkcycle.png",video:true,youtubeId:"Z42oAbARwA0"},
 {id:10,title:"Principles of Animation",cat:"Animations",year:"2025",desc:"An exercise applying the 12 principles of animation, from squash-and-stretch to anticipation.",img:"img/animation.png",video:true,youtubeId:"YYD4owGsyGQ",tall:true},
 {id:11,title:"Motion Graphic Promo",cat:"Animations",year:"2025",desc:"A kinetic-typography promo piece combining motion graphics with brand messaging.",img:"img/camera.png",video:true,youtubeId:"E-aaf4Fz53A"},

 // Graphic Design — standard layout: title + description
 {id:12,title:"FLAIRE Poster",cat:"Graphic Design",year:"2025",desc:"Promotional poster design for the FLAIRE brand identity, translating the visual system into print.",img:"img/FLAIRE.JPG",tall:true},
 {id:13,title:"FLAIRE Logo",cat:"Graphic Design",year:"2025",desc:"Logo design and mark exploration for the FLAIRE brand identity project.",img:"img/logo.png"},
 {id:18,title:"FLAIRE Magazine Cover",cat:"Graphic Design",year:"2025",desc:"A magazine front-page design extending the FLAIRE brand identity into an editorial cover layout.",img:"img/frontpage.png",tall:true},
 {id:14,title:"YAZOO Poster",cat:"Graphic Design",year:"2024",desc:"A poster design exercise built around bold typography and colour for the YAZOO concept.",img:"img/yazoo.png",tall:true},
 {id:15,title:"Isometric",cat:"Graphic Design",year:"2024",desc:"An isometric illustration exercise exploring perspective, colour and geometric composition.",img:"img/isometric.png"},
 {id:21,title:"NEXTGEN TALK Stickers",cat:"Graphic Design",year:"2025",desc:"Sticker sheet design created for NextGen Talk, an event held under PIXELFEST.",img:"img/stickers.jpeg"},

 // 3D — standard layout: title + description
 {id:16,title:"Trophy",cat:"3D",year:"2025",desc:"A 3D trophy render exploring materials, lighting and reflections in Blender.",img:"img/front.png",tall:true},

 // AI Works — standard layout: title + description
 {id:17,title:"Earpods Merch",cat:"AI Works",year:"2025",desc:"A merchandise concept for wireless earbuds packaging, developed with the help of generative AI tools.",img:"img/ai.png"},
 {id:19,title:"NextGen Talk Handfan",cat:"AI Works",year:"2025",desc:"Event handfan design for NextGen Talk (PIXELFES 1.0), combining original graphic design with AI-assisted mockup generation.",img:"img/handfan.jpeg"},
 {id:20,title:"MESKOM Club Varsity Jacket",cat:"AI Works",year:"2025",desc:"Varsity jacket mockup for MESKOM Club, blending original graphic design with AI-generated product visualization.",img:"img/varsity.jpeg"},
];

const skillSets = [
 {icon:"🎨",title:"Creative Skills",items:["Photography","Videography","Graphic Design","Publication Design","Brand Identity","Motion Graphics","Script Writing","Storyboarding","Creative Direction"]},
 {icon:"💻",title:"Technical Skills",items:["Adobe Photoshop","Adobe Illustrator","Adobe Premiere Pro","Adobe After Effects","Canva","CapCut","Blender","Unreal Engine 5","Microsoft Office","Google Workspace"]},
 {icon:"✦",title:"AI Tools",items:["ChatGPT","Claude","Gemini","Adobe Firefly","Canva AI","Microsoft Copilot"]},
 {icon:"🤝",title:"Soft Skills",items:["Leadership","Communication","Teamwork","Project Management","Problem Solving","Critical Thinking","Adaptability","Time Management"]},
];

const beyondCards = [
 {icon:"🎓",title:"Educational Background",html:"<ul><li>Diploma in Digital Media Communication Technology, Universiti Teknologi MARA (UiTM) — expected graduation 2027.</li><li>Sijil Pelajaran Malaysia (SPM).</li></ul>"},
 {icon:"🏆",title:"Awards &amp; Recognition",html:"<ul><li>Bronze Award — MIIEx Competition<br>Melaka International Intellectual Exposition 2026</li><li>Dean's List recipient</li><li>Best Game (Fables) — Folklore Theme<br>Beta Fiesta 2.0</li></ul>"},
 {icon:"🎯",title:"Interests &amp; Hobbies",html:"<ul><li>Street & travel photography</li><li>Independent filmmaking</li><li>Exploring generative AI tools</li></ul>"},
 {icon:"🗣️",title:"Languages",html:"<ul><li>Bahasa Melayu — Native</li><li>English — Fluent</li></ul>"},
];

const workExperience = [
 {year:"2026 – Present",title:"Head of Technical Bureau",subtitle:"Beta Fiesta, PIXELFES 2.0"},
 {year:"2025",title:"Technical Team",subtitle:"Neo-South Independent Film Festival"},
 {year:"2024",title:"Videographer / Camera Operator",subtitle:"\"Beca Melaka\" Documentary"},
];

const extracurricular = [
 {year:"2025 – Present",title:"Design Team Member",subtitle:"MESKOM Club"},
 {year:"2025",title:"Junior Technical Crew",subtitle:"NextGen Talk (PIXELFES 1.0)"},
 {year:"2025 – 2026",title:"Publication & Layout Design",subtitle:"Corporate Report (Group Project)"},
];

/* ---------------- RENDER ---------------- */
function cardHTML(item){
  const tagClass = item.tall ? 'style="aspect-ratio:3/4"' : 'style="aspect-ratio:4/3"';
  let footer;
  if(item.cat === "Photography" && item.exif){
    footer = `<div class="cmeta">${item.year}</div>
      <div class="exif-row">
        <span class="exif-chip">ƒ/${item.exif.aperture}</span>
        <span class="exif-chip">${item.exif.shutter}</span>
        <span class="exif-chip">ISO ${item.exif.iso}</span>
        <span class="exif-chip">${item.exif.focal}mm</span>
      </div>`;
  } else if(item.video){
    footer = `<div class="cmeta">${item.year}</div><span class="viewcase">Watch Now <span class="arrow">→</span></span>`;
  } else {
    footer = `<div class="cmeta">${item.year}</div><span class="viewcase">View Case Study <span class="arrow">→</span></span>`;
  }
  return `<div class="card" data-cat="${item.cat}" data-id="${item.id}">
    <div class="media" ${tagClass}>
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="overlay">
        <span class="tag">${item.cat}</span>
        <div class="ctitle">${item.title}</div>
        ${footer}
      </div>
    </div>
  </div>`;
}

function renderFilters(){
  const bar = document.getElementById('filterBar');
  bar.innerHTML = categories.map((c,i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${c}">${c}</button>`).join('');
  bar.addEventListener('click', e=>{
    const btn = e.target.closest('.filter-btn'); if(!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    filterGallery(btn.dataset.filter);
  });
}

function filterGallery(cat){
  document.querySelectorAll('#galleryGrid .card').forEach(card=>{
    const show = cat==="All" || card.dataset.cat===cat;
    card.style.display = show ? '' : 'none';
    if(show){ card.classList.remove('show'); void card.offsetWidth; card.classList.add('show'); }
  });
}

document.getElementById('galleryGrid').innerHTML = works.map(cardHTML).join('');
renderFilters();

document.getElementById('skillsGrid').innerHTML = skillSets.map(s=>`
  <div class="skill-card">
    <div class="icon">${s.icon}</div>
    <h4>${s.title}</h4>
    <ul>${s.items.map(i=>`<li>${i}</li>`).join('')}</ul>
  </div>`).join('');

document.getElementById('beyondGrid').innerHTML = beyondCards.map(c=>`
  <div class="info-card">
    <div class="icon">${c.icon}</div>
    <h4>${c.title}</h4>
    ${c.html}
  </div>`).join('');

document.getElementById('workGrid').innerHTML = workExperience.map(item=>`
  <div class="beyond-item"><span class="bi-dot"></span><div class="bi-body"><span class="bi-year">${item.year}</span><span class="bi-title">${item.title}</span><span class="bi-subtitle">${item.subtitle}</span></div></div>`).join('');

document.getElementById('extraGrid').innerHTML = extracurricular.map(item=>`
  <div class="beyond-item"><span class="bi-dot"></span><div class="bi-body"><span class="bi-year">${item.year}</span><span class="bi-title">${item.title}</span><span class="bi-subtitle">${item.subtitle}</span></div></div>`).join('');

document.getElementById('filmTrack').innerHTML = Array(2).fill(categories.filter(c=>c!=="All").map(c=>`<span><i></i>${c}</span>`).join('')).join('');

/* reveal on load */
setTimeout(()=>{document.querySelectorAll('.card').forEach((c,i)=>setTimeout(()=>c.classList.add('show'), i*60));},100);

/* ---------------- Scroll progress + nav active + reveal ---------------- */
const header = document.getElementById('siteHeader');
const progress = document.getElementById('progress');
const navlinks = document.querySelectorAll('.navlink');
const navList = document.getElementById('navList');
const navPill = document.getElementById('navPill');
const sections = document.querySelectorAll('section[id], #contact');

function getHeaderOffset(){ return header.offsetHeight + 24; }

function movePillTo(link){
  if(!link) return;
  const liRect = link.getBoundingClientRect();
  const listRect = navList.getBoundingClientRect();
  navPill.style.width = liRect.width + 'px';
  navPill.style.transform = `translateX(${liRect.left - listRect.left}px)`;
  navPill.classList.add('ready');
}

function setActiveNav(id){
  let matched = null;
  navlinks.forEach(l=>{
    const isActive = l.getAttribute('href') === '#'+id;
    l.classList.toggle('active', isActive);
    if(isActive) matched = l;
  });
  if(matched) movePillTo(matched);
}

document.querySelectorAll('.navlink, .navlink-home, .navlink-mobile').forEach(link=>{
  link.addEventListener('click', e=>{
    const href = link.getAttribute('href');
    if(!href || !href.startsWith('#')) return;
    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if(!target) return;
    e.preventDefault();
    closeMobileNav();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveNav(targetId);
  });
});

/* ---------------- Mobile Nav ---------------- */
const navMenuBtn = document.getElementById('navMenuBtn');
const mobileNav = document.getElementById('mobileNav');
function openMobileNav(){
  mobileNav.classList.add('open');
  navMenuBtn.classList.add('active');
  navMenuBtn.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav(){
  mobileNav.classList.remove('open');
  navMenuBtn.classList.remove('active');
  navMenuBtn.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}
navMenuBtn.addEventListener('click', ()=>{
  mobileNav.classList.contains('open') ? closeMobileNav() : openMobileNav();
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeMobileNav(); });
window.addEventListener('resize', ()=>{ if(window.innerWidth > 900) closeMobileNav(); });

function onScroll(){
  const h = document.documentElement;
  const pct = (h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  progress.style.width = pct+'%';
  header.classList.toggle('scrolled', h.scrollTop>10);

  const probeY = getHeaderOffset() + 4;
  let current = sections[0].id;
  sections.forEach(s=>{ if(s.getBoundingClientRect().top <= probeY) current = s.id; });
  if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4){
    current = sections[sections.length-1].id;
  }
  setActiveNav(current);
}
document.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', ()=>{
  const activeLink = document.querySelector('.navlink.active');
  movePillTo(activeLink);
});
window.addEventListener('load', onScroll);
setTimeout(onScroll, 50);
onScroll();

const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------------- Dark mode ---------------- */
const darkToggle = document.getElementById('darkToggle');
function setDark(on){
  document.documentElement.classList.toggle('dark', on);
  darkToggle.textContent = on ? '☀️' : '🌙';
}
setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
darkToggle.addEventListener('click', ()=> setDark(!document.documentElement.classList.contains('dark')));

/* ---------------- Role cycle ---------------- */
let roleIdx=0;
const roleTrack = document.getElementById('roleTrack');
const roleCount = roleTrack.children.length;
setInterval(()=>{
  roleIdx = (roleIdx+1)%roleCount;
  roleTrack.style.transform = `translateY(-${roleIdx*46}px)`;
},2400);

/* ---------------- Magnetic buttons ---------------- */
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove', e=>{
    const r = btn.getBoundingClientRect();
    const x = (e.clientX-r.left-r.width/2)*0.25;
    const y = (e.clientY-r.top-r.height/2)*0.4;
    btn.style.transform = `translate(${x}px,${y}px)`;
  });
  btn.addEventListener('mouseleave', ()=> btn.style.transform='translate(0,0)');
});

/* ---------------- Lightbox ---------------- */
const allItems = [...works];
const lb = document.getElementById('lightbox');
const lbMedia = document.getElementById('lbMedia');
const lbTitle = document.getElementById('lbTitle');
const lbDesc = document.getElementById('lbDesc');
let lbIndex = 0;

function openLB(id){
  lbIndex = allItems.findIndex(i=>i.id===id);
  renderLB();
  lb.classList.add('open');
}
function renderLB(){
  const item = allItems[lbIndex];
  if(item.youtubeId){
    const params = new URLSearchParams({ autoplay:'1', rel:'0' });
    if(item.youtubeStart) params.set('start', item.youtubeStart);
    lbMedia.innerHTML = `<div style="width:min(90vw,1300px);aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#000;margin:0 auto;">
      <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/${item.youtubeId}?${params.toString()}" title="${item.title}" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display:block;"></iframe>
    </div>`;
  } else if(item.video){
    lbMedia.innerHTML = `<video src="${item.videoSrc}" controls playsinline style="max-width:min(90vw,1300px);max-height:75vh;width:auto;height:auto;border-radius:16px;background:#000;display:block;margin:0 auto;"></video>`;
  } else {
    lbMedia.innerHTML = `<img src="${item.img.replace('w=900','w=1600')}" alt="${item.title}">`;
  }
  lbTitle.textContent = item.title;
  lbDesc.textContent = `${item.cat} · ${item.year} — ${item.desc}`;

  const exifEl = document.getElementById('lbExif');
  if(item.cat === "Photography" && item.exif){
    exifEl.innerHTML = `
      <div class="exif-panel">
        <div class="exif-stat"><span class="exif-label">Aperture</span><span class="exif-value">ƒ/${item.exif.aperture}</span></div>
        <div class="exif-stat"><span class="exif-label">Shutter</span><span class="exif-value">${item.exif.shutter}</span></div>
        <div class="exif-stat"><span class="exif-label">ISO</span><span class="exif-value">${item.exif.iso}</span></div>
        <div class="exif-stat"><span class="exif-label">Focal Length</span><span class="exif-value">${item.exif.focal}mm</span></div>
      </div>`;
  } else {
    exifEl.innerHTML = '';
  }
}
function closeLB(){ lb.classList.remove('open'); lbMedia.innerHTML=''; }
document.addEventListener('click', e=>{
  const card = e.target.closest('.card');
  if(card){ openLB(Number(card.dataset.id)); }
});
document.getElementById('lbClose').addEventListener('click', closeLB);
lb.addEventListener('click', e=>{ if(e.target===lb) closeLB(); });
document.getElementById('lbPrev').addEventListener('click', ()=>{ lbIndex=(lbIndex-1+allItems.length)%allItems.length; renderLB(); });
document.getElementById('lbNext').addEventListener('click', ()=>{ lbIndex=(lbIndex+1)%allItems.length; renderLB(); });
document.addEventListener('keydown', e=>{
  if(!lb.classList.contains('open')) return;
  if(e.key==='Escape') closeLB();
  if(e.key==='ArrowLeft') document.getElementById('lbPrev').click();
  if(e.key==='ArrowRight') document.getElementById('lbNext').click();
});

/* ---------------- Video Resume Modal (Google Drive) ---------------- */
// If you ever replace this video by uploading a brand NEW file to Drive, swap
// this ID for the new one. If you just overwrite/replace the CONTENT of this
// exact same Drive file (keeping the same share link), no code change is
// needed at all — it'll always show whatever is currently in that file.
const VR_DRIVE_FILE_ID = "1-IRTsKxHedPZKbZ3LUfv3vye9l_l58D1";
const VR_DRIVE_URL = `https://drive.google.com/file/d/${VR_DRIVE_FILE_ID}/preview?autoplay=1`;

const vrModal = document.getElementById('vrModal');
const vrFrameWrap = document.getElementById('vrFrameWrap');

function vrOpen(){
  // Building the iframe fresh on every open (rather than reusing one already
  // in the DOM) means playback always starts from a clean state.
  vrFrameWrap.innerHTML = `<iframe class="vr-modal__iframe" src="${VR_DRIVE_URL}" allow="autoplay; fullscreen" allowfullscreen loading="eager" title="Video Resume"></iframe>`;
  vrModal.classList.add('vr-modal--open');
  document.body.style.overflow = 'hidden';
}
function vrClose(){
  // Fully removing the iframe — not just hiding it — is what actually kills
  // the audio/video. Hiding via CSS alone leaves it playing in the background.
  vrFrameWrap.innerHTML = '';
  vrModal.classList.remove('vr-modal--open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.vr-trigger').forEach(btn=>{
  btn.addEventListener('click', vrOpen);
});
document.getElementById('vrClose').addEventListener('click', vrClose);
document.getElementById('vrOverlay').addEventListener('click', vrClose);
document.addEventListener('keydown', e=>{
  if(!vrModal.classList.contains('vr-modal--open')) return;
  if(e.key==='Escape') vrClose();
});