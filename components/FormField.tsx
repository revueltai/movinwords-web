import FormLabel from '@/components/FormLabel'
import { FormFieldType } from '@/types'
import NextLink from './NextLink'

interface Props {
  type: FormFieldType
  id: string
  label: string
  value: any
  placeholder?: string
  options?: string[] | number[]
  props?: any
  className?: string
  onChange?: any
  onClick?: any
}

export default function Content({
  type,
  id,
  label,
  value,
  placeholder = '',
  options = [],
  className = '',
  props = {},
  onChange,
  onClick,
}: Props) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement>) {
    const newValue = event.target.value
    onChange(id, newValue)
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newChecked = event.target.checked
    onChange(id, newChecked)
  }

  function handleClick() {
    onClick()
  }

  return (
    <div className="flex flex-col items-start gap-8">
      {type === 'text' && (
        <>
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <input
            id={id}
            name={id}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            className={className}
          />
        </>
      )}

      {type === 'button' && (
        <>
          <NextLink
            id={id}
            type="button"
            color="white"
            colorHover="white"
            bgColor="blue-600"
            bgColorHover="blue-400"
            borderColor="blue-600"
            borderColorHover="blue-400"
            className={className}
            onClick={handleClick}
            {...props}
          >
            {label}
          </NextLink>
        </>
      )}

      {type === 'select' && (
        <>
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <select
            id={id}
            name={id}
            value={value}
            className={className}
            onChange={handleInputChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}

      {type === 'checkbox' && (
        <div className="flex justify-start gap-16 py-8 pr-16 cursor-pointer">
          <input
            id={id}
            name={id}
            type="checkbox"
            checked={value}
            className={className}
            onChange={handleCheckboxChange}
          />

          <label htmlFor={id}>{label}</label>
        </div>
      )}
    </div>
  )
}
