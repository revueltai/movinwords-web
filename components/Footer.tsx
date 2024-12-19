import Image from 'next/image'
import Icon from '@/components/Icon'

export default function Footer() {
  return (
    <footer className="mx-32 flex items-center justify-between px-64 py-32 border-t border-t-blue-400_50 rounded-t-32 m:flex-col m:gap-32 m:px-32">
      <div className="flex items-center gap-24 m:flex-col m:text-center">
        <a href="https://iamnacho.com" target="_blank">
          <Image
            src="logoFooter.svg"
            alt="I Am Nacho"
            width="48"
            height="37"
          />
        </a>

        <p className="text-gray-400 leading-5 m:leading-6">
          Designed and Developed by <a href="https://iamnacho.com" target="_blank">iamnacho</a>.<br />
          Published under <a href="https://github.com/revueltai/movinwords/blob/main/LICENSE" target="_blank">MIT License</a>.
        </p>
      </div>

      <a href="https://github.com/revueltai/movinwords" target="_blank">
        <Icon
          name="github"
          size="lg"
          color="white"
        />
      </a>
    </footer>
  )
}
