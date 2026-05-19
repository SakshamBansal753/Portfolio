import React from 'react'

const SkillCard = ({
  title,
  icon,
  image,
}) => {

  return (

    <div
      className="
        group
        relative
        h-[190px]
        w-full
        cursor-pointer
      "
      style={{ perspective: '1400px' }}
    >

      {/* OUTER GLOW */}
      <div
        className="
          absolute inset-0
          rounded-[30px]
          bg-white/[0.02]
          opacity-0
          blur-2xl
          transition-all duration-700
          group-hover:opacity-100
          group-hover:scale-110
        "
      />

      {/* CARD */}
      <div
        className="
          relative h-full w-full

          rounded-[30px]

          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          [transform-style:preserve-3d]

          group-hover:[transform:rotateY(180deg)_translateY(-6px)]
        "
      >

        {/* FRONT */}
        <div
          className="
            absolute inset-0
            overflow-hidden
            rounded-[30px]

            border border-white/10

            bg-gradient-to-br
            from-white/[0.10]
            via-white/[0.04]
            to-white/[0.02]

            backdrop-blur-3xl

            shadow-[0_10px_60px_rgba(255,255,255,0.03)]

            [backface-visibility:hidden]
          "
        >

          {/* GRID TEXTURE */}
          <div
            className="
              absolute inset-0 opacity-[0.04]

              [background-image:linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]

              [background-size:18px_18px]
            "
          />

          {/* TOP LIGHT */}
          <div
            className="
              absolute inset-x-0 top-0
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/50
              to-transparent
            "
          />

          {/* GLOW BALL */}
          <div
            className="
              absolute -right-10 -top-10
              h-40 w-40
              rounded-full
              bg-cyan-400/10
              blur-[80px]
            "
          />

          {/* INNER LIGHT */}
          <div
            className="
              absolute left-8 top-8
              h-16 w-16
              rounded-full
              bg-white/[0.06]
              blur-2xl
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10
              flex h-full flex-col
              justify-between
              p-6
            "
          >

            {/* ICON */}
            <div
              className="
                flex h-7 w-7
                items-center justify-center

                rounded-full

                border border-white/10

                bg-black/30

                shadow-[0_0_25px_rgba(255,255,255,0.04)]

                backdrop-blur-xl

                transition-all duration-500

                group-hover:scale-110
                group-hover:border-cyan-400/30
                object-contain
              "
            >

              <img
                src={icon}
                alt={title}
                className="
                  h-7 w-7
                  object-contain
                  transition-transform duration-500
                  group-hover:rotate-6
                "
              />

            </div>

            {/* TEXT */}
            <div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.38em]
                  text-white/35
                "
              >
                Acieved
              </p>

              <h2
                className="
                  mt-3
                  text-[30px]
                  font-black
                  leading-none
                  text-white
                "
              >
                {title}
              </h2>

              <div
                className="
                  mt-4
                  flex items-center gap-2
                "
              >

                <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

                <p className="text-xs text-white/40">
                  Hover to reveal
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            overflow-hidden
            rounded-[30px]

            border border-white/10

            bg-black

            shadow-[0_10px_80px_rgba(0,0,0,0.5)]

            [transform:rotateY(180deg)]

            [backface-visibility:hidden]
          "
        >

          {/* IMAGE */}
          <img
            src={image}
            alt={title}
            className="
              absolute inset-0
              h-full w-full
              object-cover
              scale-110
              transition-transform duration-700
              group-hover:scale-100
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute inset-0

              bg-gradient-to-b
              from-black/20
              via-black/40
              to-black/85
            "
          />

          {/* NOISE */}
          <div
            className="
              absolute inset-0
              opacity-[0.05]
              mix-blend-soft-light
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative z-10
              flex h-full flex-col
              justify-between
              p-6
            "
          >

            {/* TOP */}
            <div
              className="
                flex items-center justify-between
              "
            >

              <div
                className="
                  rounded-full
                  border border-white/10
                  bg-white/10
                  px-3 py-1
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/70
                  backdrop-blur-xl
                "
              >
                Advanced
              </div>

              <div
                className="
                  h-3 w-3
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_20px_rgba(103,232,249,0.8)]
                "
              />

            </div>

            {/* BOTTOM */}
            <div>

  
              <h2
                className="
                  mt-3
                  text-4xl
                  font-black
                  leading-none
                  text-white
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-3
                  max-w-[90%]
                  text-sm
                  leading-relaxed
                  text-white/60
                "
              >
                Building immersive and scalable modern digital experiences.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default SkillCard