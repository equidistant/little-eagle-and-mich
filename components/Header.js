import styled, { css } from 'styled-components'
import { logoTextImg, searchImg } from '../images'
import { useScrolledDirection } from '../common'
import Link from 'next/link'

const Header = () => {
	const [scrollY, scrolled] = useScrolledDirection({ boundary: 0 })
	return (
		<Root scrolled={scrolled} transparent={scrollY === 0}>
			<Center>
				<IconLink href='/'>
					<Logo src={logoTextImg} />
				</IconLink>
				<Links>
					<NavLink href='/weekend' name='Vikend izleti'/>
					<NavLink href='/local' name='Lokalna putovanja'/>
					<NavLink href='/distant' name='Daleka putovanja'/>
					<NavLink href='/gallery' name='Fotogalerija'/>
					<NavLink href='/about' name='O nama'/>
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

const SLink = styled.a`
	text-decoration: none;
	font-family: 'Mulish';
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	text-transform: uppercase;
	color: #FFFFFF;
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
`

const SearchIconWrapper = styled.div`
	padding-top: 7px;
	padding-bottom: 7px;
	padding-right: 6px;

`

const SearchIcon = styled.img`
	width: 16px;
	height: 16px;
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
`

export default Header