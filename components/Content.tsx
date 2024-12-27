import Example from '@/components/Example'
import { MW_EXAMPLES } from '@/configs/constants'
import { ModalProvider } from '@/context/ModalContext'
import Modal from '@/components/Modal'

export default function Content() {
  return (
    <ModalProvider>
      <div className="flex flex-col gap-64 px-32 -mt-112">
        <section
          id="content"
          className="content px-32 py-24 flex flex-col gap-96"
        >
          {MW_EXAMPLES.map((example, key) => (
            <Example
              key={key}
              id={example.id}
              sentence={example.sentence}
              label={example.label}
              fields={example.fields}
              predefinedOptions={example.predefinedOptions}
              showLog={example.showLog}
            />
          ))}
        </section>
      </div>

      <Modal />
    </ModalProvider>
  )
}
