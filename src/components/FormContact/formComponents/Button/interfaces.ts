import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ISubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
