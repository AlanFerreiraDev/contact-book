import { styled } from 'styled-components'

export const LabelContainer = styled.label`
  font: normal 1.2rem 'Roboto', sans-serif;
  line-height: 1.2;
  color: ${({ theme }) => theme['blue-300']};

  display: flex;
  justify-content: space-between;
`
