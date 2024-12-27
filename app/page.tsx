'use client'

import { useEffect } from 'react'
import Movinblocks from 'movinblocks'
import 'movinblocks/styles'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Cta from '@/components/Cta'

export default function App() {
  useEffect(() => {
    new Movinblocks()
      .setTimeline(['header', 'hero', 'cta', 'content'])
      .setAnimation(['revealInTop', 'fadeIn', 'slideInTop', 'fadeIn'])
      .setDuration([1000, 1000, 800, 2000])
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
            <Cta />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}
