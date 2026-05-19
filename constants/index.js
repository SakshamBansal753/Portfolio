const navLinks = [
 {
	id: "hero",
	title: "Home",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "achievements",
	title: "Achievements",
 },
 {
	id: "projects",
	title: "Projects",
 },
 {
	id:"hobbies",
	title:"Hobbies"
 },
 {
	id: "contact",
	title: "Contact",
 },
];
const skillCategories = [
  "React",
  "Frontend Development",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Tailwind CSS",
  "Freelancing",
  "Artificial Intelligence",
  "Three.js",
  "TanStack Query",
  "Clerk",
  "Firebase",
  "C++",
  "Data Structures & Algorithms",
  "C",
  "Academics",
];


const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];







const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

 const projects = [
  {
    id: 1,
    title: "Redefine Gaming Website",

    description:
      "Built and created an animated website for a gaming platform named Redefine with immersive UI interactions and smooth modern animations.",

    type: "FRONTEND",

    tech: [
      "React",
      "Three.js",
      "GSAP",
      "Tailwind",
    ],

    image:
      "/images/redefine.png",

    githubLink:
      "https://github.com/SakshamBansal753/Cool-Frontend/tree/main/Redefine",

    projectLink:
      "https://cool-frontend-94k9.vercel.app/",
  },

  {
    id: 2,

    title: "Skild",

    description:
      "Built and created a skills sharing platform with Clerk authentication, realtime features, analytics integration, and scalable backend architecture.",

    type: "FULL STACK",

    tech: [
      "TanStack",
      "Tailwind",
      "Clerk",
      "Firebase",
      "PostHog",
      "GSAP",
      "Python",
    ],

    image:
      "/images/skild.png",

    githubLink:
      "https://github.com/yourusername/skild",

    projectLink:
      "https://cool-frontend-6syf.vercel.app/",
  },

  {
    id: 3,

    title: "Cocktail",

    description:
      "A fully animated frontend website for cocktails and mocktails with super smooth features and immersive UI experience.",

    type: "FRONTEND",

    tech: [
      "React",
      "Tailwind",
      "Clerk",
      "GSAP",
    ],

  image:
      "/images/cocktails.png",

    githubLink:
      "https://github.com/SakshamBansal753/Cool-Frontend/tree/main/cocktail",

    projectLink:
      "https://cool-frontend-6syf.vercel.app/",
  },

  {
    id: 4,

    title: "LLM",

    description:
      "My first autotuned LLM model for basic question answering using deep learning and machine learning concepts.",

    type: "BACKEND",

    tech: [
      "Python",
      "Deep Learning",
      "Machine Learning",
    ],

    image:
      "/images/LLM.png",

    githubLink:
      "https://github.com/SakshamBansal753/Instruction-Fine-Tunner-LLM",

    projectLink:
      "https://github.com/SakshamBansal753/Instruction-Fine-Tunner-LLM",
  },

  {
    id: 5,

    title: "EchoNet",

    description:
      "A social media application with super smooth functionality designed for connecting people through realtime interactions.",

    type: "FULL STACK",

    tech: [
      "React",
      "Python",
      "Tailwind",
      "SQL",
    ],

    image:
      "/images/echo.png",

    githubLink:
      "https://github.com/SakshamBansal753/EchoNet",

    projectLink:
      "https://github.com/SakshamBansal753/EchoNet",
  },
];

export {
 navLinks,

 projects,
 profileLists,

 socials,

 skillCategories
};