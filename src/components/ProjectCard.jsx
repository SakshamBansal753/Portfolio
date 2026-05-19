import { FaGithubSquare } from "react-icons/fa"; 
// ProjectCard.jsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  subtitle,
  description,
  tech,
  type,
 
  image,
  githubLink,
  projectLink,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.4,
        ease: "power3.out",
        transformPerspective: 1000,
      });
    };

    const resetRotation = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetRotation);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetRotation);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border border-white/10
        bg-[#070707]
        w-full
        max-w-full
        min-h-[420px]
        grid
        grid-cols-1
        lg:grid-cols-2
        shadow-[0_0_60px_rgba(0,255,170,0.06)]
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          bg-emerald-500/10
          blur-[120px]
          z-0
        "
      />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col justify-between p-6 lg:p-10">
        <div>
          {/* Type Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border border-emerald-400/20
              bg-emerald-400/5
              text-emerald-300
              text-xs
              tracking-[0.2em]
            "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            {type}
          </div>

          {/* Subtitle */}
          <p className="mt-6 text-zinc-400 text-sm">
            {subtitle}
          </p>

          {/* Title */}
          <h1
            className="
              mt-4
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              text-white
            "
          >
            {title}
          </h1>

          {/* Description */}
          <p className="mt-5 text-zinc-400 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6">
            {tech.map((item, index) => (
              <div
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  border border-white/10
                  text-zinc-300
                  text-xs
                  tracking-wider
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center gap-10 mt-10">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {type}
            </h2>

            <p className="text-zinc-500 text-sm mt-1">
              Project Type
            </p>
          </div>

        
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative z-10 flex items-center justify-center  ">
        {/* Floating Glow */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            w-[300px]
            h-[300px]
            rounded-full
            bg-emerald-500/20
            blur-[100px]
          "
        />

        {/* Image */}
        <motion.img
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={image}
          alt="project"
          className="
            relative
            z-10
            w-full
            max-w-[700px]
            h-[500px]
            rounded-2xl
            border border-white/10
            shadow-[0_0_60px_rgba(0,255,170,0.12)]
          "
        />
      </div>

      {/* Buttons */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-3">
        {/* GitHub */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12
            h-12
            
            rounded-full
            border border-white/10
            bg-black/40
            backdrop-blur-xl
            flex items-center justify-center
            hover:scale-110
            transition-all duration-300
            text-white
            text-lg
          "
        >
          <FaGithubSquare color="white" size={32}/>
        </a>

        {/* Arrow */}
        <a
          href={projectLink}
          className="
            w-12
            h-12
            rounded-full
            border border-white/10
            bg-black/40
            backdrop-blur-xl
            flex items-center justify-center
            hover:scale-110
            transition-all duration-300
            text-white
            text-2xl
          "
        >
          ↗
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;