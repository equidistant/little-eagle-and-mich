import Link from 'next/link'
import styled, { css } from 'styled-components'
import { H2, H3, Subtitle, DateLocation } from './text'
import BlogCategoryCard from './BlogCategoryCard.js.js'

const AllBlogs = ({ title, color, posts }) => {
	return (
		<Root>
			<Center>
				<SH2>{title}</SH2>
				<Cards>
					{posts.map((post, index) => <CCard post={post} color={color} key={index}/>)}
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
	margin-left: 80px;
`

const SH2 = styled(H2)`
	margin-top: 130px;
`

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 40px;
	width: 780px;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Card = styled.div`
	display: flex;
	position: relative;
	width: 382px;
	height: 329px;
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
	padding-left: 32px;
	padding-right: 50px;
	padding-top: 115px;
	padding-bottom: 70px;
	z-index: 2;
`

const DateLocationRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
`

const Separator = styled.div`
	border-left: 1px solid #989DA3;
	height: 80%;
	margin-left: 20px;
	margin-right: 20px;
`


const SH3 = styled(H3)`
	margin-top: 15px;
	color: #FFFCF9;
`

const SSubtitle = styled(Subtitle)`
	color: #FFFCF9;
	margin-top: 7px;
`

const SSubtitleLink = styled(Subtitle)`
	color: #FFFCF9;
	margin-top: 10px;
	text-decoration: underline;
	width: 100%;
	text-align: start;
`

const SDateLocation = styled(DateLocation)`
	color: #FFFCF9;
`

const NavLink = ({ href, children }) => {
	return (
	  <Link href={href} passHref>
		{children}
	  </Link>
	)
  }

const CCard = ({ color, post: {title, description, coverImg} }) => {
	return (
	<Card src={coverImg}>
		<Overlay color={color}/>
		<CardText>
			<DateLocationRow>
				<SDateLocation>
					27.10.2019.
				</SDateLocation>
				<Separator />
				<SDateLocation>
					Gorski Kotar: Kanjon Kamačnik
				</SDateLocation>
			</DateLocationRow>
				<SH3>{title}</SH3>
			<SSubtitle textAlign='start' color='dark'>
					{description}
			</SSubtitle>
			<NavLink href='/post'>
				<SSubtitleLink>Pročitaj više</SSubtitleLink>
			</NavLink>
		</CardText>
	</Card>
	)
}

{}
export default AllBlogs