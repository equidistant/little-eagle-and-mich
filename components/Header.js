import styled, { css } from 'styled-components'
import { hamburgerCloseImg, hamburgerImg, logoTextImg, searchImg } from '../images'
import { useScrolledDirection } from '../common'
import Link from 'next/link'

const Header = ({ show, handleOpen, handleClose }) => {
	const [scrollY, scrolled] = useScrolledDirection({ boundary: 0 })
	return (
		<Root scrolled={scrolled} transparent={scrollY === 0}>
			<Center show={show}>
				<IconLink href='/'>
					<Logo src={logoTextImg} />
				</IconLink>
				<Links>
					<NavLink href='/weekend' name='Vikend izleti'/>
					<NavLink href='/local' name='Lokalna putovanja'/>
					<NavLink href='/distant' name='Daleka putovanja'/>
					<NavLink href='/gallery' name='Fotogalerija'/>
					<NavLink href='/about' name='O nama'/>
				</Links>
				<Icons>
					<Search />
					<Hamburger show={show} handleOpen={handleOpen} handleClose={handleClose}/>
				</Icons>
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
	background-color: ${props => props.theme.color.dark};
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

const Center = styled.div`
	width: 80%;
	max-width: 1091px;
	height: 56px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`


const Logo = styled.img`
	width: 162px;
	height: 56px;
	@media only screen and (max-width: 660px) {
		width: 109px;
		height: 38px;
	}
`

const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 30px;
	@media only screen and (max-width: 1079px) {
		margin-left: 0px;
	}
`
const Links = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	flex: 1;
	@media only screen and (max-width: 660px) {
		width: 86px;
		height: 30px;
	}
	@media only screen and (max-width: 1079px) {
		display: none;
	}
`

const SLink = styled.a`
	text-decoration: none;
	font-family: 'Mulish';
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	text-transform: uppercase;
	color: #FFFFFF;
	text-shadow: 0px 0px 12px rgba(1,52,8,0.8);
	margin-left: 30px;
	&:first-of-type {
		margin-left: 0;
	}
	@media only screen and (max-width: 1220px) {
		margin-left: 20px;
	}
`

const Hamburger = ({ show, handleOpen, handleClose }) => {
	return (
		<HamburgerWrap onClick={show ? handleClose: handleOpen}>
			<HamburgerImg src={hamburgerImg} show={!show}/>
			<HamburgerCloseImg src={hamburgerCloseImg} show={show}/>
		</HamburgerWrap>
	)
}

const HamburgerWrap = styled.div`
	cursor: pointer;
	display: none;
	padding: 10px;
	margin-left: 20px;
	@media only screen and (max-width: 1079px) {
		display: block;
	}
	@media only screen and (max-width: 660px) {
		margin-left: 10px;
	}
`

const HamburgerImg = styled.img`
	width: 30px;
	height: 18px;
	display: ${props => props.show ? 'block' : 'none'};	
	@media only screen and (max-width: 660px) {
		width: 24px;
		height: 16px;
	}
`

const HamburgerCloseImg = styled.img`
	width: 24px;
	height: 24px;
	display: ${props => props.show ? 'block' : 'none'};	
	@media only screen and (max-width: 660px) {
		width: 20px;
		height: 20px;
	}
`

const IconLink = ({ href, children }) => {
	return (
	  <Link href={href} passHref>
		<SLink>
			{children}
		</SLink>
	  </Link>
	)
  }


const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <SLink>{name}</SLink>
    </Link>
  )
}

const Search = () => {
	return (
		<SearchRoot>
			<SearchInput placeholder={'TRAŽI...'}/>
			<SearchIconWrapper>
				<SearchIcon src={searchImg} />
			</SearchIconWrapper>
		</SearchRoot>
	)
}

const SearchRoot = styled.div`
	display: flex;
	width: 110px;
	height: 30px;
	background: #FFFFFF;
	border-radius: 30px;
	@media only screen and (max-width: 1220px) {
		width: 36px;
	}
	@media only screen and (max-width: 660px) {
		width: 24px;
		height: 24px;
	}
	&:hover {
		cursor: pointer;
	}
`

const SearchIconWrapper = styled.div`
	@media only screen and (min-width: 1220px) {
		padding-top: 7px;
		padding-bottom: 7px;
		padding-right: 6px;
	}
	@media only screen and (max-width: 1220px) {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

const SearchIcon = styled.img`
	width: 16px;
	height: 16px;
	@media only screen and (max-width: 660px) {
		width: 14px;
		height: 14px;
	}
`

const SearchInput = styled.input`
	width: 80px;
	border-radius: 30px;
	border: none;
	padding-left: 20px;
	font-family: 'Mulish';
	font-style: normal;
	font-size: 12px;
	line-height: 15px;

	/* identical to box height */
	text-transform: uppercase;

	/* Secondary grey */
	color: #989DA3;
	@media only screen and (max-width: 1220px) {
		display: none;
	}
`

export default Header