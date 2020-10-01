import Link from 'next/link'
import styled, { css } from 'styled-components'
import { H2, H3, Subtitle, DateLocation } from './text'

const GalleryList = ({ title, color, galleries }) => {
	return (
		<Root>
			<Center>
				<SH2>{title}</SH2>
				<Cards>
					{galleries.map((gallery, index) => <CCard gallery={gallery} color={color} key={index}/>)}
				</Cards>
			</Center>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 940px;
`

const Center = styled.div`
	width: min-content;
	display: flex;
	flex-direction: column;
	width: 100%;
`

const SH2 = styled(H2)`
	margin-top: 130px;
`

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 40px;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Card = styled.div`
	display: flex;
	position: relative;
	width: 300px;
	height: 352px;
	border-radius: 20px 2px;
	cursor: pointer;
	background: linear-gradient(0deg, rgba(44, 43, 41, 0.6), rgba(44, 43, 41, 0.6)), url(${props => props.src});
	background-size: cover;
	background-position: 0px bottom;
	background-repeat: no-repeat;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	margin-top: 16px;
	z-index: 3;
`

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: opacity .2s cubic-bezier(.4,0,.2,.1);
	${props => props.color === 'orange' && css`
		opacity: 0;
		${Card}:hover &{
			opacity: 1;
		}
		background: linear-gradient(0deg, rgba(232, 168, 124, 1), rgba(232, 168, 124, 1));
	`}
	${props => props.color === 'green' && css`
		opacity: 0;
		${Card}:hover &{
			opacity: 1;
		}
		background: linear-gradient(0deg, rgba(65, 179, 163, 1), rgba(65, 179, 163, 1));
	`}
	${props => props.color === 'blue' && css`
		opacity: 0;
		${Card}:hover &{
			opacity: 1;
		}
		background:  linear-gradient(0deg, rgba(130, 198, 219, 1), rgba(130, 198, 219, 1));
	`}
	border-radius: 20px 2px;
`

const CardText = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-left: 32px;
	padding-right: 50px;
	padding-bottom: 32px;
	z-index: 2;
`

const SH3 = styled(H3)`
	margin-top: 15px;
	color: #FFFCF9;
	${Card}:hover & {
		color: ${props => props.color};
	}
`

const SSubtitle = styled(Subtitle)`
	color: #FFFCF9;
	margin-top: 7px;
`

const NavLink = ({ href, children }) => {
	return (
	  <Link href={href} passHref>
		{children}
	  </Link>
	)
  }

const CCard = ({ color, gallery: {title, longTitle, coverImg} }) => {
	return (
	<Card src={coverImg}>
		<Overlay color={color}/>
		<CardText>
			<SH3 color={color}>{longTitle}</SH3>
		</CardText>
	</Card>
	)
}

export default GalleryList