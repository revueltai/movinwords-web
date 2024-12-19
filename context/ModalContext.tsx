'use client'

import { createContext, useContext, useState } from 'react'

interface ModalContextProps {
  isOpen: boolean
  modalContent: string
  openModal: (modalContent: string) => void
  closeModal: () => void
}

interface Props {
  children: React.ReactNode
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

/**
 * Provides the modal context to its children.
 *
 * @param {Props} props The props of the component.
 * @param {React.ReactNode} props.children The child components to render within the provider.
 * @returns {JSX.Element} The ModalProvider component.
 */
export function ModalProvider({ children }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  function openModal(modalContent: string) {
    setModalContent(modalContent)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent }}>
      {children}
    </ModalContext.Provider>
  )
}

/**
 * Hook that provides access to the modal context.
 *
 * @throws Will throw an error if used outside of a ModalProvider.
 * @returns {ModalContextProps} The context value for the modal.
 */
export function useModal(): ModalContextProps {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}


