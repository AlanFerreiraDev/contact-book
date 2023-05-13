import Modal from 'react-modal'
import { styled } from 'styled-components'

export const ContainerModal = styled(Modal)`
  .react-modal-container {
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`

export const ContentModal = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  > button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`

export const Title = styled.label`
  font: bold 1.5rem 'Roboto', sans-serif;
  line-height: 1.2;
  color: ${({ theme }) => theme['blue-500']};
  margin-bottom: 1rem;
`

export const ModalStyles: ReactModal.Styles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'fixed',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    width: '100%',
    height: '70%',
    maxWidth: '480px',
    minWidth: '185px',
    position: 'initial',
    top: '2.5rem',
    left: '2.5rem',
    right: '2.5rem',
    bottom: '2.5rem',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'auto',
    borderRadius: '10px',
    outline: 'none',
    padding: '20px 30px',
  },
}
