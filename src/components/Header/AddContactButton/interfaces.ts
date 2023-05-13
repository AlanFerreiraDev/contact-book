import { HTMLAttributes, ReactNode } from 'react'

export interface IAddContactButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  text: string
}
