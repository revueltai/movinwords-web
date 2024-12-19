import { MouseEvent } from 'react'
import { Color, LinkSize } from "@/types"
import Link from "next/link"
import { useMemo } from "react"
import { getCssClassesFromArray } from '@/utils/ui'

interface Props {
  children: string | JSX.Element
  className?: string
  href?: string
  id?: string
  type?: 'link' | 'linkButton' | 'button'
  target?: '_blank' | '_self' | '_top' | '_parent' | ''
  size?: LinkSize
  color?: Color
  colorHover?: Color
  borderColor?: Color
  borderColorHover?: Color
  bgColor?: Color
  bgColorHover?: Color
  onClick?: (event: MouseEvent) => void
}

export default function NextLink({
  children,
  className = '',
  href = '',
  id = '',
  type = 'linkButton',
  target = '',
  size = 'md',
  color = 'white',
  colorHover = 'white',
  borderColor = 'blue-400',
  borderColorHover = 'blue-200',
  bgColor = 'blue-400',
  bgColorHover = 'blue-200',
  onClick = () => { }
}: Props) {
  const sanitizedTarget = useMemo(() => {
    return href.startsWith('#')
      ? ''
      : target
  }, [target])

  const cssClasses = useMemo(() => {
    const base = 'u-t uppercase rounded-full text-center flex items-center justify-center self-center font-bold outline-none'
    const sizes = getSize()
    const colors = [`text-${color}`]

    if (type !== 'link') {
      colors.push(`border-${borderColor}`,
        `bg-${bgColor}`,
        `hover:border-${borderColorHover}`,
        `hover:bg-${bgColorHover}`,
        `hover:text-${colorHover}`
      )

      if (borderColor !== 'transparent') {
        colors.push('border')
      }
    }

    return getCssClassesFromArray([
      base,
      sizes,
      ...colors,
      className
    ])
  }, [bgColor, bgColorHover, color, colorHover])

  function getSize() {
    const output: string[] = []

    if (type !== 'link') {
      switch (size) {
        case 'sm':
          output.push('py-8 px-12')
          break

        case 'md':
          output.push('py-16 px-24')
          break

        case 'lg':
          output.push('py-8 px-24')
          break
      }
    }

    switch (size) {
      case 'sm':
        output.push('text-sm')
        break

      case 'md':
        output.push('text-base')
        break

      case 'lg':
        output.push('text-md')
        break
    }

    return getCssClassesFromArray(output)
  }

  function handleClick(event: MouseEvent) {
    if (!href) {
      event.preventDefault()
    }

    onClick(event)
  }

  return (
    <div className="inline-flex w-max">
      {type === 'button' && (
        <button
          id={id}
          name={id}
          type="button"
          className={cssClasses}
          onClick={handleClick}
        >
          {children}
        </button>
      )}

      {['link', 'linkButton'].includes(type) && (
        <Link
          href={href}
          target={sanitizedTarget}
          className={cssClasses}
          onClick={handleClick}
        >
          {children}
        </Link>
      )}
    </div>
  )
}
