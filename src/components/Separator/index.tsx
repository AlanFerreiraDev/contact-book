import { ISeparatorProps } from './interfaces'
import { SeparatorContainer } from './styles'

export const Separator = ({ variant = 'line' }: ISeparatorProps) => (
  <SeparatorContainer variant={variant} />
)
