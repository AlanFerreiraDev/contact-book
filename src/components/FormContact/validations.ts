import * as yup from 'yup'

const phoneRegExp = /^\(\d{2}\) \d{4,5}-\d{4}$/

export const PhoneNumberSchema = yup.object().shape({
  number: yup
    .string()
    .required('O número de telefone é obrigatório')
    .matches(phoneRegExp, 'O número de telefone não é válido'),
})

const addressSchema = yup.object().shape({
  address: yup
    .string()
    .required('O Endereço é obrigatório')
    .min(10, 'OEEnderecó deve conter ao menos 10 caracteres'),
  number: yup
    .number()
    .typeError('Número deve ser um número')
    .required('Número é obrigatório'),
  complement: yup.string(),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  zipCode: yup
    .string()
    .required('CEP é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
})

export const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .test('nome', 'Digite o nome', (value) => {
      if (value) {
        const nome = value.trim().split(' ')
        return nome.length === 1 || nome.length === 2
      }
      return true
    }),
  surname: yup
    .string()
    .required('O sobrenome é obrigatório')
    .test('nome-sobrenome', 'Digite o sobrenome', (value) => {
      if (value) {
        const partesNome = value.trim().split(' ')
        return partesNome.length >= 2
      }
      return true
    }),
  company: yup
    .string()
    .matches(/^[\w\s!@#$%^&*()]+$/, 'Digite letras, números e símbolos'),
  office: yup
    .string()
    .matches(/^[\w\s!@#$%^&*()]+$/, 'Digite letras, números e símbolos'),
  phoneNumbers: yup.array().of(PhoneNumberSchema),
  email: yup
    .string()
    .email('O Email inserido não é válido')
    .required('O Email é obrigatório'),
  addresses: yup.array().of(addressSchema).required(),
})
