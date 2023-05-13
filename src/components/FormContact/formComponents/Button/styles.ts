import { styled } from 'styled-components'

export const SubmitButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  height: 3rem;
  border: 0;
  background: ${({ theme }) => theme['blue-300']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transition: background-color 0.3s;
  }

  svg {
    &:hover {
      opacity: 0.6;
      transition: background-color 0.3s;
    }
  }

  @media (max-width: 512px) {
    border-radius: 50%;
    padding: 0;
    background: transparent;

    &:hover {
      background: transparent;
    }
  }
`
