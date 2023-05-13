import { styled } from 'styled-components'

interface SeparatorProps {
  variant: 'line' | 'invisible'
}

export const SeparatorContainer = styled.div<SeparatorProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme, variant }) =>
    variant === 'line' ? theme['gray-300'] : ''};
  margin: 1rem 0;
`
