

"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from "react-icons/fi"
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section className="relative w-full py-16 xl:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-12">

          <div className="flex-1 text-center xl:text-left px-6 md:px-8 lg:px-12">
  <span className="text-xl md:text-2xl text-green-400 font-medium uppercase tracking-wide">
    Software Developer
  </span>
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-1 mb-3 leading-tight">
    Hello, I'm <span className="text-green-400">Tulasi Shukla</span>
  </h1>
  <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto xl:mx-0 mb-5 leading-relaxed">
    Passionate about building modern web applications with clean, scalable code 
    and a focus on performance, accessibility, and user experience.
  </p>

  {/* BUTTON + SOCIAL */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 justify-center xl:justify-start">

<Button
  as="a"
  href="/r.pdf"  
  download         
  variant="outline"
  size="lg"
  className="uppercase flex items-center gap-2 hover:bg-green-400 rounded-full border-green-400 text-green-400 hover:border-green-400 hover:text-primary transition-all duration-500"
>
  <span>Download CV</span>
  <FiDownload className="text-xl" />
</Button>

    <Social
      containerStyles="flex gap-4 sm:gap-6"
      iconStyle="w-10 h-10 sm:w-11 sm:h-11 border border-green-400 rounded-full flex justify-center items-center text-green-400 text-base transition-all duration-500 hover:bg-green-400 hover:text-primary"
    />
  </div>
</div>


          {/* RIGHT PHOTO */}
          <div className="flex-1 flex justify-center xl:justify-end px-2 md:px-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 xl:mt-16">
        <Stats />
      </div>
    </section>
  )
}

export default Home
