
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Linkdin Id",
    desc: "https://www.linkedin.com/in/tulsishukla/"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "tulsishuklag@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    desc: "Uttar Pradesh,Lucknow"
  },
]

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
      }}
      className="py-16 px-4 md:px-10 bg-gradient-to-br from-[#1a1a1f] via-[#222229] to-[#1a1a1f]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-400">
            Get In Touch
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project idea, collaboration opportunity, or just want to say hi?  
            Drop a message and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3 + index * 0.2, duration: 0.6 },
                  }}
                  className="flex items-center gap-6 p-5 rounded-2xl bg-[#26262f] shadow-lg hover:shadow-green-400/20 hover:bg-[#2d2d38] transition-all"
                >
                  <div className="w-[65px] h-[65px] flex justify-center items-center rounded-full bg-green-400/10 text-green-400 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-xl font-semibold text-white">
                      {item.desc}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="xl:w-[60%]">
            <form className="flex flex-col gap-6 p-8 sm:p-10 bg-[#26262f] rounded-2xl shadow-xl border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-400">
                Let’s work together
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First name" className="bg-[#1c1c22] border-none focus:ring-2 focus:ring-green-400" />
                <Input type="text" placeholder="Last name" className="bg-[#1c1c22] border-none focus:ring-2 focus:ring-green-400" />
                <Input type="email" placeholder="Email" className="bg-[#1c1c22] border-none focus:ring-2 focus:ring-green-400" />
                <Input type="tel" placeholder="Phone number" className="bg-[#1c1c22] border-none focus:ring-2 focus:ring-green-400" />
              </div>

              <Select>
                <SelectTrigger className="w-full bg-[#1c1c22] border-none focus:ring-2 focus:ring-green-400">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="frontend">Frontend Development</SelectItem>
                    <SelectItem value="open-source">Open Source Collaboration</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="min-h-[150px] bg-[#1c1c22] border-none focus:ring-2 focus:ring-green-400"
                placeholder="Type your message here..."
              />

              <Button
                size="lg"
                className="w-full sm:w-[200px] bg-green-400 hover:bg-green-500 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
