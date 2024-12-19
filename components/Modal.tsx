'use client'

import { useModal } from '@/context/ModalContext'
import { useRef, useEffect, useState } from 'react'
import NextLink from './NextLink'
import Icon from './Icon'
import { Color, IconName } from '@/types'

interface CopyCta {
  name: IconName
  color?: Color
  colorHover?: Color
}

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const codeRef = useRef<HTMLDialogElement>(null)
  const { isOpen, closeModal, modalContent } = useModal()
  const [iconCopyCta, setCopyCta] = useState<CopyCta>({
    name: 'copy',
    color: 'blue-400',
    colorHover: 'blue-200'
  })


  function handleCopy() {
    if (dialogRef.current && codeRef.current) {
      const text = codeRef.current.innerText
      navigator.clipboard.writeText(text)
      setCopyCta({
        name: 'checkmark',
        color: 'green-400',
        colorHover: 'green-200',
      })
    }
  }

  function handleClose() {
    closeModal()
    setCopyCta({
      name: 'copy',
      color: 'blue-400',
      colorHover: 'blue-200',
    })
  }

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal()
      } else {
        dialogRef.current.close()
      }
    }
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      className="u-t opacity-0 overflow-hidden max-w-[800px] text-white rounded-16 bg-indigo-400 outline-none mt:min-w-[350px] d:min-w-[600px]"
    >
      <div className="modal relative min-h-112 mx-24 my-16 overflow-x-auto overflow-y-hidden">
        <NextLink
          size="sm"
          type="link"
          className="absolute top-12 right-0"
          onClick={handleClose}
        >
          <Icon
            name="cross"
            color="white"
            type="stroke"
          />
        </NextLink>

        <pre className='select-none leading-5 text-sm text-blue-200'><code ref={codeRef}>{modalContent}</code></pre>

        <NextLink
          size="lg"
          type="linkButton"
          className="absolute right-0 bottom-16"
          bgColor={iconCopyCta.color}
          bgColorHover={iconCopyCta.colorHover}
          borderColor={iconCopyCta.color}
          borderColorHover={iconCopyCta.colorHover}
          onClick={handleCopy}
        >
          <Icon
            name={iconCopyCta.name}
            size="lg"
            color="white"
            type="stroke"
          />
        </NextLink>
      </div>
    </dialog>
  )
}
