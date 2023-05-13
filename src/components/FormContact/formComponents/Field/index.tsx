import { TFieldProps } from './interfaces'
import { FieldContainer } from './styles'

export function Field({ ...rest }: TFieldProps) {
  return <FieldContainer {...rest} />
}
