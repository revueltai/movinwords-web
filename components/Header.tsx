import Image from 'next/image'
import Icon from '@/components/Icon'

export default function Header() {
  return (
    <>
      <header className="fixed backdrop-blur-sm z-50 bg-black_50 w-full px-64 py-32 border-b border-b-blue-400_10 m:px-32">
        <div className="mx-auto flex items-center justify-between max-w-1400">
          <Image src="logo.svg" alt="Movinwords" className="h-48 m:h-24" />

          <div className="flex items-center gap-24 m:gap-12">
            <a href="https://github.com/revueltai/movinwords" target="_blank">
              <Image
                src="https://img.shields.io/badge/license-MIT-blue.svg"
                className="m:h-12"
                alt="MIT Licence"
              />
            </a>

            <a href="https://github.com/revueltai/movinwords" target="_blank">
              <Image
                src="https://img.shields.io/npm/v/movinwords"
                className="m:h-12"
                alt=""
              />
            </a>

            <a href="https://github.com/revueltai/movinwords" target="_blank">
              <Icon
                name="github"
                size="lg"
                color="white"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
