interface Props {
  children: React.ReactNode
  htmlFor: string
}

export default function FormLabel({ children, htmlFor }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-purple-200 text-sm cursor-pointer"
    >
      {children}
    </label>
  )
}
