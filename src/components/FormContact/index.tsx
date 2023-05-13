import {
  useForm,
  useFieldArray,
  FormProvider,
  Controller,
} from 'react-hook-form'

import { IMaskInput } from 'react-imask'

import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify'
import { IContactFormProps, IFormInput, TOptions } from './interfaces'
import { ContactSchema } from './validations'
import {
  ButtonInsert,
  ErrorMessage,
  FormContactContainer,
  PhoneNumberInputContainer,
  Title,
  WrapperContainer,
} from './styles'
import 'react-toastify/dist/ReactToastify.css'

import { PlusCircle, XCircle } from '@phosphor-icons/react'

import { Separator } from '..'
import { Form } from './formComponents'
import InputMask from 'react-input-mask'

export const ContactForm = ({ onRequestClose }: IContactFormProps) => {
  const createUserForm = useForm<IFormInput>({
    resolver: yupResolver(ContactSchema),
  })

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = createUserForm

  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control,
    name: 'phoneNumbers',
  })

  const {
    fields: addressFields,
    append: appendAddress,
    remove: removeAddress,
  } = useFieldArray({
    control,
    name: 'addresses',
  })

  const selectData: TOptions[] = [
    { label: 'Escolha um Tipo de Telefone', value: '', name: '' },
    { label: 'Residencial', value: 'home', name: 'home' },
    { label: 'Celular', value: 'mobile', name: 'mobile' },
    { label: 'Comercial', value: 'commercial', name: 'commercial' },
  ]

  const onSubmit = (data: IFormInput) => {
    console.log(data)

    toast.success('Contato adicionado com sucesso!')

    setTimeout(() => {
      onRequestClose()
    }, 6000 /* 6 segundos*/)
  }

  return (
    <FormProvider {...createUserForm}>
      <FormContactContainer onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />
        <WrapperContainer>
          <Form.Field>
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Input name="name" type="text" placeholder="Nome" />
            <Form.ErrorMessage field="name" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="surname">Sobrenome</Form.Label>
            <Form.Input name="surname" type="text" placeholder="Sobrenome" />
            <Form.ErrorMessage field="surname" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input
              name="email"
              type="text"
              placeholder="email@email.com"
            />
            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Separator />
        </WrapperContainer>
        <WrapperContainer>
          <Form.Field>
            <Form.Label htmlFor="company">Empresa</Form.Label>
            <Form.Input name="company" type="text" placeholder="Empresa" />
            <Form.ErrorMessage field="company" />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="office">Cargo</Form.Label>
            <Form.Input name="office" type="text" placeholder="Cargo" />
            <Form.ErrorMessage field="office" />
          </Form.Field>

          <Separator />
        </WrapperContainer>

        <Form.Field>
          <Form.Label>
            Telefones
            <ButtonInsert
              variant="add"
              type="button"
              onClick={() => appendPhone({ number: '', type: '' })}
            >
              <PlusCircle size={24} />
            </ButtonInsert>
          </Form.Label>

          {phoneFields.map((field, index) => {
            const fieldNamePhoneNumbers = `phoneNumbers.${index}.number`
            const fieldTypePhoneNumbers = `phoneNumbers.${index}.type`
            const isTypeEmpty = watch(`phoneNumbers.${index}.type`) === ''

            return (
              <Form.Field key={field.id}>
                <Title>{`Telefone ${index + 1}`}</Title>

                <div>
                  <Form.Select
                    name={`phoneNumbers.${index}.type`}
                    options={selectData}
                  />

                  {isTypeEmpty && (
                    <ErrorMessage>Insira o tipo de telefone</ErrorMessage>
                  )}

                  <PhoneNumberInputContainer>
                    <Form.PhoneNumberInput
                      name={fieldNamePhoneNumbers}
                      type={fieldTypePhoneNumbers}
                      key={fieldNamePhoneNumbers}
                    />

                    <ButtonInsert
                      variant="remove"
                      type="button"
                      onClick={() => removePhone(index)}
                    >
                      <XCircle size={24} />
                    </ButtonInsert>
                  </PhoneNumberInputContainer>
                </div>

                {errors.phoneNumbers?.[index]?.number && (
                  <ErrorMessage>
                    {errors.phoneNumbers?.[index]?.number?.message}
                  </ErrorMessage>
                )}
                <Separator variant="invisible" />
              </Form.Field>
            )
          })}
        </Form.Field>

        <Separator />

        <Form.Field>
          <Form.Label>
            Endereços
            <ButtonInsert
              variant="add"
              type="button"
              onClick={() =>
                appendAddress({
                  address: '',
                  number: '',
                  complement: '',
                  neighborhood: '',
                  city: '',
                  state: '',
                  zipCode: '',
                })
              }
            >
              <PlusCircle size={24} />
            </ButtonInsert>
          </Form.Label>

          {addressFields.map((field, index) => {
            const fieldNameZipCode = `addresses.${index}.zipCode`
            const fieldNameAddress = `addresses.${index}.address`
            const fieldNameNumber = `addresses.${index}.number`
            const fieldNameComplement = `addresses.${index}.complement`
            const fieldNameNeighborhood = `addresses.${index}.neighborhood`
            const fieldNameCity = `addresses.${index}.city`
            const fieldNameState = `addresses.${index}.state`

            return (
              <Form.Field key={field.id}>
                <Title>{`Endereço ${index + 1}`}</Title>
                <WrapperContainer>
                  <Form.Field>
                    <Form.Label htmlFor={fieldNameZipCode}>Cep</Form.Label>
                    <Form.Input
                      name={fieldNameZipCode}
                      type="text"
                      placeholder="00000-000"
                    />
                    <Form.ErrorMessage field={fieldNameZipCode} />
                  </Form.Field>

                  {/* <Form.Field>
                    <Form.Label htmlFor={fieldNameZipCode}>Cep</Form.Label>
                    <Form.ZipCodeInput name={fieldNameZipCode} />
                    <Form.ErrorMessage field={fieldNameZipCode} />
                  </Form.Field> */}

                  {/* <Form.ErrorMessage field={fieldNameZipCode} /> */}

                  {/* {errors.addresses?.[index]?.zipCode && (
                    <ErrorMessage>
                      {errors.addresses?.[index]?.zipCode?.message}
                    </ErrorMessage>
                  )} */}

                  <Form.Field>
                    <Form.Label htmlFor={fieldNameAddress}>Endereço</Form.Label>
                    <Form.Input
                      name={fieldNameAddress}
                      type="text"
                      placeholder="Endereço"
                    />
                    <Form.ErrorMessage field={fieldNameAddress} />
                  </Form.Field>

                  <Form.Field>
                    <Form.Label htmlFor={fieldNameNumber}>Número</Form.Label>
                    <Form.Input
                      name={fieldNameNumber}
                      type="text"
                      placeholder="Número"
                    />
                    <Form.ErrorMessage field={fieldNameNumber} />
                  </Form.Field>

                  <Form.Field>
                    <Form.Label htmlFor={fieldNameComplement}>
                      Complemento
                    </Form.Label>
                    <Form.Input
                      name={fieldNameComplement}
                      type="text"
                      placeholder="Complemento"
                    />
                    <Form.ErrorMessage field={fieldNameComplement} />
                  </Form.Field>

                  <Form.Field>
                    <Form.Label htmlFor={fieldNameNeighborhood}>
                      Bairro
                    </Form.Label>
                    <Form.Input
                      name={fieldNameNeighborhood}
                      type="text"
                      placeholder="Bairro"
                    />
                    <Form.ErrorMessage field={fieldNameNeighborhood} />
                  </Form.Field>

                  <Form.Field>
                    <Form.Label htmlFor={fieldNameCity}>Cidade</Form.Label>
                    <Form.Input
                      name={fieldNameCity}
                      type="text"
                      placeholder="Cidade"
                    />
                    <Form.ErrorMessage field={fieldNameCity} />
                  </Form.Field>

                  <Form.Field>
                    <Form.Label htmlFor={fieldNameState}>Estado</Form.Label>
                    <Form.Input
                      name={fieldNameState}
                      type="text"
                      placeholder="Estado"
                    />
                    <Form.ErrorMessage field={fieldNameState} />
                  </Form.Field>

                  <ButtonInsert
                    variant="remove"
                    position="right"
                    onClick={() => removeAddress(index)}
                  >
                    <XCircle size={28} />
                  </ButtonInsert>
                </WrapperContainer>
              </Form.Field>
            )
          })}
        </Form.Field>

        <Separator />

        <Form.SubmitButton disabled={isSubmitting}>
          Salvar Contato
        </Form.SubmitButton>
      </FormContactContainer>
    </FormProvider>
  )
}
