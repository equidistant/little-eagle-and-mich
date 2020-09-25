import styled, { css } from 'styled-components'
import { logoTextImg } from '../../images'
import NavLink from './NavLink'
import Search from './Search'
import { useScrolledDirection } from '../../common'

const Header = () => {
	const [scrollY, scrolled] = useScrolledDirection({ boundary: 0 })
	return (
		<Root scrolled={scrolled} transparent={scrollY === 0}>
			<Center>
				<Logo src={logoTextImg}/>
				<Links>
					<NavLink href='/' name='Vikend izleti'/>
					<NavLink href='/' name='Lokalna putovanja'/>
					<NavLink href='/' name='Daleka putovanja'/>
					<NavLink href='/' name='Fotogalerija'/>
					<NavLink href='/' name='O nama'/>
					<Search />
				</Links>
			</Center>
		</Root>
	)
}

const Root = styled.header`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 120px;
	background-color: #434850;.
	transform: translateY(0);
	${props => props.scrolled && css`
    	transform: translateY(-120px);
	  `}
	${props => props.transparent && css`
	  background-color: transparent;
	`}
	transition-property: transform, background-color;
	transition-duration: 250ms;
	transition-delay: 0s, 0.25s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

const Center = styled.header`
	width: 1091px;
	height: 56px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`


const Logo = styled.img`
	width: 162px;
	height: 56px;
`

const Links = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 70%;
`

export default Header