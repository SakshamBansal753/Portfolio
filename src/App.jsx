import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Achievements from './components/Achievements'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  useGSAP(() => {

    const maskedtimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "+=1600",
        scrub: 1.5,
        pin: true,
      }
    })

    // Fade intro content
maskedtimeline

.to(".will-fade", {
  opacity: 0,
  y: -40,
  stagger: 0.2,
  ease: "power2.out",
})


.to(".masked-img", {
  maskSize: "300%",
  WebkitMaskSize: "300%",
  duration: 1,
  ease: "power2.inOut",
})
.to('.navbar', {
  opacity: 1,
  width: '72%',
  paddingTop: '12px',
  paddingBottom: '12px',
  backgroundColor: 'rgba(15,15,15,0.45)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '999px',
  top: '20px',
  duration: 1,
  ease: 'power2.out',
})

  }, [])

  return (
    <main className="bg-black overflow-x-hidden">
 <Navbar />
      {/* INTRO CONTENT */}
      <div
        className="
          will-fade
          fixed inset-0 z-[999]
          flex flex-col items-center justify-center
          text-center
          pointer-events-none
          px-6
         font-serif
        "
      >

        {/* Small Intro */}
        <p className="mb-6 text-sm uppercase tracking-[0.45em] text-white/40">
          Saksham Bansal • Portfolio
        </p>

        {/* Main Heading */}
        <h1
          className="
            max-w-6xl
            text-5xl font-black leading-[0.9]
            text-white
            md:text-8xl
            radial-gradient
          "
        >
          Enter my world of <br />
          design and development
        </h1>

        {/* Description */}
        <p
          className="
            mt-70 max-w-2xl
            text-base leading-relaxed
            text-white/60
            md:text-lg
            
          "
        >
          Scroll down to explore my projects creative ideas 
          animations and the experiences I’ve crafted through
          modern web development
        </p>

        {/* Scroll Indicator */}
        <div className="mt-1 flex flex-col items-center">

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
            Scroll Down
          </p>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">
            <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-white/70" />
          </div>

        </div>

      </div>

      {/* MAIN MASKED SECTION */}
      <section
        id="main"
        className="
          masked-img
          relative
          min-h-screen
          overflow-hidden
        "
      >

       
        <Hero />
        
      </section>
      <section id="achievements">
        <Achievements/>
      </section>

     

    </main>
  )
}

export default App