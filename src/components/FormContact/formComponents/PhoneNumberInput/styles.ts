import { styled } from 'styled-components'
import { Controller } from 'react-hook-form'

export const ControllerContainer = styled(Controller)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputMaskContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme['blue-300']};
    padding: 0 10px;

    color: ${({ theme }) => theme['gray-500']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-300']};
    }

    &:disabled {
      background: ${({ theme }) => theme['gray-100']};
      cursor: not-allowed;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > input {
    color: red;
  }
`
