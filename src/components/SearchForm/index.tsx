import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { memo } from 'react'

const schemaValidation = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  cellphone: yup.string().required(),
  address: yup.string().required(),
})

const SearchFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  })

  function handleSearchTransactions(data: any) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Buscar contatos" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={28} color="#0A7EE3" />
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
