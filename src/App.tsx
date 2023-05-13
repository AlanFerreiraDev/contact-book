import { ThemeProvider } from 'styled-components'
import { GlobalStyle, defaultTheme } from './styles'
import { Schedule } from './pages'
import { Header, Layout } from './components'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Layout>
        <GlobalStyle />
        <Schedule />
      </Layout>
    </ThemeProvider>
  )
}
