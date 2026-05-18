import React, { useEffect, useRef } from 'react'

const HeroCube = () => {

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
    border: '1px solid rgba(255,255,255,0.15)',
    transform,
    backfaceVisibility: 'hidden',
    backdropFilter: 'blur(12px)',
    borderRadius: '14px',
    boxShadow: '0 0 30px rgba(255,255,255,0.06)',
  })

  return (

    <div
      className="
        absolute right-[8%] top-1/4
        hidden lg:block
      "
      style={{
        perspective: 600,
        zIndex: 2,
      }}
    >

      {/* Glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[180px] w-[180px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white/10
          blur-[90px]
        "
      />

      {/* Cube */}
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

        {/* Front */}
        <div
          style={faceStyle(
            'rgba(255,255,255,0.12)',
            'rotateY(0deg) translateZ(40px)'
          )}
        />

        {/* Right */}
        <div
          style={faceStyle(
            'rgba(0,0,0,0.35)',
            'rotateY(90deg) translateZ(40px)'
          )}
        />

        {/* Back */}
        <div
          style={faceStyle(
            'rgba(255,255,255,0.08)',
            'rotateY(180deg) translateZ(40px)'
          )}
        />

        {/* Left */}
        <div
          style={faceStyle(
            'rgba(0,0,0,0.45)',
            'rotateY(-90deg) translateZ(40px)'
          )}
        />

        {/* Top */}
        <div
          style={faceStyle(
            'rgba(255,255,255,0.15)',
            'rotateX(90deg) translateZ(40px)'
          )}
        />

        {/* Bottom */}
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

export default HeroCube