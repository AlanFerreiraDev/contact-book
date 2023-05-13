import { styled } from 'styled-components'

interface IButtonInsertProps {
  variant: 'add' | 'remove'
  position?: 'right' | 'center'
}

export const FormContactContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
`

export const ButtonInsert = styled.button<IButtonInsertProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) =>
    position === 'right' ? 'flex-end' : 'center'};

  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme, variant }) =>
    variant === 'add' ? theme['green-300'] : theme['red-300']};
`

export const PhoneFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  gap: 0.75rem;

  @media (max-width: 512px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const PhoneNumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 0.5rem;
`

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`

export const ErrorMessage = styled.span`
  font: normal 0.75rem 'Roboto', sans-serif;
  line-height: 1.2;
  color: ${({ theme }) => theme['red-300']};
`

export const Title = styled.label`
  font: normal 1rem 'Roboto', sans-serif;
  line-height: 1.2;
  color: ${({ theme }) => theme['blue-500']};

  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
