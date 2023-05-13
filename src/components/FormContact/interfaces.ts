export type TPhoneNumbers = { number: string; type: string }

export interface IContactFormProps {
  onRequestClose: () => void
}

export type TOptions = {
  label: string
  value: string
  name: string
}

export interface IFormInput {
  name: string
  surname: string
  office: string
  company: string
  email: string
  phoneNumbers: TPhoneNumbers[]
  addresses: TAddresses[]
}

type TAddresses = {
  address: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  zipCode: string
}
