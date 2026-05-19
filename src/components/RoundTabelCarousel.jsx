import { useState, useRef, useEffect, useCallback } from "react";

const PROJECTS = [
  { title: "Nebula OS",   tag: "Systems",   color: "#7C3AED", accent: "#A78BFA", icon: "⬡", desc: "Distributed OS for edge computing clusters. Handles orchestration and real-time telemetry across 10k+ devices.", tech: ["Rust","WASM","gRPC"],       year: "2024" },
  { title: "Flux Engine", tag: "Graphics",  color: "#0891B2", accent: "#67E8F9", icon: "◈", desc: "Real-time renderer using signed distance fields. Global illumination and volumetric fog at 144fps.",           tech: ["C++","GLSL","Vulkan"],       year: "2024" },
  { title: "Synapse ML",  tag: "AI / ML",   color: "#059669", accent: "#6EE7B7", icon: "◎", desc: "Neural architecture search that auto-designs models for edge inference. 94% model size reduction.",             tech: ["Python","PyTorch","CUDA"],   year: "2023" },
  { title: "Meridian",    tag: "Fintech",   color: "#D97706", accent: "#FCD34D", icon: "◇", desc: "Cross-border payment rail using threshold signatures. Settles in under 3 seconds.",                             tech: ["Go","Solidity","ZK"],        year: "2024" },
  { title: "Vaulted",     tag: "Security",  color: "#DC2626", accent: "#FCA5A5", icon: "⬟", desc: "Zero-trust secret management with hardware attestation and ephemeral credential vending.",                      tech: ["Rust","TPM","mTLS"],         year: "2023" },
  { title: "Prism DB",    tag: "Database",  color: "#6D28D9", accent: "#C4B5FD", icon: "▲", desc: "Columnar OLAP database for time-series. 50M inserts/sec with SIMD vectorisation.",                             tech: ["C++","Arrow","Parquet"],     year: "2024" },
  { title: "Orbit SDK",   tag: "Dev Tools", color: "#0E7490", accent: "#A5F3FC", icon: "○", desc: "Universal embedded SDK. Write once, target ARM, RISC-V, x86 with deterministic layout.",                       tech: ["Zig","LLVM","CMake"],        year: "2023" },
  { title: "Helios API",  tag: "Platform",  color: "#047857", accent: "#A7F3D0", icon: "◐", desc: "Unified developer gateway. Adaptive rate limiting and semantic caching at 5M req/day.",                        tech: ["Go","Redis","Envoy"],        year: "2024" },
];

const N = PROJECTS.length;
const STEP = (2 * Math.PI) / N;
const R = 340;

