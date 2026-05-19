import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

import { skillCategories } from '../../constants'

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
    position: 'absolute',
    width: 80,
    height: 80,
    background: bg,
    border: '1px solid rgba(167,139,250,0.3)',
    transform,
    backfaceVisibility: 'hidden',
    backdropFilter: 'blur(12px)',
    borderRadius: '14px',
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
          position: 'relative',
          transformStyle: 'preserve-3d',
          transformOrigin: '40px 40px 40px',
        }}
      >
        <div
          style={faceStyle(
            'rgba(255,255,255,0.12)',
            'rotateY(0deg) translateZ(40px)'
          )}
        />

        <div
          style={faceStyle(
            'rgba(0,0,0,0.35)',
            'rotateY(90deg) translateZ(40px)'
          )}
        />

        <div
          style={faceStyle(
            'rgba(255,255,255,0.08)',
            'rotateY(180deg) translateZ(40px)'
          )}
        />

        <div
          style={faceStyle(
            'rgba(0,0,0,0.45)',
            'rotateY(-90deg) translateZ(40px)'
          )}
        />

        <div
          style={faceStyle(
            'rgba(255,255,255,0.15)',
            'rotateX(90deg) translateZ(40px)'
          )}
        />

        <div
          style={faceStyle(
            'rgba(20,20,20,0.5)',
            'rotateX(-90deg) translateZ(40px)'
          )}
        />
      </div>
    </div>
  )
}

const Hero = () => {

  useGSAP(() => {

    gsap.to('.marquee-track', {
      xPercent: -50,
      duration: 20,
      repeat: -1,
      ease: 'linear',
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

      {/* Hide VEO */}
      <img
        src="/images/black.png"
        className="
          absolute bottom-0 left-0
          z-[2]
          h-16 w-full
          object-cover
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Noise */}
      <div className="noisy absolute inset-0 opacity-[0.08]" />

      {/* Main Content */}
      <div
        className="
          relative z-10
          flex h-full items-center justify-between
          px-8 md:px-20
        "
      >

        {/* LEFT CONTENT */}
        <div className="max-w-5xl">

          <HeroCube />

          {/* Small Intro */}
          <p
            className="
              para
              relative top-24
              mb-2
              text-sm uppercase
              tracking-[0.35em]
              text-white/50
            "
          >
            Full Stack Developer
          </p>

          {/* Heading */}
          <h1
            className="
              heading
              text-[6rem]
              font-black
              leading-[0.85]
              text-white
              md:text-[11rem]
            "
          >
            Saksham <br />
            Bansal
          </h1>

          {/* Description */}
          <p
            className="
              para
              mt-6
              max-w-2xl
              text-base leading-relaxed
              text-white/70
              md:text-lg
            "
          >
            Crafting immersive digital experiences with
            modern frontend engineering, smooth animations,
            scalable backend systems, and cinematic UI
            interactions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="
                rounded-full
                border border-white/10
                bg-white/10
                px-6 py-3
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
                rounded-full
                border border-white/10
                px-6 py-3
                text-sm font-medium
                text-white/80
                transition-all duration-300
                hover:bg-white/10
              "
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT BADGES */}
        <div className="hidden md:flex flex-col gap-4">

          {/* Work Badge */}
          <div
            className="
              flex items-center gap-3
              rounded-2xl
              border border-white/10
              bg-white/10
              px-5 py-4
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
              rounded-2xl
              border border-white/10
              bg-white/10
              px-5 py-4
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

      {/* MARQUEE */}
      <div
        className="
          absolute bottom-0 left-0
          z-20
          w-full overflow-hidden

          border-y border-white/[0.05]
          bg-black/20
          backdrop-blur-md

          py-[18px]
        "
      >

        <div className="marquee-track flex w-max items-center gap-7">

          {[...skillCategories, ...skillCategories].map((s, i) => (

            <span
              key={i}
              className="
                flex items-center gap-7
                whitespace-nowrap
                text-[15px]
                tracking-wide
                text-white/25
              "
            >
              {s}

              <span className="text-xs text-white/10">
                ✦
              </span>

            </span>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Hero