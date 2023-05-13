import { SelectHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { SelectWrapper } from './styles'
import { SelectContainer } from './styles'

type TOptions = {
  label: string
  value: string
  name: string
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  options: TOptions[]
}

export const Select = ({ name, options, ...rest }: ISelectProps) => {
  const { register } = useFormContext()

  return (
    <SelectWrapper>
      <SelectContainer id={name} {...register(name)} {...rest}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </SelectContainer>
    </SelectWrapper>
  )
}
