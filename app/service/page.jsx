
"use client"
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    desc: "I build responsive and dynamic web applications using modern technologies like React, Node.js, and Tailwind CSS, delivering seamless user experiences.",
  },
  {
    num: "02",
    title: "Frontend Development",
    desc: "Creating interactive and visually appealing interfaces that engage users and ensure intuitive navigation across all devices.",
  },
]

const Services = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-8 xl:py-0">
      <div className="container mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-[60px] max-w-6xl w-full"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group bg-[#1e1e23] p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Number + Link */}
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hover:text-green-400 transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href="#"
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] bg-white hover:-rotate-45 hover:bg-green-400 border border-white/20 rounded-full flex justify-center items-center text-white/20 text-xl sm:text-2xl lg:text-3xl hover:border-green-400 hover:text-green-400 transition-all duration-500"
                >
                  <BsArrowDownRight className="text-primary" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-snug text-white group-hover:text-accent hover:text-green-400 transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">{service.desc}</p>

              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
