'use client'

import { useEffect } from 'react'
import Movinwords from 'movinwords'
import NextLink from "@/components/NextLink"
import Icon from './Icon'
import { IconName } from '@/types'

interface Framework {
  name: string
  id: IconName
  url: string
}

export default function Cta() {
  const frameworks: Framework[] = [
    {
      name: 'React',
      id: 'react',
      url: 'https://stackblitz.com/edit/movinwords-react'
    },
    {
      name: 'Vue',
      id: 'vue',
      url: 'https://stackblitz.com/edit/movinwords-vue'
    },
    {
      name: 'NextJs',
      id: 'next',
      url: 'https://stackblitz.com/edit/movinwords-nextjs'
    },
    {
      name: 'Nuxt',
      id: 'nuxt',
      url: 'https://stackblitz.com/edit/movinwords-nuxt'
    },
    {
      name: 'Svelte',
      id: 'svelte',
      url: 'https://stackblitz.com/edit/movinwords-svelte'
    },
    {
      name: 'Angular',
      id: 'angular',
      url: 'https://stackblitz.com/edit/movinwords-angular'
    }
  ]

  useEffect(() => {
    new Movinwords({
      el: '#frameworkHeading',
      transition: 'slideInBottom',
      intersectionStart: true,
    })
  }, [])

  return (
    <section
      id="frameworks"
      className="frameworks relative text-center flex flex-col items-center pt-120 pb-96 px-64 m:pt-64 m:px-40"
    >
      <p
        id="frameworkHeading"
        className="text-md text-blue-200 mt-24 mb-32"
      >
        Movinwords is available for your favorite Frameworks
      </p>

      <ul className="flex flex-wrap justify-center gap-16">
        {frameworks.map((framework, index) => (
          <li key={index} className="inline-block">
            <NextLink
              id={framework.id}
              href={framework.url}
              type="link"
              target="_blank"
            >
              <Icon
                name={framework.id}
                size="3xl"
              />
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
