import { HeaderContainer, HeaderContent } from './styles'
import VExpensesLogo from '../../assets/VExpensesLogo.webp'
import { UserPlus } from '@phosphor-icons/react'
import { AddContactButton } from './AddContactButton'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={VExpensesLogo}
          alt="Logotipo com um círculo azul e duas setas em direções opostas (VExpenses)"
          title="VExpenses Logotipo"
        />

        <AddContactButton
          icon={<UserPlus size={36} color="#0A7EE3" />}
          text="Criar Novo Contato"
        />
      </HeaderContent>
    </HeaderContainer>
  )
}
