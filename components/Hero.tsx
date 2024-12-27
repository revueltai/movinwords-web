'use client'

import { useEffect } from 'react'
import Movinwords from 'movinwords'
import NextLink from "@/components/NextLink"

export default function Hero() {
  useEffect(() => {
    new Movinwords({
      el: '#heading',
      transition: 'slideInBottom',
      highlight: {
        classname: 'text-blue-200',
        tag: 'strong',
        words: ['Life']
      }
    })

    new Movinwords({
      el: '#description',
      transition: 'slideInTop',
      initialDelay: 1000,
      highlight: {
        classname: 'text-blue-200',
        tag: 'span',
        words: ['(gzipped:', '3.2k)']
      }
    })
  }, [])

  return (
    <>
      <section
        id="hero"
        className="pt-112 pb-120 m:pt-96 m:pb-112"
      >
        <div className="flex flex-col items-center py-140 px-96 gap-48 text-white mt:px-48 mt:py-96">
          <div className="text-center flex flex-col gap-16">
            <h1
              id="heading"
              className="heroHeading text-white text-5xl mt:font-bold mt:text-2xl"
            >
              Bring Texts to Life
            </h1>

            <p
              id="description"
              className="text-md max-w-[660px] mx-auto"
            >
              Movinwords is a robust, lightweight JavaScript library (gzipped: 3.2k) designed <br />for animating sentences, words, and letters.
            </p>
          </div>

          <div id="cta" className='flex gap-16'>
            <NextLink
              href="https://github.com/revueltai/movinwords"
              target="_blank"
              bgColorHover="blue-600_50"
              borderColorHover="blue-200"
            >
              Get Started
            </NextLink>

            <NextLink
              href="#start"
              bgColor="transparent"
              bgColorHover="blue-600_50"
              borderColor="blue-200"
            >
              See Examples
            </NextLink>
          </div>
        </div>
      </section>
    </>
  )
}
