import { ILayoutProps } from './interfaces'
import { LayoutContainer } from './styles'

export const Layout = ({ children, ...rest }: ILayoutProps) => {
  return <LayoutContainer {...rest}>{children}</LayoutContainer>
}
