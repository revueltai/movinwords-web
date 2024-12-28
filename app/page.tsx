'use client'

import { useEffect } from 'react'
import Movinblocks from 'movinblocks'
import 'movinblocks/styles'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Cta from '@/components/Cta'
import Frameworks from '@/components/Frameworks'

export default function App() {
  useEffect(() => {
    new Movinblocks()
      .setTimeline([
        'header',
        'hero',
        'cta',
        'content',
        'frameworks',
        'react',
        'vue',
        'next',
        'nuxt',
        'svelte',
        'angular',
        'ctaBottom',
        'footer'
      ])
      .setAnimation([
        'revealInTop',
        'fadeIn',
        'slideInTop',
        'fadeIn',
        'fadeIn',
        'slideInBottom',
        'slideInBottom',
        'slideInBottom',
        'slideInBottom',
        'slideInBottom',
        'slideInBottom',
        'revealInBottom',
        'revealInBottom',
      ])
      .setDuration([1000, 1000, 800, 2000, 800, 600, 600, 600, 600, 600, 600, 800, 800])
      .setOverlap(400)
      .start()
  }, [])

  return (
    <div>
      <Header />

      <div className="flex flex-col gap-64 mx-auto max-w-1400">
        <main>
          <Hero />

          <div>
            <Content />
            <Frameworks />
            <Cta />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}
