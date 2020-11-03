import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/global'
import { Header, Footer, Drawer } from '../components'
import theme from '../style/theme'

function MyApp({ Component, pageProps }) {
	const [show, setShow] = useState(false)
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle hideScroll={show}/>
			<Header show={show} handleOpen={() => setShow(true)} handleClose={() => setShow(false)} />
			<Drawer show={show}/>
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	)
}

export default MyApp