import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme['gray-100']};
  background: ${({ theme }) => theme['white']};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1184px;
  margin: 0 auto;

  padding: 2rem 2rem;

  img {
    @media (max-width: 350px) {
      width: 50%;
      min-width: 140px;
      height: 50%;
      min-height: 36px;
    }

    @media (max-width: 250px) {
      width: 30%;
      min-width: 98px;
      height: 30%;
      min-height: 25px;
    }
  }
`
