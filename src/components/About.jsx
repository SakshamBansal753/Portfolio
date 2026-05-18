import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { skillCategories } from '../../constants'
import HeroCube from './HeroCube'



const About = () => {

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-black px-6 py-28 md:px-20
        max-w-full mx-0
      "
    >

      {/* Glow */}
      <div
        className="
          absolute left-1/2 top-40
          h-[500px] w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="relative z-10 setid">

        {/* Heading */}
        <p className="mb-4 text-sm uppercase tracking-[0.45em] text-white/40">
          About Me
        </p>

        <div className="overflow-hidden flex justify-between">
    <div>
          <h1
            className="
              about-heading
              max-w-6xl
              text-5xl font-black leading-[0.9]
              text-white
              md:text-8xl
            "
          >
            Building scalable <br />
            products with code & creativity
          </h1>
          </div>
          <div className='relative right-2 herocube'>
          <HeroCube/>
          </div>

        </div>

        {/* Main Layout */}
        <div
          className="
            mt-20
            grid gap-14
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >

          {/* Left */}
          <div>

            <p
              className="
                about-para
                max-w-4xl
                text-base leading-relaxed
                text-white/60
                md:text-lg
              "
            >
              I’m a passionate Full Stack Developer and AI Engineering enthusiast
              who enjoys building scalable web applications and intelligent systems
              that solve real-world problems.

              <br /><br />

              I specialize in creating immersive frontend experiences,
              robust backend systems, and modern digital products with
              smooth interactions and performance-driven engineering.

              <br /><br />

              I have solved 600+ problems on LeetCode, strengthening my
              understanding of algorithms, system design, and software architecture.

              <br /><br />

              My goal is to blend creativity with engineering to build
              impactful experiences that feel cinematic, intelligent, and meaningful.
            </p>

          </div>

          {/* Right Card */}
          <div className="relative">

            <div
              className="
                about-card
                group
                relative overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-cyan-400/30
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-cyan-400/10
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">

                <p className="text-sm uppercase tracking-[0.35em] text-white/40">
                  Tech Stack
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {[
                    'React',
                    'Node.js',
                    'MongoDB',
                    'GSAP',
                    'Tailwind',
                    'Python',
                    'Next.js',
                    'AI/ML',
                    "Docker",
                    "Firebase",
                    "Clerk",
                    "Three.js",
                    "DeepLearning"
                  ].map((tech) => (

                    <div
                      key={tech}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-4 py-2
                        text-sm text-white/80
                        backdrop-blur-xl
                      "
                    >
                      {tech}
                    </div>

                  ))}

                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 gap-6">

                  <div>
                    <h2 className="text-5xl font-black text-white">
                      600+
                    </h2>

                    <p className="mt-2 text-sm text-white/50">
                      LeetCode Problems
                    </p>
                  </div>

                  <div>
                    <h2 className="text-5xl font-black text-white">
                      10+
                    </h2>

                    <p className="mt-2 text-sm text-white/50">
                      Projects Built
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Marquee */}
        <div
          className="
            relative mt-24
            overflow-hidden
            border-y border-white/[0.05]
            bg-white/[0.012]
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

      </div>

    </section>
  )
}

export default About