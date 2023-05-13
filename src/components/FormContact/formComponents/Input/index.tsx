import { useFormContext } from 'react-hook-form'
import { InputContainer } from './styles'
import { IInputProps } from './interfaces'

export const Input = ({ name, ...rest }: IInputProps) => {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <input id={name} {...register(name)} {...rest} />
    </InputContainer>
  )
}
