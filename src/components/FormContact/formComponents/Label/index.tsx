import { ILabelProps } from './interfaces'
import { LabelContainer } from './styles'

export const Label = ({ ...rest }: ILabelProps) => {
  return <LabelContainer {...rest} />
}
