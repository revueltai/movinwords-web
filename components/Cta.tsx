'use client'

import { useEffect } from 'react'
import Movinwords from 'movinwords'
import NextLink from "@/components/NextLink"

export default function Cta() {
  useEffect(() => {
    new Movinwords({
      el: '#ctaHeading',
      transition: 'slideInBottom',
      intersectionStart: true,
    })

    new Movinwords({
      el: '#ctaDescription',
      transition: 'slideInTop',
      initialDelay: 1000,
      intersectionStart: true,
    })
  }, [])

  return (
    <section className="cta relative text-center flex flex-col items-center my-96 pt-96 pb-0 px-64 border-t border-t-blue-200_50 rounded-t-64 m:pt-64 m:px-40">
      <h2
        id="ctaHeading"
        className="text-2xl font-bold m:text-xl m:font-bold"
      >
        Ready to animate?
      </h2>

      <p
        id="ctaDescription"
        className="text-md mt-24 mb-32"
      >
        Start animating your projects in minutes.
      </p>

      <NextLink
        id="ctaButton"
        href="https://github.com/revueltai/movinwords"
        target="_blank"
        bgColorHover="blue-600_50"
        borderColorHover="blue-200"
      >
        Get Started
      </NextLink>
    </section>
  )
}
