import Link from 'next/link'
import styled, { css } from 'styled-components'
import { H2, H3, Subtitle, DateLocation } from './text'
import { millisToString } from '../common'

const AllBlogs = ({ title, color, posts }) => {
	return (
		<Root>
			<SH2>{title}</SH2>
			<Cards>
				{posts.map((post, index) => <CCard post={post} color={color} key={index}/>)}
			</Cards>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 780px;
	@media only screen and (max-width: 1079px) {
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const SH2 = styled(H2)`
	margin-top: 130px;
	@media only screen and (max-width: 1079px) {
		margin-top: 100px;
	}
	@media only screen and (max-width: 660px) {
		margin-top: 75px;
	}
`

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 40px;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
	@media only screen and (max-width: 660px) {
		flex-direction: column;
		align-items: center;
		margin-top: 15px;
	}
`

const Card = styled.div`
	display: flex;
	position: relative;
	width: calc(50% - 10px);
	height: 309px;
	border-radius: 20px 2px;
	cursor: pointer;
	background: linear-gradient(0deg, rgba(44, 43, 41, 0.6), rgba(44, 43, 41, 0.6)), url(${props => props.src});
	background-size: cover;
	background-position: 0px bottom;
	background-repeat: no-repeat;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	margin-top: 16px;
	z-index: 3;
	@media only screen and (min-width: 1079px) {
		&:nth-child(2n) {
			margin-left: 20px;
		}
	}
	@media only screen and (max-width: 1079px) {
		height: 335px;
	}
	@media only screen and (max-width: 660px) {
		width: calc(100% - 40px);
	}
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
	justify-content: space-between;
	padding-left: 32px;
	padding-right: 50px;
	padding-top: 115px;
	padding-bottom: 70px;
	z-index: 2;
	@media only screen and (max-width: 1079px) {
		padding-bottom: 20px;
	}
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

const Middle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

const SH3 = styled(H3)`
	@media only screen and (min-width: 1079px) {
		margin-top: 15px;
	}
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

const CCard = ({ color, post: {title, location, created, longTitle, description, coverImg} }) => {
	return (
	<Card src={coverImg}>
		<Overlay color={color}/>
		<CardText>
			<DateLocationRow>
				<SDateLocation>
					{millisToString({ date: new Date(created) })}
				</SDateLocation>
				<Separator />
				<SDateLocation>
					{location}
				</SDateLocation>
			</DateLocationRow>
			<Middle>
				<SH3>{longTitle}</SH3>
				<SSubtitle textAlign='start' color='dark'>
						{description}
				</SSubtitle>
			</Middle>
			<NavLink href={`/post/${title}`}>
				<SSubtitleLink>Pročitaj više</SSubtitleLink>
			</NavLink>
		</CardText>
	</Card>
	)
}

export default AllBlogs