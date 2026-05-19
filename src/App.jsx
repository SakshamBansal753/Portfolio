import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Achievements from './components/Achievements'
import About from './components/About'
import Projects from './components/Projects'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {

  useGSAP(() => {
const headsplit = new SplitText(".heading", { type: "chars,words" })
      const parasplit = new SplitText(".para", { type: "lines" })
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
.from(headsplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        opacity: 0,
      }).from(parasplit.lines, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.3,
        opacity: 0,
      })

const achievehead=new SplitText(".achievement-heading", { type: "chars,words" })

// SPLITS
const achievetimeline=gsap.timeline({
  scrollTrigger:{
    trigger:"#achievements",
    start:"top 80%",
    toggleActions:"play none none reverse",
  }
})
gsap.set('.leftie',{
  opacity: 0,
  y: 50
})
gsap.set('.rightie',{
  opacity: 0,
  y: 50
})
achievetimeline.from(achievehead.chars,{
  yPercent: 120,
  opacity: 0,
  stagger: 0.03,
  duration: 1.1,
  ease: 'expo.out',
}).to('.leftie',{
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power4.out',
},'-=0.8').to('.rightie',{
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power4.out',
},'-=0.5')  

  const headingSplit = new SplitText('.about-heading', {
    type: 'chars ,words',
  })

  const paraSplit = new SplitText('.about-para', {
    type: 'lines',
  })

  // SET INITIAL STATES
  gsap.set('.about-card', {
    opacity: 0,
    y: 100,
    scale: 0.9,
  })

  gsap.set('.herocube', {
    opacity: 0,
    scale: 0.5,
    rotate: -20,
  })

  gsap.set('.marquee-wrapper', {
    opacity: 0,
    y: 40,
  })

  // MASTER TIMELINE
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      
     
    }
  })

  // HEADING
  tl.from(headingSplit.chars, {
    yPercent: 120,
    opacity: 0,
    stagger: 0.03,
    duration: 1.1,
    ease: 'expo.out',
  })

  // CUBE
  .to('.herocube', {
    opacity: 1,
    scale: 1,
    rotate: 0,
    duration: 1,
    ease: 'back.out(1.7)',
  }, '-=0.8')

  // PARAGRAPH
  .from(paraSplit.lines, {
    y: 70,
    opacity: 0,
    stagger: 0.08,
    duration: 0.3,
    ease: 'power3.out',
  }, '-=0.5')

  // TECH CARD
  .to('.about-card', {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.4,
    ease: 'power4.out',
  }, '-=0.5')

  // MARQUEE APPEAR
  .to('.marquee-wrapper', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.5')

  // MARQUEE MOVE
  gsap.to('.marquee-track', {
    xPercent: -50,
    duration: 18,
    repeat: -1,
    ease: 'linear',
  })
  const projectsplit=new SplitText('.projectheading',{
    type:'chars,words'
  })
  const projecttime=gsap.timeline({
    scrollTrigger:{
      trigger:"#projects",
      start:"top 80%",
      toggleActions:"play none none reverse",
    }
  })
  projecttime.from(projectsplit.chars,{
    yPercent: 120,
    opacity: 0,
    stagger: 0.03,
    duration: 1.1,
    ease: 'expo.out',
  })

  return () => {
    headingSplit.revert()
    paraSplit.revert()
    projectsplit.revert()
    achievehead.revert()
  }
   ScrollTrigger.refresh() 

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

      <section >
        <Achievements/>
      </section>
      <section  className='relative max-w-full mx-0'>
        <About/>
      </section>
      <section>
        <Projects/>
      </section>
     

    </main>
  )
}

export default App