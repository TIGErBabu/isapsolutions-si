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
if(form){form.addEventListener('submit',function(e){e.preventDefault();if(document.getElementById('website')&&document.getElementById('website').value){document.getElementById('form-success').style.display='block';return;}if(!form.checkValidity()){form.reportValidity();return;}
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

var flowData=[
["1 · Trigger — S/4HANA event","An event in the core — for example, a blocked invoice or a stock shortfall — triggers the agent. Nothing runs on a schedule alone; it starts from a real business event."],
["2 · Retrieve — BTP + data layer","The agent retrieves via BTP Integration Suite and Datasphere / Oracle AI Database: the relevant document, history and policy. Retrieval is scoped by role — it never sees data the user could not see."],
["3 · Reason — Joule / AI Core","The agent reasons over the retrieved context and drafts a recommendation, with its sources shown. It does not invent a source; if the data is missing, it says so."],
["4 · Approve — human in the loop","A human approves before anything posts. Approvals, cost and risk are shown in the approval step — this is the BTP-cost and governance gate, not an afterthought."],
["5 · Act — post to the core","Only after approval does the agent act in S/4HANA or Oracle, through the same APIs and controls a person would use."],
["6 · Audit — log everything","Every step is logged: trigger, data used, recommendation, approver, and result. That log is the audit trail, and it is reviewable after the fact."]];
document.querySelectorAll('.flow-btn').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.flow-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');var d=flowData[parseInt(b.getAttribute('data-flow'),10)];document.getElementById('flow-title').textContent=d[0];document.getElementById('flow-body').textContent=d[1];});});
})();

/* v5: animated counters + demo dashboard (guarded, runs only where elements exist) */
(function(){
  document.querySelectorAll('[data-count]').forEach(function(el){
    var target=parseInt(el.getAttribute('data-count'),10), done=false;
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!done){done=true;var n=0;var t=setInterval(function(){n++;el.textContent=String(n).padStart(2,'0');if(n>=target)clearInterval(t);},90);}});},{threshold:0.5});
    io.observe(el);
  });
  var feed=document.getElementById('dash-feed');
  if(feed){
    var lines=["Agent retrieved PO 45001235 + payment policy — awaiting approval","Agent flagged missing goods receipt — drafted query, not a posting","Human approved invoice 900125 — logged to audit trail (demo only)","Agent checked BTP consumption — within demo budget","Agent retrieved contract terms for invoice 900126 — sources shown"];
    var i=0;
    setInterval(function(){
      var div=document.createElement('div');div.textContent='● '+lines[i%lines.length];feed.appendChild(div);i++;
      while(feed.children.length>6)feed.removeChild(feed.firstChild);
      var k=document.getElementById('kpi-blocked');if(k)k.textContent=String(10+((i*3)%9));
    },4000);
  }
  document.querySelectorAll('[data-approve]').forEach(function(b){
    b.addEventListener('click',function(){
      var r=document.getElementById('queue-result');
      if(r)r.textContent = b.getAttribute('data-approve')==='1' ? ' Approved in demo — nothing was actually posted to SAP.' : ' Escalated in demo — routed to a human reviewer.';
      var p=document.getElementById('kpi-pending');if(p)p.textContent='4';
    });
  });
})();
