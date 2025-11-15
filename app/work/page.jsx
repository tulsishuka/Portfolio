
"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight } from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSlideBtns from "@/components/ui/WorkSlideBtns"

const projects = [
  {
    num: "01",
    title: "Itask-Manager",
    desc: "Task manager app for managing daily work efficiently.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Express.js" },
      { name: "Tailwindcss" },
      { name: "Node.js" },
    ],
    image: "/assets/work/itask.png",
    github: "https://github.com/tulsishuka/iTask-Manager",
  },
  {
    num: "02",
    desc: "Linktree-clone (Frontend)",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Nextjs" },
      { name: "Tailwindcss" },
      { name: "Node.js" },
    ],
    image: "/assets/work/linktree.png",
    github: "https://github.com/tulsishuka/linktree-app",
  },
  {
    num: "03",
    title: "Buy Me a Chai",
    desc: "Donation platform integrated with Razorpay.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Nextjs" },
      { name: "Tailwindcss" },
      { name: "MongoDb" },
      { name: "Razorpay" },
      { name: "Toastify" },
    ],
    image: "/assets/work/chai.png",
    github: "https://github.com/tulsishuka/chai-app",
  },
  {
    num: "04",
    title: "Surgery Status Board",
    desc: "Real-time surgery tracking dashboard.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Tailwindcss" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/chingu.png",
    github: "https://github.com/tulsishuka/V56-tier2-team-21",
  },
  {
    num: "05",
    desc: "ShortURL - Find Anything",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Nextjs" },
      { name: "Tailwindcss" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/url.png",
    github: "",
  },
  {
    num: "06",
    desc: "Twitter Clone (Frontend)",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "React" }, { name: "Tailwindcss" }],
    image: "/assets/work/x.png",
    github: "https://github.com/tulsishuka/twitter-clone",
  },
  {
    num: "07",
    desc: "AI-Chatbot - Search Anything",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Gemini-Api" }, { name: "React" }, { name: "Tailwindcss" }],
    image: "/assets/work/ai.png",
    github: "https://github.com/tulsishuka/ai-chatbot",
  },
 {
    num: "08",
    desc: "AI-Chatbot - Search Anything",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Gemini-Api" }, { name: "React" }, { name: "Tailwindcss" }],
    image: "/assets/work/Login Page.png",
    github: "https://github.com/tulsishuka/ai-chatbot",
  },
   {
    num: "09",
    desc: "AI-Chatbot - Search Anything",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Gemini-Api" }, { name: "React" }, { name: "Tailwindcss" }],
    image: "/assets/work/Dream.png",
    github: "https://github.com/tulsishuka/ai-chatbot",
  },
   {
    num: "10",
    desc: "AI-Chatbot - Search Anything",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Gemini-Api" }, { name: "React" }, { name: "Tailwindcss" }],
    image: "/assets/work/Pagination.png",
    github: "https://github.com/tulsishuka/ai-chatbot",
  },
   {
    num: "11",
    desc: "AI-Chatbot - Search Anything",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Gemini-Api" }, { name: "React" }, { name: "Tailwindcss" }],
    image: "/assets/work/Post Maker.png",
    github: "https://github.com/tulsishuka/ai-chatbot",
  },
   {
    num: "12",
    desc: "AI-Chatbot - Search Anything",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Gemini-Api" }, { name: "React" }, { name: "Tailwindcss" }],
    image: "/assets/work/Task Manager.png",
    github: "https://github.com/tulsishuka/ai-chatbot",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 px-4 md:px-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[40px] items-center">
          {/* LEFT CONTENT */}
          <div className="w-full xl:w-[50%] order-2 xl:order-none mt-8 xl:mt-0">
            <div className="space-y-6">
              <div className="text-5xl md:text-7xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-white">
                {project.title || "Project"}
              </h2>

              <p className="text-white/70 text-sm md:text-base">{project.desc}</p>

              <ul className="flex flex-wrap gap-2 md:gap-3">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-xs md:text-sm px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full text-green-400"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-green-400 transition-all">
                          <BsArrowUpRight className="text-white text-xl md:text-2xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="h-[260px] sm:h-[320px] md:h-[380px] xl:h-[480px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative h-full group flex justify-center items-center bg-black/20 rounded-xl overflow-hidden shadow-lg">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 group-hover:bg-black/10 transition-all"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover rounded-xl"
                        alt={project.title || "Project"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-2 md:right-4 bottom-4 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-green-400 hover:bg-green-500 text-primary text-lg md:text-xl w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex justify-center items-center rounded-full transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
