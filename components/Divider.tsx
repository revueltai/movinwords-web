interface Props {
  text: string
}

export default function Divider({ text }: Props) {
  return (
    <div className="relative text-center">
      <h2 className="relative inline-block z-10 px-24 py-8 rounded-full text-md bg-indigo-200 text-gray-200 font-bold self-center select-none">
        {text}
      </h2>

      <div className="absolute z-0 top-1/2 w-full h-1 bg-indigo-200" />
    </div>
  )
}
