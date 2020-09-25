import Link from 'next/link'
import styled from 'styled-components'

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

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <SLink>{name}</SLink>
    </Link>
  )
}

export default NavLink
