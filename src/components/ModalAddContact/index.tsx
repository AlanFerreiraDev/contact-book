import { IAddContactModalProps } from './interfaces'
import { X as CloseIcon } from '@phosphor-icons/react'
import { ContainerModal, ContentModal, ModalStyles, Title } from './styles'
import { ContactForm } from '../FormContact'

export const AddContactModal = ({
  isOpen,
  onRequestClose,
}: IAddContactModalProps) => {
  return (
    <ContainerModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={ModalStyles}
    >
      <ContentModal>
        <Title>Adicionar Contato</Title>
        <button onClick={onRequestClose}>
          {<CloseIcon size={32} color="#0A7EE3" />}
        </button>
      </ContentModal>
      <ContactForm onRequestClose={onRequestClose} />
    </ContainerModal>
  )
}