function Starfield() {
  const ref = useRef(null);
  useEffect(() => {
    const cvs = ref.current;
    const ctx = cvs.getContext("2d");
    let stars = [], raf;
    const init = () => {
      cvs.width = window.innerWidth; cvs.height = window.innerHeight;
      stars = Array.from({ length: 260 }, () => ({ x: Math.random()*cvs.width, y: Math.random()*cvs.height, r: Math.random()*1.2+0.2, a: Math.random(), da: (Math.random()-0.5)*0.004+0.001 }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      stars.forEach(s => { s.a = Math.max(0.05, Math.min(1, s.a+s.da)); if(s.a<=0.05||s.a>=1) s.da*=-1; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=`rgba(255,255,255,${s.a})`; ctx.fill(); });
      raf = requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);
  return <canvas ref={ref} style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }} />;
}

export default function RoundTableCarousel() {
  const [angle, setAngle] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const drag = useRef({ startX:0, lastX:0, lastTime:0, vel:0 });

  const animateTo = useCallback((target, dur=650) => {
    const start = angleRef.current, diff = target-start, t0 = performance.now();
    if(rafRef.current) cancelAnimationFrame(rafRef.current);
    const tick = (now) => {
      const p = Math.min((now-t0)/dur, 1);
      angleRef.current = start + diff*(1-Math.pow(1-p,4));
      setAngle(angleRef.current);
      if(p<1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const goTo = useCallback((i) => {
    const norm = ((angleRef.current%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
    let diff = ((N-i)%N)*STEP - norm;
    if(diff>Math.PI) diff-=2*Math.PI;
    if(diff<-Math.PI) diff+=2*Math.PI;
    setActiveIdx(i);
    animateTo(angleRef.current+diff, 650);
  }, [animateTo]);

  const shift = useCallback((dir) => {
    const norm = ((angleRef.current%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
    const cur = Math.round(norm/STEP)%N;
    const next = (cur+dir+N)%N;
    let diff = next*STEP - norm;
    if(diff>Math.PI) diff-=2*Math.PI;
    if(diff<-Math.PI) diff+=2*Math.PI;
    animateTo(angleRef.current+diff, 600);
  }, [animateTo]);

  useEffect(() => {
    const kd = (e) => { if(e.key==="ArrowLeft") shift(-1); if(e.key==="ArrowRight") shift(1); };
    window.addEventListener("keydown", kd);
    return () => { window.removeEventListener("keydown", kd); if(rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [shift]);

  const onDown = (cx) => {
    if(rafRef.current) cancelAnimationFrame(rafRef.current);
    drag.current = { startX:cx, lastX:cx, lastTime:performance.now(), vel:0 };
    setIsDragging(false);
  };
  const onMove = (cx) => {
    const {lastX,lastTime,startX} = drag.current;
    const dx=cx-lastX, dt=performance.now()-lastTime;
    drag.current.vel = dt>0 ? dx/dt : 0;
    drag.current.lastX = cx; drag.current.lastTime = performance.now();
    if(Math.abs(cx-startX)>5) setIsDragging(true);
    angleRef.current += (dx/R)*0.9;
    setAngle(angleRef.current);
  };
  const onUp = () => {
    const proj = angleRef.current + drag.current.vel*0.7*8;
    const norm = ((proj%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
    const idx = Math.round(norm/STEP)%N;
    const fullRots = Math.round(angleRef.current/(2*Math.PI));
    setActiveIdx((N-idx)%N);
    animateTo(fullRots*2*Math.PI + idx*STEP, 700);
    setTimeout(()=>setIsDragging(false), 60);
  };

  const getT = (i) => {
    const a = -i*STEP+angle, x=Math.sin(a)*R, z=Math.cos(a)*R;
    const norm=(z+R)/(2*R);
    return { x, z, rotY:-a*(180/Math.PI), scale:0.46+0.54*norm, opacity:0.25+0.75*norm, front:z>R*0.55 };
  };

  const sorted = PROJECTS.map((_,i)=>({i,...getT(i)})).sort((a,b)=>a.z-b.z);
  const norm2 = ((angle%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
  const frontIdx = (N-Math.round(norm2/STEP)%N)%N;
  const frontColor = PROJECTS[frontIdx].accent;

  const arrowStyle = { width:44, height:44, borderRadius:"50%", background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.6)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0, zIndex:20, transition:"all .25s" };

  return (
    <div style={{ minHeight:"100vh", background:"#000", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden", userSelect:"none", position:"relative", fontFamily:"'Space Grotesk',monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap');
        @keyframes galaxySpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes glowP{0%,100%{opacity:.5}50%{opacity:1}}
      `}</style>

      <Starfield />
      <div style={{ position:"fixed", width:500, height:500, borderRadius:"50%", filter:"blur(130px)", background:PROJECTS[frontIdx].color, top:"40%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none", opacity:0.1, transition:"background 1.2s, opacity 0.8s", zIndex:1 }} />

      <div style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", alignItems:"center" }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", marginBottom:5 }}>Portfolio</p>
        <h1 style={{ fontSize:28, fontWeight:700, letterSpacing:"-0.04em", color:"rgba(255,255,255,.85)", marginBottom:30 }}>
          Selected <span style={{color:"rgba(255,255,255,.18)"}}>/</span> Works
        </h1>

        <div style={{ display:"flex", alignItems:"center" }}>
          <button style={arrowStyle} onClick={()=>shift(-1)} onMouseOver={e=>Object.assign(e.currentTarget.style,{background:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.25)",color:"#fff"})} onMouseOut={e=>Object.assign(e.currentTarget.style,{background:"rgba(255,255,255,.04)",borderColor:"rgba(255,255,255,.1)",color:"rgba(255,255,255,.6)"})} aria-label="Previous">&#8592;</button>

          <div
            style={{ width:"min(760px,calc(100vw - 120px))", height:430, position:"relative", perspective:1100, cursor:isDragging?"grabbing":"grab", flexShrink:0 }}
            onMouseDown={e=>{ onDown(e.clientX); const mm=ev=>onMove(ev.clientX); const mu=()=>{window.removeEventListener("mousemove",mm);window.removeEventListener("mouseup",mu);onUp();}; window.addEventListener("mousemove",mm); window.addEventListener("mouseup",mu); }}
            onTouchStart={e=>{ onDown(e.touches[0].clientX); const tm=ev=>{ev.preventDefault();onMove(ev.touches[0].clientX);}; const tu=()=>{window.removeEventListener("touchmove",tm);window.removeEventListener("touchend",tu);onUp();}; window.addEventListener("touchmove",tm,{passive:false}); window.addEventListener("touchend",tu); }}
          >
            <div style={{ width:"100%", height:"100%", position:"relative", transformStyle:"preserve-3d" }}>
              {/* Galaxy */}
              <div style={{ position:"absolute", width:170, height:170, left:"calc(50% - 85px)", top:"calc(50% - 85px)", borderRadius:"50%", overflow:"hidden", zIndex:Math.floor(N/2), pointerEvents:"none", border:"1px solid rgba(255,255,255,.08)", boxShadow:"0 0 40px rgba(100,80,255,.15)" }}>
                <div style={{ position:"absolute", inset:-20, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(80,60,200,.18) 0%,transparent 70%)", animation:"glowP 4s ease-in-out infinite" }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1024px-NGC_4414_%28NASA-med%29.jpg" alt="Galaxy NGC 4414" style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%", opacity:0.85, animation:"galaxySpin 80s linear infinite" }} crossOrigin="anonymous" />
              </div>

              {sorted.map(({i,x,z,rotY,scale,opacity,front})=>{
                const p=PROJECTS[i];
                return (
                  <div key={i} onClick={()=>!isDragging&&goTo(i)} style={{ position:"absolute", width:220, height:280, left:"calc(50% - 110px)", top:"calc(50% - 140px)", borderRadius:18, padding:"20px 18px 18px", display:"flex", flexDirection:"column", gap:9, willChange:"transform,opacity", transform:`translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`, opacity, zIndex:Math.round((z+R)*10), cursor:front?"default":"pointer", background:`linear-gradient(145deg,${p.color}1E 0%,#060608 70%)`, border:`1px solid ${front?p.accent+"35":"rgba(255,255,255,0.04)"}`, boxShadow:front?"0 0 60px rgba(0,0,0,.8),0 0 0 1px rgba(255,255,255,.1)":"none", transition:"box-shadow 0.4s" }}>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8.5, letterSpacing:"0.1em", position:"absolute", top:16, right:14, color:p.accent+"70" }}>{p.year}</span>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8.5, fontWeight:500, letterSpacing:"0.15em", textTransform:"uppercase", padding:"3px 8px", borderRadius:999, width:"fit-content", background:p.color+"25", color:p.accent, border:`1px solid ${p.color}40` }}>{p.tag}</span>
                    <span style={{ fontSize:26, color:p.accent }}>{p.icon}</span>
                    <h2 style={{ fontSize:18, fontWeight:700, letterSpacing:"-0.03em", color:"rgba(255,255,255,.92)" }}>{p.title}</h2>
                    <p style={{ fontSize:11, lineHeight:1.6, flex:1, color:"rgba(255,255,255,.4)" }}>{p.desc}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginTop:"auto" }}>
                      {p.tech.map(t=><span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:8.5, padding:"2px 6px", borderRadius:5, border:`1px solid ${p.color}40`, color:p.accent+"CC", background:p.color+"18" }}>{t}</span>)}
                    </div>
                  </div>
                );
              })}

              <div style={{ position:"absolute", bottom:-20, left:"50%", transform:"translateX(-50%)", width:800, height:50, background:"radial-gradient(ellipse at center,rgba(255,255,255,.03) 0%,transparent 70%)", borderTop:"1px solid rgba(255,255,255,.04)", borderRadius:"50%", pointerEvents:"none" }} />
            </div>
          </div>

          <button style={arrowStyle} onClick={()=>shift(1)} onMouseOver={e=>Object.assign(e.currentTarget.style,{background:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.25)",color:"#fff"})} onMouseOut={e=>Object.assign(e.currentTarget.style,{background:"rgba(255,255,255,.04)",borderColor:"rgba(255,255,255,.1)",color:"rgba(255,255,255,.6)"})} aria-label="Next">&#8594;</button>
        </div>

        <div style={{ display:"flex", gap:6, marginTop:22, alignItems:"center" }}>
          {PROJECTS.map((_,i)=>(
            <button key={i} onClick={()=>goTo(i)} aria-label={`Project ${i+1}`} style={{ width:activeIdx===i?20:5, height:5, borderRadius:activeIdx===i?3:"50%", background:activeIdx===i?frontColor:"rgba(255,255,255,.16)", border:"none", padding:0, cursor:"pointer", transition:"all .3s" }} />
          ))}
        </div>

        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9.5, letterSpacing:"0.12em", color:"rgba(255,255,255,.14)", textTransform:"uppercase", marginTop:14, display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ display:"block", width:20, height:1, background:"rgba(255,255,255,.08)" }} />
          drag or use arrows to rotate
          <span style={{ display:"block", width:20, height:1, background:"rgba(255,255,255,.08)" }} />
        </p>
      </div>
    </div>
  );
}