/* Lógica de renderização, navegação, galeria e tema. */
const $=s=>document.querySelector(s);
$("#cases-list").innerHTML = CASES.map(c=>`
 <article class="case">
  ${c.screen?`<div class="shot">${SCREENS[c.screen]}<span class="cap">Recriação ilustrativa da interface</span></div>`
    :c.cover?`<div class="shot photo"><img src="${c.cover[0]}" alt="${c.cover[1]}" width="${c.cover[2]}" height="${c.cover[3]}" loading="lazy" decoding="async"></div>`
    :`<div class="shot"><div class="art-panel"><span class="art-ic">${ART[c.art].icon}</span><div class="art-chips">${ART[c.art].chips.map(t=>`<span>${t}</span>`).join("")}</div></div></div>`}
  <div class="info">
   <div class="meta"><span class="tag">${c.year}</span>${c.tags.map(([k,t])=>`<span class="tag ${k}">${t}</span>`).join("")}</div>
   <h3>${c.title}</h3><div class="role">${c.role}</div>
   <p>${c.pitch}</p>
   <div class="kpis">${c.kpis.map(([b,s])=>`<div class="kpi"><b>${b}</b><span>${s}</span></div>`).join("")}</div>
   <div class="stack-line">${c.stack.map(s=>`<span>${s}</span>`).join("")}</div>
   <div class="case-actions"><button class="btn primary" type="button" data-open="${c.id}">Ler o case</button>${c.url?`<a class="btn" href="${c.url}" target="_blank" rel="noopener">Ver no ar ↗</a>`:""}</div>
  </div>
 </article>`).join("");
$("#more").innerHTML = MORE.map(m=>`<button class="mini" type="button" data-open="${m.id}">
  <span class="cover">${m.photos?`<img src="${m.photos[0][0]}" alt="" width="${m.photos[0][2]}" height="${m.photos[0][3]}" loading="lazy" decoding="async"><span class="cnt">${m.photos.length} fotos</span>`:`<span class="ini">${m.art?ART[m.art].icon:""}</span>`}</span>
  <span class="top"><span class="yr">${m.year}</span>${m.url?'<span class="yr">no ar ↗</span>':''}</span><span class="ttl">${m.title}</span><span class="ds">${m.desc}</span><span class="go">Ver detalhes →</span></button>`).join("");

