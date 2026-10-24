(function(){
var FORM_ENDPOINT = ""; /* v3: set to a Formspree/Netlify Forms endpoint once labs@/info@ inboxes exist; empty = client confirmation only, no fake send */
var menuBtn=document.getElementById('menu-btn'), mobileNav=document.getElementById('mobile-nav');
if(menuBtn&&mobileNav){menuBtn.addEventListener('click',function(){var open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});mobileNav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mobileNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');});});}

var services=[
["S.01","SAP S/4HANA Modernization","RISE with SAP, S/4HANA Cloud Private and Public editions, greenfield, brownfield, and selective data transition.","Roadmap, clean-core assessment, and a migration path chosen for your estate — not a one-size template."],
["S.02","SAP BTP & Integration","Extensions, APIs, and integrations between SAP and non-SAP systems, including custom middleware replacement.","An integration architecture that keeps the core clean while extensions live where they belong."],
["S.03","Oracle AI Database & Vector Search","Native vector search and retrieval for AI agents, localized inside the enterprise data estate.","Search that understands operational context, not just keywords — inside your data, not outside it."],
["S.04","Agentic Automation","Autonomous agents for repetitive workflows, with approvals, audit trails, and human-in-the-loop controls.","Agents that do the repetitive work, escalate the exceptions, and leave a trail you can audit."],
["S.05","Data, Migration & Clean Core","Data profiling and cleansing, migration readiness, master-data governance, and technical-debt reduction.","Clean, governed data first — because agents on messy data just automate the mess faster."],
["S.06","Analytics & Forecasting","Real-time telemetry, predictive forecasting, dashboards, and reporting on top of the modernized core.","Forecasts that move when operations move, not reports that explain last month."],
["S.07","Cloud, Security & Managed Services","AWS, Azure, GCP, and hybrid hosting, Basis and operations, monitoring, security controls, and ongoing managed services.","A run model that keeps the core stable while it keeps improving."],
["S.08","Change, Training & Adoption","Readiness assessment, role-based training, communications, and adoption tracking — so new systems actually get used.","People ready on day one, not just systems live on day one."]
];
document.querySelectorAll('.tab').forEach(function(btn){
btn.addEventListener('click',function(){
document.querySelectorAll('.tab').forEach(function(b){b.classList.remove('active')});btn.classList.add('active');
var s=services[Number(btn.dataset.service)];document.getElementById('svc-num').textContent=s[0];document.getElementById('svc-title').textContent=s[1];document.getElementById('svc-desc').textContent=s[2];document.getElementById('svc-deliver').textContent=s[3];
});
});
var form=document.getElementById('intake-form');
var steps=form?form.querySelectorAll('.form-step'):[], curStep=0;
function showStep(i){steps.forEach(function(s,idx){s.classList.toggle('active',idx===i);});var dots=document.querySelectorAll('#step-dots span');dots.forEach(function(d,idx){d.classList.toggle('on',idx<=i);});curStep=i;}
if(form&&steps.length){showStep(0);
form.querySelectorAll('[data-next]').forEach(function(b){b.addEventListener('click',function(){var cur=steps[curStep];if(!cur.checkValidity()){cur.reportValidity();return;}showStep(Math.min(curStep+1,steps.length-1));});});
form.querySelectorAll('[data-back]').forEach(function(b){b.addEventListener('click',function(){showStep(Math.max(curStep-1,0));});});
form.addEventListener('submit',function(e){e.preventDefault();if(document.getElementById('website')&&document.getElementById('website').value){document.getElementById('form-success').style.display='block';return;}if(!form.checkValidity()){form.reportValidity();return;}
if(FORM_ENDPOINT){fetch(FORM_ENDPOINT,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)}).then(function(){document.getElementById('form-success').textContent='Thank you. Your data profile was submitted for architectural review.';document.getElementById('form-success').style.display='block';}).catch(function(){document.getElementById('form-success').textContent='Submission could not be sent right now. Please email info@isapsolutions.si directly.';document.getElementById('form-success').style.display='block';});}else{document.getElementById('form-success').style.display='block';}
form.querySelector('button[type="submit"]').textContent='PROFILE CAPTURED — REVIEW PENDING';});}
var items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in-view');io.unobserve(en.target);}});},{threshold:.15});items.forEach(function(el){io.observe(el);});}else{items.forEach(function(el){el.classList.add('in-view');});}
var progress=document.getElementById('progress');
window.addEventListener('scroll',function(){var h=document.documentElement;var p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);progress.style.width=(p*100)+'%';},{passive:true});
var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var phases=document.querySelectorAll('[data-phase]');
if(reduced){items.forEach(function(el){el.classList.add('in-view');});phases.forEach(function(p){p.classList.add('active');});return;}
/* Reverted to v2.1: no pin, no GSAP scrub on <=960px — native scroll + reveals only. Desktop code below is unchanged. */
var isDesktop=window.matchMedia('(min-width: 961px)').matches;
if(!isDesktop){phases.forEach(function(p){p.classList.add('active');});}
try{
if(!isDesktop){throw new Error('mobile: skip GSAP pin');}
if(window.Lenis){var lenis=new Lenis({lerp:.09});(function raf(t){lenis.raf(t);requestAnimationFrame(raf);})(0);document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var tg=document.querySelector(a.getAttribute('href'));if(tg){e.preventDefault();lenis.scrollTo(tg,{offset:-80});}});});}
if(window.gsap&&window.ScrollTrigger){
gsap.registerPlugin(ScrollTrigger);
var story=document.querySelector('.story-pin');
if(story){
gsap.to(story,{scrollTrigger:{trigger:story,start:'top top',end:'+=120%',pin:true,scrub:true,onUpdate:function(self){var i=self.progress<.33?0:self.progress<.66?1:2;phases.forEach(function(p,idx){p.classList.toggle('active',idx===i);});}}});
}
/* v3: card fade-ins handled by IntersectionObserver reveals only — no second GSAP animation system */
}
}catch(err){items.forEach(function(el){el.classList.add('in-view');});phases.forEach(function(p){p.classList.add('active');});}
if(!window.gsap){phases.forEach(function(p){p.classList.add('active');});}
})();
