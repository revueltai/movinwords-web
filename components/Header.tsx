import Image from 'next/image'
import Icon from '@/components/Icon'

export default function Header() {
  return (
    <>
      <header className="fixed backdrop-blur-sm z-50 bg-black_50 w-full px-64 py-32 border-b border-b-blue-400_10 m:px-32">
        <div className="mx-auto flex items-center justify-between max-w-1400">
          <Image
            src="logo.svg"
            className="h-48 m:h-24"
            alt="Movinwords"
            width="184"
            height="48"
          />

          <div className="flex items-center gap-24 m:gap-12">
            <a href="https://github.com/revueltai/movinwords" target="_blank">
              <Image
                src="https://img.shields.io/badge/license-MIT-blue.svg"
                className="m:h-12"
                alt="MIT Licence"
                width="80"
                height="20"
              />
            </a>

            <a href="https://github.com/revueltai/movinwords" target="_blank">
              <Image
                src="https://img.shields.io/npm/v/movinwords.svg"
                className="m:h-12"
                alt=""
                width="80"
                height="20"
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
