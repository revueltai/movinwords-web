import type { Config } from "tailwindcss"
import defaultTheme from 'tailwindcss/defaultTheme'
import { BREAKPOINTS } from './configs/constants'

const opacities = [50]
const colorWeights = [200, 400, 600]
const colorNames = ['black', 'white', 'gray', 'blue', 'indigo', 'purple', 'green', 'red']
const colorsWithWeights = ['gray', 'blue', 'indigo', 'purple', 'green', 'red']
const colorsWithoutWeights = ['black', 'white']

const spacing = {
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
  10: '10px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  72: '72px',
  80: '80px',
  96: '96px',
  112: '112px',
  120: '120px',
  140: '140px',
  1400: '1400px'
}

const fontFamily = {
  sans: [
    'Montserrat',
    ...defaultTheme.fontFamily.sans
  ]
}

const fontSize: any = {
  '7xl': ['var(--fs-7xl)', {
    fontWeight: 'var(--fw-800)',
    lineHeight: 'var(--lh-7xl)'
  }],
  '6xl': ['var(--fs-6xl)', {
    fontWeight: 'var(--fw-800)',
    lineHeight: 'var(--lh-6xl)'
  }],
  '5xl': ['var(--fs-5xl)', {
    fontWeight: 'var(--fw-800)',
    lineHeight: 'var(--lh-5xl)'
  }],
  '4xl': ['var(--fs-4xl)', {
    fontWeight: 'var(--fw-700)',
    lineHeight: 'var(--lh-4xl)'
  }],
  '3xl': ['var(--fs-3xl)', {
    fontWeight: 'var(--fw-700)',
    lineHeight: 'var(--lh-3xl)'
  }],
  '2xl': ['var(--fs-2xl)', {
    fontWeight: 'var(--fw-600)',
    lineHeight: 'var(--lh-2xl)'
  }],
  'xl': ['var(--fs-xl)', {
    fontWeight: 'var(--fw-600)',
    lineHeight: 'var(--lh-xl)'
  }],
  'lg': ['var(--fs-lg)', {
    fontWeight: 'var(--fw-400)',
    lineHeight: 'var(--lh-lg)'
  }],
  'md': ['var(--fs-md)', {
    fontWeight: 'var(--fw-400)',
    lineHeight: 'var(--lh-lg)'
  }],
  'base': ['var(--fs-base)', {
    fontWeight: 'var(--fw-400)',
    lineHeight: 'var(--lh-base)'
  }],
  'sm': ['var(--fs-sm)', {
    fontWeight: 'var(--fw-400)',
    lineHeight: 'var(--lh-xs)'
  }],
  'xs': ['var(--fs-xs)', {
    fontWeight: 'var(--fw-400)',
    lineHeight: 'var(--lh-xs)'
  }]
}

const screens = {
  m: { max: '639px' },               // Mobile
  t: { min: '640px', max: '959px' }, // Tablet
  d: '960px',                        // Desktop
  mt: { max: '959px' },              // Mobile and Tablet
  td: '640px'                        // Tablet and Desktop
}

/* -------------- */

const getColors = () => {
  const output: Record<string, string> = {}

  for (const name of colorsWithoutWeights) {
    output[name] = `var(--c-${name})`

    for (const opacity of opacities) {
      const nameOpacity = `${name}_${opacity}`
      output[nameOpacity] = `var(--c-${nameOpacity})`
    }
  }

  for (const name of colorNames) {
    for (const weight of colorWeights) {
      if (!colorsWithoutWeights.includes(name)) {
        const cssClassName = `${name}-${weight}`
        output[cssClassName] = `var(--c-${cssClassName})`

        for (const opacity of opacities) {
          const nameOpacity = `${cssClassName}_${opacity}`
          output[nameOpacity] = `var(--c-${nameOpacity})`
        }
      }
    }
  }

  return output
}

const getSafelist = () => {
  const output: any[] = ['bg-cover', 'flex-row-reverse', 'flex-col-reverse']

  const getColors = () => {
    const variants = ['hover']
    const propNames = ['stroke', 'text', 'bg', 'border', 'ring', 'fill'].join('|')

    const rule1 = `(${propNames})-(${colorsWithoutWeights.join('|')})`
    const rule2 = `${rule1}_(${opacities.join('|')})`
    const rule3 = `(${propNames})-(${colorsWithWeights.join('|')})-(${colorWeights.join('|')})`
    const rule4 = `${rule3}_(${opacities.join('|')})`

    output.push({
      pattern: new RegExp(rule1, 'g'),
      variants
    })

    output.push({
      pattern: new RegExp(rule2, 'g'),
      variants
    })

    output.push({
      pattern: new RegExp(rule3, 'g'),
      variants
    })

    output.push({
      pattern: new RegExp(rule4, 'g'),
      variants
    })
  }

  const getSpacings = () => {
    const propNames = ['w', 'h', 'rounded'].join('|')

    output.push({
      pattern: new RegExp(`(${propNames})-(${Object.keys(spacing).join('|')})`, 'g'),
      variants: BREAKPOINTS
    })

    output.push({
      pattern: new RegExp(`(${propNames})-(1/2|1/3)`, 'g'),
      variants: BREAKPOINTS
    })

    output.push({
      pattern: new RegExp(`(flex)-(row|col)`, 'g'),
      variants: BREAKPOINTS
    })
  }

  const getFonts = () => {
    const fontWeights = ['normal', 'medium', 'semibold', 'bold', 'extrabold']

    output.push({
      pattern: new RegExp(`(font)-(${fontWeights.join('|')})`, 'g'),
      variants: BREAKPOINTS
    })

    output.push({
      pattern: new RegExp(`(text)-(${Object.keys(fontSize).join('|')})`, 'g'),
      variants: BREAKPOINTS
    })
  }

  getFonts()
  getSpacings()
  getColors()

  return [...new Set(output)]
}

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: getSafelist(),
  theme: {
    extend: {
      spacing,
      borderRadius: spacing,
      fontFamily,
      fontSize,
      colors: getColors(),
      screens
    }
  },
  plugins: [],
} satisfies Config
