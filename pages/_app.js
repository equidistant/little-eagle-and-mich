import App from 'next/app'
import GlobalStyle from '../style/global'
import { Header, Footer } from '../components'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle/>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp