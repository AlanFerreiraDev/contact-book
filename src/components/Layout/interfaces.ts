import { HTMLAttributes, ReactNode } from 'react'

export interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
