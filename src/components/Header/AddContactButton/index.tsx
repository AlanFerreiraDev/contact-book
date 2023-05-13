import { useState } from 'react'
import { IAddContactButtonProps } from './interfaces'
import { AddContactButtonContainer } from './styles'
import { AddContactModal } from '../../ModalAddContact'
import { useMobileButton } from '../../../hooks/isMobile'

export const AddContactButton = ({
  icon,
  text,
  ...rest
}: IAddContactButtonProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }
  const { isMobile } = useMobileButton()

  return (
    <>
      <AddContactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />

      <AddContactButtonContainer {...rest} onClick={handleOpenModal}>
        {isMobile ? icon : text}
      </AddContactButtonContainer>
    </>
  )
}
