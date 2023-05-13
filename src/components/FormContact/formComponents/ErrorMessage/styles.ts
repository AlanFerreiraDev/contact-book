import { styled } from 'styled-components'

export const ErrorMessageContainer = styled.span`
  font: normal 0.75rem 'Roboto', sans-serif;
  line-height: 1.2;
  color: ${({ theme }) => theme['red-300']};
`
