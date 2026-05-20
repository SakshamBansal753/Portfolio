import React from 'react'
import RoundTableCarousel from './RoundTabelCarousel'
import HeroCube from './HeroCube'

const Hobbies = () => {
  return (
    <section id='hobbies' className="relative min-h-screen overflow-hidden bg-black mt-40 px-6 py-24 md:px-16 max-w-full">
        <div>
            <div>
  <p className="mb-4 text-sm uppercase tracking-[0.45em] text-white/40 hover:text-white-100">
            Go Beyond
        </p>

        <div className="overflow-hidden flex justify-between">
    <div>
          <h1
            className="
              hobbyheading
              max-w-full
              text-5xl font-black leading-[0.9]
              text-white
              md:text-8xl
              border-b-4 border-white/10
              
            "
          >
            What I Do For Fun 
          </h1>
          
          </div>
           <HeroCube/>
          </div>
         
          </div>
        </div>
        <div>
        <RoundTableCarousel/>
        </div>
    </section>
  )
}

export default Hobbies