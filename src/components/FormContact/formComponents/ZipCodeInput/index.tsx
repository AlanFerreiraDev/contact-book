import { useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { ControllerContainer, InputMaskContainer } from './styles'
import { IZipCodeInputProps } from './interfaces'

export const ZipCodeInput = ({ name }: IZipCodeInputProps) => {
  const { control } = useFormContext()

  return (
    <ControllerContainer
      name={name}
      control={control}
      render={({ field }) => {
        const zipCodeMask = '99999-999'

        return (
          <InputMaskContainer>
            <InputMask
              {...field}
              mask={zipCodeMask}
              placeholder={zipCodeMask}
              onChange={(e) => {
                field.onChange(e.target.value) // Atualiza manualmente o valor
              }}
            />
          </InputMaskContainer>
        )
      }}
    />
  )
}
