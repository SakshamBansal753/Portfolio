import React from 'react'
import {  socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';
const Contact = () => {
    	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 return (
  <footer id="contact" className="relative max-w-full">
    <div className="max-w-full mx-auto px-6  text-xl ml-5">
       <p
          className="
            mb-6 text-sm uppercase tracking-[0.45em]
            text-white/40 hover:text-white transition-colors
          "
        >
          Contact
        </p>

        <div className="flex justify-between max-w-[1000px]">
          <h1
            className="
             contacthead
              max-w-full
              text-2xl md:text-6xl
              font-black leading-[0.9]
              text-white
               pb-6
            "
          >
            Let's Connect and Collaborate
          </h1>
        </div>
      {/* Header Section */}
   

      {/* Content Section */}
      <div className="flex flex-col items-center text-center gap-14 mt-14">

        <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
          Where to Find Me
        </h2>

        {/* Address */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">
            My College
          </h3>
          <p className="text-white/60 max-w-md leading-relaxed">
            Madhav Institue of Technology and Science, Gole Ka Mandir , Gwalior - 474011.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">
            Contact Us
          </h3>
         
          <p className="text-white/60">kanhabansal563@gmail.com</p>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Socials
          </h3>

          <div className="flex items-center justify-center gap-6 mb-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
                  w-11 h-11 flex items-center justify-center
                  rounded-full bg-white/5 hover:bg-white/10
                  transition-all duration-300
                  hover:scale-110
                "
              >
                <img src={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
<div className='mt-12'>

</div>
        {/* Image */}
      
      </div>
    </div>
  </footer>
);
}

export default Contact