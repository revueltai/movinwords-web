export type Breakpoint = 'm' | 't' | 'd' | 'mt' | 'td'

export type FontSize = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

export type Spacing = 'none' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

export type Color = 'transparent' | 'white' | 'black' | 'gray-200' | 'gray-400' | 'gray-600' | 'blue-200' | 'blue-400' | 'blue-600' | 'indigo-200' | 'indigo-400' | 'indigo-600' | 'purple-200' | 'purple-400' | 'purple-600' | 'green-200' | 'green-400' | 'green-600' | 'red-200' | 'red-400' | 'red-600' | 'gray-200_50' | 'gray-400_50' | 'gray-600_50' | 'blue-200_50' | 'blue-400_50' | 'blue-600_50' | 'indigo-200_50' | 'indigo-400_50' | 'indigo-600_50' | 'purple-200_50' | 'purple-400_50' | 'purple-600_50' | 'green-200_50' | 'green-400_50' | 'green-600_50' | 'red-200_50' | 'red-400_50' | 'red-600_50'

export type IconName = 'checkmark' | 'copy' | 'plus' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right' | 'cross' | 'code' | 'github'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

export interface BgImageConfig {
  repeat: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | 'repeat-round' | 'repeat-space'
  size: 'auto' | 'cover' | 'contain'
  position: 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top'
  filters?: StoryblokFilters
}

export type LinkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type FormFieldType = 'text' | 'checkbox' | 'select' | 'button'

export interface FormField {
  type: FormFieldType
  id: string
  label: string
  placeholder?: string
  initialValue?: string | number | boolean | null
  options?: string[] | number[]
  props?: object
}

export interface Example {
  id: string
  sentence: string
  fields: FormField[]
  predefinedOptions?: object
  label?: string
  showLog?: boolean
}

