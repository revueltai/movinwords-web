import React, { useMemo } from 'react'
import { getCssClassesFromArray, getResponsiveCssClasses } from '@/utils/ui'
import { Color, IconName, IconSize } from '@/types'

interface Props {
  name: IconName
  size?: IconSize
  color?: Color
  type?: 'fill' | 'stroke'
  strokeWidth?: 0 | 0.5 | 1 | 2 | "0" | "0.5" | "1" | "2"
  iconset?: string
  className?: string
}

export default function Icon({
  name,
  size = 'md',
  color = 'white',
  type = 'fill',
  strokeWidth = 1,
  iconset = 'iconset.svg',
  className = '',
}: Props) {
  const iconSizes: Record<string, number> = {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
    '2xl': 48,
    '3xl': 64,
    '4xl': 80
  }

  const cssClasses = useMemo(() => {
    const sizeValue = iconSizes[size]
    const output = [
      getResponsiveCssClasses(sizeValue.toFixed(0), 'w'),
      getResponsiveCssClasses(sizeValue.toFixed(0), 'h'),
    ]

    if (type === 'stroke') {
      output.push(`stroke-${color} stroke-${strokeWidth} fill-transparent`)
    } else if (type === 'fill') {
      output.push(`fill-${color}`)
    }

    output.push(className)

    return getCssClassesFromArray(output)
  }, [size, color])

  return (
    <svg
      className={`inline-flex stroke- text-transparent ${cssClasses}`}
      aria-hidden="true"
      focusable="false"
    >
      <use xlinkHref={`${iconset}#${name}`} href={`${iconset}#${name}`} />
    </svg>
  )
}
