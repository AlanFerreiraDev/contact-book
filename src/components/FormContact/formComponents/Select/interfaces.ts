import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'

type TOptions = {
  label: string
  value: string
  name: string
}

export type ISelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: TOptions[]; watch: (fieldName: string) => string; index: number }
