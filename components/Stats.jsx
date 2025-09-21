
"use client"

import React from 'react'
import CountUp from 'react-countup'

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 10, text: "Projects Completed" },
  { num: 10, text: "Technology mastered" },
  { num: 7, text: "Code Commits" },
]

const Stats = () => {
  return (
    <section className="px-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none px-12">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex items-center justify-center xl:justify-start gap-4"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold  "
                />
                <p
                  className={`${
                    item.text.length < 15
                      ? "max-w-[120px]"
                      : "max-w-[180px]"
                  } leading-snug text-white/80 `}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
