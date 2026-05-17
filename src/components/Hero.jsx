import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
function HeroCube() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let t = 0
    let raf

    const tick = () => {
      t += 0.004

      el.style.transform = `
        rotateX(${20 + Math.sin(t) * 5}deg)
        rotateY(${t * 50}deg)
      `

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  const faceStyle = (bg, transform) => ({
    position: "absolute",
    width: 80,
    height: 80,
    background: bg,
    border: "1px solid rgba(167,139,250,0.3)",
    transform,
    backfaceVisibility: "hidden",
    backdropFilter: "blur(12px)",
    borderRadius: "14px",
  })

  return (
    <div
      className="absolute right-[8%] top-1/4 hidden lg:block"
      style={{ perspective: 600, zIndex: 2 }}
    >
      <div
        ref={ref}
        style={{
          width: 80,
          height: 80,
          position: "relative",
          transformStyle: "preserve-3d",
          transformOrigin: "40px 40px 40px",
        }}
      >
      <div style={faceStyle("rgba(255,255,255,0.12)", "rotateY(0deg) translateZ(40px)")} />

<div style={faceStyle("rgba(0,0,0,0.35)", "rotateY(90deg) translateZ(40px)")} />

<div style={faceStyle("rgba(255,255,255,0.08)", "rotateY(180deg) translateZ(40px)")} />

<div style={faceStyle("rgba(0,0,0,0.45)", "rotateY(-90deg) translateZ(40px)")} />

<div style={faceStyle("rgba(255,255,255,0.15)", "rotateX(90deg) translateZ(40px)")} />

<div style={faceStyle("rgba(20,20,20,0.5)", "rotateX(-90deg) translateZ(40px)")} />
      </div>
    </div>
  )
}
const Hero = () => {
    
    useGSAP(()=>{
        //heading animation
        const headsplit=new SplitText(".heading",{type:"chars,words"})
        gsap.from(headsplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.06,
            opacity:0,
    })
    //paragraph animation
    const parasplit=new SplitText(".para",{type:"lines"})
    gsap.from(parasplit.lines,{
        yPercent:100,
        duration:1.8,
        ease:"expo.out",
        stagger:0.3,
        opacity:0,
    })
    }, [])
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/light.mp4"
      />
       <img src='/images/black.png'
       className='absolute bottom-0 left-0 z-[2] w-full h-16 object-cover '/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Noise Texture */}
      <div className="noisy absolute inset-0 opacity-[0.08]" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-8 md:px-20">

        {/* LEFT CONTENT */}
        <div className="max-w-5xl">
<HeroCube/>
          {/* Small Intro */}
          <p className="para mb-2 text-sm uppercase tracking-[0.35em] text-white/50 relative top-24">
            Full Stack Developer
          </p>

          {/* Large Heading */}
          <h1 className="text-[6rem] font-black leading-[0.85] text-white md:text-[11rem] heading">
            Saksham <br />
            Bansal
          </h1>

          {/* Description */}
          <p className="para mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Crafting immersive digital experiences with modern frontend
            engineering, smooth animations, scalable backend systems,
            and cinematic UI interactions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="
                rounded-full border border-white/10
                bg-white/10 px-6 py-3
                text-sm font-medium text-white
                backdrop-blur-xl
                transition-all duration-300
                hover:bg-white/20
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                rounded-full border border-white/10
                px-6 py-3
                text-sm font-medium text-white/80
                transition-all duration-300
                hover:bg-white/10
              "
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT SIDE BADGES */}
        <div className="hidden md:flex flex-col gap-4">

          {/* Available Badge */}
          <div
            className="
              flex items-center gap-3
              rounded-2xl border border-white/10
              bg-white/10 px-5 py-4
              backdrop-blur-xl
            "
          >
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <div>
              <p className="text-sm font-medium text-white">
                Available for Work
              </p>
              <p className="text-xs text-white/50">
                Open to freelance & full-time
              </p>
            </div>
          </div>

          {/* Experience Badge */}
          <div
            className="
              rounded-2xl border border-white/10
              bg-white/10 px-5 py-4
              backdrop-blur-xl
            "
          >
            <p className="text-3xl font-bold text-white">
              2+
            </p>
            <p className="text-sm text-white/60">
              Years Experience
            </p>
          </div>

          

        </div>
       

      </div>
       <div className='relative z-120'>
           
        </div>
    </section>
  )
}

export default Hero