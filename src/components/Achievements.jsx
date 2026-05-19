import React from 'react'
import PixelSphere from './PixelSphere'
import SkillCard from './SkillCard'

const Achievements = () => {
  return (

    <section
      id="achievements"
      className="
        relative min-h-screen
        overflow-hidden
        bg-black
        mt-40
        px-6 py-24
        md:px-16
        max-w-full
      "
    >

<div>
  <p className="mb-4 text-sm uppercase tracking-[0.45em] text-white/40 hover:text-white-100">
          Achievements
        </p>

        <div className="overflow-hidden flex justify-between">
    <div>
          <h1
            className="
              achievement-heading
              max-w-full
              text-5xl font-black leading-[0.9]
              text-white
              md:text-8xl
              border-b-4 border-white/10
              
            "
          >
            What I Achieved So Far
          </h1>
          </div>
          </div>
</div>
      {/* Glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[450px] w-[450px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          grid max-w-7xl
          items-center gap-8
          lg:grid-cols-[0.9fr_420px_0.9fr]
        "
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5 leftie">

          <div className="h-[180px]">
            <SkillCard
              title="Top-5 In DSA Compedition"
              icon="/images/leetcode.png"
              image="/images/DSA.png"
            />
          </div>

          <div className="h-[180px]">
            <SkillCard
              title="Gold Medalist in National Level Taekwondo"
              icon="/images/tkdlogo.webp"
              image="/images/winner.jpeg"
            />
          </div>

          <div className="h-[180px]">
            <SkillCard
              title="Top 5 In Institute in Current Year"
              icon="/images/leetcode.png"
              image="/images/dsa.jpeg"
            />
          </div>

        </div>

        {/* CENTER SPHERE */}
        <div className="flex items-center justify-center">

          <PixelSphere />

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5 rightie">

          <div className="h-[180px]">
            <SkillCard
              title="Top 20 In college level compettive coding"
              icon="/icons/th"
              image="/images/three-bg.jpg"
            />
          </div>

          <div className="h-[180px]">
            <SkillCard
              title="Silver Medalist in District Level debate "
              icon="/images/debate.JPG"
              image="/images/debate.JPG"
            />
          </div>

          <div className="h-[180px]">
            <SkillCard
              title="Top 5 in Hack The Rank Compedition"
              icon="/images/hr.png"
              image="/images/hackrank.png"
            />
          </div>

        </div>

      </div>

    </section>
  )
}

export default Achievements