import { ISubmitButtonProps } from './interfaces'
import { SubmitButtonContainer } from './styles'

export const SubmitButton = ({ children, ...rest }: ISubmitButtonProps) => {
  return (
    <SubmitButtonContainer type="submit" {...rest}>
      {children}
    </SubmitButtonContainer>
  )
}