const ALL=[...CASES,...MORE], dlg=$("#dlg"), sheet=$("#sheet");
let dlgTrigger=null;
dlg.addEventListener("close",()=>{dlgTrigger?.focus();dlgTrigger=null;});
function open(id,trigger){
  const c=ALL.find(x=>x.id===id); if(!c) return;
  dlgTrigger=trigger;
  sheet.innerHTML=`<button class="closer" type="button" aria-label="Fechar">✕</button>
  <header><span class="eyebrow">${c.year} · case</span><h3 id="dTitle">${c.title}</h3><p>${c.role}</p></header>
  <div class="body">
   ${c.photos?`<div class="blk"><h4>Fotos</h4><div class="gallery">${c.photos.map(([src,cap,width,height],i)=>`<button type="button" data-lb="${c.id}:${i}" aria-label="Ampliar foto: ${cap}"><img src="${src}" alt="${cap}" width="${width}" height="${height}" loading="lazy" decoding="async"></button>`).join("")}</div></div>`:""}
   ${c.recog?`<div class="blk"><h4>Reconhecimentos</h4><div class="recog">${c.recog.map(([a,b])=>`<span><b>${a}</b> · ${b}</span>`).join("")}</div></div>`:""}
   ${c.context?`<div class="blk"><h4>Contexto</h4><p>${c.context}</p></div>`:""}
   <div class="blk"><h4>Problema</h4><p>${c.problem}</p></div>
   <div class="blk"><h4>O que construí</h4><ul>${c.built.map(b=>`<li>${b}</li>`).join("")}</ul></div>
   ${c.result?`<div class="blk"><h4>Resultado</h4><p>${c.result}</p></div>`:""}
   ${c.learn?`<div class="blk"><h4>O que aprendi</h4><p>${c.learn}</p></div>`:""}
   ${c.links?`<div class="blk"><h4>Projetos no ecossistema Just Travel</h4><div class="jt-projects">${c.links.map(([n,u,t,ds,mine])=>`<a class="jtp" href="${u}" target="_blank" rel="noopener"><span class="tg">${mine?"minha atuação":t}</span><b>${n} <i>↗</i></b><span>${ds}</span><small>${u.replace(/^https?:\/\/(www\.)?/,"").replace(/\/(pt)?$/,"").replace(/\/$/,"")}</small></a>`).join("")}</div></div>`:""}
   ${c.refs?`<div class="blk"><h4>Referências</h4><ul class="refs">${c.refs.map(([t,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${t} ↗</a></li>`).join("")}</ul></div>`:""}
   <div class="blk"><h4>Stack e temas</h4><div class="stack-line">${c.stack.map(s=>`<span>${s}</span>`).join("")}</div></div>
   <div class="case-actions">${c.url?`<a class="btn primary" href="${c.url}" target="_blank" rel="noopener">Ver no ar ↗</a>`:""}<button class="btn" type="button" data-close>Voltar</button></div>
  </div>`;
  dlg.setAttribute("aria-labelledby","dTitle");
  dlg.showModal(); sheet.querySelector(".closer").focus(); sheet.scrollTop=0;
}
const lb=$("#lb"); let lbSet=[], lbI=0, lbTrigger=null;
lb.addEventListener("close",()=>{lbTrigger?.focus();lbTrigger=null;});
function lbShow(){ const [src,cap]=lbSet[lbI]; $("#lbImg").src=src; $("#lbImg").alt=cap; $("#lbCap").textContent=cap; $("#lbCtr").textContent=(lbI+1)+" / "+lbSet.length; }
function lbMove(d){ lbI=(lbI+d+lbSet.length)%lbSet.length; lbShow(); }
lb.addEventListener("click",e=>{
  if(e.target.closest(".prev")) return lbMove(-1);
  if(e.target.closest(".next")) return lbMove(1);
  if(e.target.closest(".lbclose")||e.target===lb) lb.close();
});
lb.addEventListener("keydown",e=>{ if(e.key==="ArrowLeft") lbMove(-1); if(e.key==="ArrowRight") lbMove(1); });
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape") return;
  const activeDialog=lb.open?lb:dlg.open?dlg:null;
  if(activeDialog){e.preventDefault();activeDialog.close();}
});
document.addEventListener("click",e=>{
  const g=e.target.closest("[data-lb]");
  if(g){ const [id,i]=g.dataset.lb.split(":"); lbSet=ALL.find(x=>x.id===id).photos; lbI=+i; lbTrigger=g; lbShow(); lb.showModal(); $("#lb .lbclose").focus(); return; }
  if(lb.open) return;
  const o=e.target.closest("[data-open]"); if(o){open(o.dataset.open,o);return;}
  if(e.target.closest(".closer,[data-close]")||e.target===dlg) dlg.close();
});

const linkOf=s=>{const v=CONFIG[s.k]; return v?(s.href?s.href(v):v):"";};
$("#heroSocial").innerHTML = SOC.filter(s=>s.k!=="email").map(s=>`<a class="sbtn" href="${linkOf(s)}" target="_blank" rel="noopener" aria-label="${s.l}">${ICON[s.k]}</a>`).join("");
$("#clinks").innerHTML = SOC.map(s=>`<a class="clink" href="${linkOf(s)}" target="_blank" rel="noopener">${ICON[s.k]}<span><b>${s.l}</b><small>${s.show(CONFIG[s.k])}</small></span></a>`).join("");
const w=$("#waBtn"); w.href="https://wa.me/"+CONFIG.whatsapp; w.target="_blank"; w.rel="noopener";

$("#emailTxt").textContent=CONFIG.email;
$("#copyMail").addEventListener("click",e=>{
  const b=e.currentTarget, el=$("#emailTxt");
  const ok=()=>{b.textContent="Copiado";setTimeout(()=>b.textContent="Copiar e-mail",1600)};
  const sel=()=>{const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);};
  navigator.clipboard?navigator.clipboard.writeText(CONFIG.email).then(ok).catch(sel):sel();
});
const mq=$("#marquee"), mqN=mq.children.length;
mq.innerHTML+=mq.innerHTML;
[...mq.children].slice(mqN).forEach(li=>li.setAttribute("aria-hidden","true"));

const root=document.documentElement;
const themeBtn=$("#themeBtn");
function syncThemeButton(){themeBtn.setAttribute("aria-pressed",String((root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"))==="dark"));}
try{const t=localStorage.getItem("dr-theme"); if(t==="dark"||t==="light") root.dataset.theme=t;}catch(e){}
syncThemeButton();
$("#themeBtn").addEventListener("click",()=>{
  const cur=root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
  const nxt=cur==="dark"?"light":"dark"; root.dataset.theme=nxt;
  try{localStorage.setItem("dr-theme",nxt);}catch(e){}
  syncThemeButton();
});
let cat="all", q="";
const norm=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
$("#catChips").innerHTML=[["all","Todas"],...Object.entries(CATS)].map(([k,l])=>`<button type="button" data-cat="${k}" aria-pressed="${k==="all"}">${l}</button>`).join("");
function renderLevel(list,host,countEl,cls){
  const f=list.filter(t=>(cat==="all"||t.c===cat)&&(!q||norm(t.n+" "+t.d+" "+CATS[t.c]).includes(q)));
  countEl.textContent=f.length+(f.length===1?" ferramenta":" ferramentas");
  host.innerHTML=Object.keys(CATS).map(k=>{
    const g=f.filter(t=>t.c===k); if(!g.length) return "";
    return `<div class="group"><h3>${CATS[k]}</h3><div class="tools">${g.map(t=>`<div class="tool ${cls}"><span class="mk" aria-hidden="true">${t.m}</span><span><b>${t.n}</b><small>${t.d}</small></span></div>`).join("")}</div></div>`;
  }).join("");
  host.parentElement.hidden=!f.length; return f.length;
}
function renderStack(){
  const a=renderLevel(DAILY,$("#gDaily"),$("#cDaily"),""), b=renderLevel(BASIC,$("#gBasic"),$("#cBasic"),"basic");
  $("#noTools").hidden=!!(a+b);
}
$("#catChips").addEventListener("click",e=>{const b=e.target.closest("button"); if(!b) return; cat=b.dataset.cat; $("#catChips").querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b)); renderStack();});
$("#toolSearch").addEventListener("input",e=>{q=norm(e.target.value.trim()); renderStack();});
renderStack();

/* ============ ROUTER (#stack é uma página própria) ============ */
const mainEl=$("main"), stackEl=$("#stackPage");
function route(){
  const h=location.hash.slice(1);
  const onStack=h==="stack";
  stackEl.hidden=!onStack; mainEl.hidden=onStack;
  $("#navStack").style.color=onStack?"var(--ink)":"";
  if(onStack){ scrollTo(0,0); return; }
  const el=h&&document.getElementById(h);
  if(el && h!=="inicio") requestAnimationFrame(()=>el.scrollIntoView()); else if(h==="inicio") scrollTo(0,0);
}
addEventListener("hashchange",route); route();
document.addEventListener("click",e=>{
  const a=e.target.closest('a[href^="#"]');
  if(a && a.getAttribute("href").slice(1)===location.hash.slice(1)){ e.preventDefault(); route(); }
});
