import { useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { ControllerContainer, InputMaskContainer } from './styles'
import { IPhoneNumberInputProps } from './interfaces'

export const PhoneNumberInput = ({ name, type }: IPhoneNumberInputProps) => {
  const { control, watch } = useFormContext()

  return (
    <ControllerContainer
      name={name}
      control={control}
      render={({ field }) => {
        const isTypeEmpty = watch(type) === ''
        const isTypeMobile = watch(type) === 'mobile'
        const typeOfMaskAndPlaceholder = isTypeMobile
          ? '(99) 99999-9999'
          : '(99) 9999-9999'

        return (
          <InputMaskContainer>
            <InputMask
              {...field}
              mask={typeOfMaskAndPlaceholder}
              placeholder={typeOfMaskAndPlaceholder}
              disabled={isTypeEmpty}
            />
          </InputMaskContainer>
        )
      }}
    />
  )
}
