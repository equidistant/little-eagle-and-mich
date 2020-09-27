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

const IconLink = ({ href, children }) => {
	return (
	  <Link href={href} passHref>
		<SLink>
			{children}
		</SLink>
	  </Link>
	)
  }

export default IconLink
