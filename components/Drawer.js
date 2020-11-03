import styled, { css, useTheme } from 'styled-components'
import { hamburgerImg, logoTextImg, searchImg } from '../images'
import { useScrolledDirection } from '../common'
import { useRouter } from 'next/router'
import { Caption } from '../components'

const Drawer = ({ show }) => {
	const theme = useTheme()
	const router = useRouter()
	return (
		<Root show={show}>
			<Center>
				<Links>
					<Link active={router.pathname === '/'} href='/' color={theme.color.white}>
						Početna
					</Link>
					<Link active={router.pathname === '/weekend'} href='/weekend' margintop='30px' color={theme.color.white}>
						Vikend Izleti
					</Link>
					<Link active={router.pathname === '/local'} href='/local' margintop='30px' color={theme.color.white}>
						Lokalna Putovanja
					</Link>
					<Link active={router.pathname === '/distant'} href='/distant' margintop='30px' color={theme.color.white}>
						Daleke Avanture
					</Link>
					<Link active={router.pathname === '/gallery'} href='/gallery' margintop='30px' color={theme.color.white}>
						Fotogalerija
					</Link>
					<Link active={router.pathname === '/about'} href='/about' margintop='30px' color={theme.color.white}>
						O nama
					</Link>
					<Link href='https://www.littleeaglephoto.com' margintop='60px' color={theme.color.orange} target='_blank'>
						Little Eagle Photography
					</Link>			
				</Links>

			</Center>
		</Root>
	)
}

const Root = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	opacity: 0;
	visibility: hidden;
	width: 100%;
	height: 100vh;
	background-color: ${props => props.theme.color.dark};
	transition-property: visibility, opacity;
	transition-duration: 500ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	display: flex;
	flex-direction: column;
	align-items: center;

	${props => props.show && css`
		opacity: 1;
		visibility: visible;
	`}
	z-index: 10;
	color: ${props => props.theme.color.white};
`

const Center = styled.div`
	margin-top: calc(100px + 120px);
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Links = styled.div`
	width: max-content;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media only screen and (max-width: 660px) {
		max-width: 250px;
	}
`

const Link = styled.a`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	line-height: 35px;
	text-transform: uppercase;
	text-decoration: none;
	color: ${props => props.color ? props.color : props.theme.color.dark};
	${props => props.active && css `
		padding-bottom: 5px;
		border-bottom: 2px solid ${props => props.theme.color.white};
	`}
	margin-top: ${props => props.margintop ? props.margintop : 0};
	@media only screen and (max-width: 660px) {
		font-size: 22px;
		line-height: 28px;
	  }
`


export default Drawer