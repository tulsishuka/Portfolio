
"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaGithub,FaProjectDiagram} from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiSupabase } from "react-icons/si";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"

const About = {
  title: "About Me",
    desc: "I specialize in building dynamic scalable and user friendly web applications using modern technologies My skillset covers both frontend and backend development ensuring seamless integration optimized performance and clean code practices I also leverage version control and collaborative tools to deliver high quality projects efficiently",
    name:"Tulasi Shukla",

  // desc: "I am Full-Stack Software Developer-((MERN- Next.js * React * Node.js * MongoDB * Express.js))",
  info: [
    { fieldName: "Name", fieldValue: "Tulasi Shukla"}
    // { fieldName: "Email", fieldValue: "tulsishuklag@gmail.com" },
    // { fieldName: "Experience", fieldValue: " I’ve successfully completed an internship with Chingu, a global learning community, where I:Worked in a diverse, 𝗿𝗲𝗺𝗼𝘁𝗲 teamGain hands-on experience with Agile methologyStrengthened 𝗰𝗼𝗺𝗺𝘂𝗻𝗶𝗰𝗮𝘁𝗶𝗼𝗻 & 𝗰𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗶𝗼𝗻 skillsContributed to 𝗿𝗲𝗮𝗹-𝘄𝗼𝗿𝗹𝗱 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀 while learning from peers" },
    // { fieldName: "Web Developer", fieldValue: "India" },
  ]
}

const Experience = {
  icon: "/r.pdf",
  title: "My Experience",
  description: "Full stack developer",
  items: [
    {
      company: "Chingu.",
      // Position: "Full stack Developer",
      Project: "Voyage-56",
      duration: "2025-June",
      experience: "Collaborated in a 2 month remote Agile/Scrum team (Chingu Voyage 56). Built the core structure using Next.js, React, MongoDB, and contributed to features like an AI chatbot, Surgery Page, and Admin Dashboard. Strengthened teamwork, communication, and real-world project delivery skills"
    }
  ]
}

const Skills = {
  title: "My Skills",
  desc:"I am Full-Stack Software Developer-((MERN- Next.js * React * Node.js * MongoDB * Express.js))",
  // desc: "I specialize in building dynamic scalable and user friendly web applications using modern technologies My skillset covers both frontend and backend development ensuring seamless integration optimized performance and clean code practices I also leverage version control and collaborative tools to deliver high quality projects efficiently",
  items: [
    { icon: <FaReact className="text-4xl text-blue-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-4xl text-white" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-4xl text-teal-400" />, name: "Tailwind CSS" },
    { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3 className="text-4xl text-blue-600" />, name: "CSS3" },
    { icon: <FaJs className="text-4xl text-yellow-400" />, name: "JavaScript (ES6+)" },

    // Backend
    { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-4xl text-white" />, name: "Express.js" },
    { icon: <SiMongodb className="text-4xl text-green-400" />, name: "MongoDB" },
    { icon: <FaJs className="text-4xl text-yellow-400" />, name: "REST APIs" },

    // Tools
    { icon: <FaGit className="text-4xl text-red-500" />, name: "Git" },
    { icon: <FaGithub className="text-4xl text-white" />, name: "GitHub" },
    { icon: <FaProjectDiagram className="text-4xl text-purple-400" />, name: "Agile / Scrum" },
    { icon: <SiSupabase className="text-4xl text-blue-400" />, name: "Supabase" },
  ],
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col gap-12 justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          
          {/* Tab Buttons */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <div className="min-h-[70vh] w-full">

          

<TabsContent value="about" className="w-full text-center xl:text-left">
  <div className="flex flex-col gap-6 md:gap-8 bg-zinc-900 rounded-md w-full md:w-4/5 xl:w-3/5 h-auto px-4 md:px-6 xl:px-9 py-6">
    <h3 className="text-3xl md:text-4xl font-bold">{About.title}</h3>
    <h4 className="text-lg md:text-xl font-bold">{About.name}</h4>
    <p className="text-green-400 text-sm md:text-lg italic">
      {About.desc}
    </p>
    {/* Uncomment if you want to display info
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 max-w-full">
      {About.info.map((item, index) => (
        <li key={index} className="flex flex-col xl:flex-row items-center xl:items-start gap-2 xl:gap-4">
          <span className="text-white/60">{item.fieldName}</span>
          <span className="text-xl">{item.fieldValue}</span>
        </li>
      ))}
    </ul>
    */}
  </div>
</TabsContent>



            {/* Experience */}
          
            <TabsContent value="experience" className="w-full">
  <div className="flex flex-col gap-6 md:gap-8 text-center xl:text-left">
    <h3 className="text-3xl md:text-4xl font-bold">{Experience.title}</h3>
    <p className="max-w-full md:max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {Experience.description}
    </p>

    <ScrollArea className="h-[400px] md:h-[450px]">
      <ul className="grid grid-cols-1 gap-4 md:gap-6">
        {Experience.items.map((item, index) => (
          <li
            key={index}
            className="bg-[#232329] py-4 md:py-6 px-4 md:px-6 xl:px-10 rounded-xl flex flex-col gap-3 w-full md:w-4/5 xl:w-3/5 h-auto"
          >
            <h3 className="text-green-400 text-lg md:text-xl">{item.company}</h3>
            <h4 className="text-green-400 text-lg md:text-xl">{item.Project}</h4>
            <p className="text-sm md:text-lg leading-relaxed">{item.experience}</p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>


            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{Skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{Skills.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Skills.items.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div>{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-green-400 text-primary font-semibold">
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
