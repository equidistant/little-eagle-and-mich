import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/global'
import { Header, Footer } from '../components'
import theme from '../style/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	)
}

export default MyApp