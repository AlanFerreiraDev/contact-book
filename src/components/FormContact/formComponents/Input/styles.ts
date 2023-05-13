import { styled } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  }
`
