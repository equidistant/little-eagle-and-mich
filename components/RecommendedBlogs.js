import Link from 'next/link'
import styled, { css } from 'styled-components'
import { H2, H3, Subtitle, DateLocation } from './text'
import { millisToString } from '../common'

const RecommendedBlogs = ({ color, posts }) => {
	return (
		<Root>
			<SH2>Preporučeni izleti</SH2>
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
`

const Cards = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	width: 100%;
	margin-left: 10px;
`

const Card = styled.div`
	width: 100%;
	height: 304px;
	position: relative;
	border-radius: 20px 2px;
	margin-top: 40px;
	&:first-of-type {
		margin-top: 0;
	}
	cursor: pointer;
	@media only screen and (max-width: 1079px) {
		width: 525px;
		height: 245px;
	}
	@media only screen and (max-width: 660px) {
		width: 290px;
		height: 300px;
	}
`

const CardBackground = styled.div`
	border-radius: 20px 2px;
	position: absolute;
	top: -10px;
	right: 10px;
	width: 100%;
	height: 100%;
	z-index: -1;
	${props => props.color === 'orange' && css`
		background: #E8A87C;
	`}
	${props => props.color === 'green' && css`
		background: #41B3A3;
	`}
	${props => props.color === 'blue' && css`
		background: #82C6DB;
	`}
`

const CardContent = styled.div`
  background: #FFFFFF;
  border-radius: 20px 2px;
  height: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 660px) {
		flex-direction: column;
	}
`

const CardImage = styled.img`
	width: 50%;
	height: 304px;
	border-radius: 20px 2px 2px 2px;
	@media only screen and (max-width: 1079px) {
		height: 245px;
	}
	@media only screen and (max-width: 660px) {
		width: 100%;
		height: 150px;
	}
`

const CardText = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 80px;
	padding-bottom: 65px;
	padding-left: 22.5px;
	padding-right: 22.5px;
	@media only screen and (max-width: 1079px) {
		padding-top: 20px;
		padding-bottom: 20px;
		padding-left: 15px;
	}
	@media only screen and (max-width: 660px) {
		width: 100%;
		height: 100%;
		justify-content: flex-start;
	}
`

const DateLocationRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	@media only screen and (max-width: 1079px) {
		flex-direction: column;
		align-items: flex-start;
	}
	@media only screen and (max-width: 660px) {
		flex-direction: row;
		align-items: center;
	}
`

const Separator = styled.div`
	border-left: 1px solid #989DA3;
	height: 10px;
	margin-left: 20px;
	margin-right: 20px;
	@media only screen and (max-width: 1079px) and (min-width: 660px) {
		display: none;
	}

`

const SH3 = styled(H3)`
	color: #434850;
	${Card}:hover & {
		color: #E8A87C;
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
`

const Middle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

const SSubtitleLink = styled(Subtitle)`
	text-decoration: underline;
	width: max-content;
	text-align: start;
	${Card}:hover & {
		color: #E8A87C;
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
	@media only screen and (max-width: 660px) {
		display: none;
	}
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
		<NavLink href={`/post/${title}`}>
			<Card>
				<CardBackground color={color}/>
				<CardContent>
					<CardImage src={coverImg}/>
					<CardText>
						<DateLocationRow>
							<DateLocation>
								{millisToString({ date: new Date(created) })}
							</DateLocation>
							<Separator />
							<DateLocation>
								{location}
							</DateLocation>
						</DateLocationRow>
						<Middle>
							<SH3>{longTitle}</SH3>
							<Subtitle textAlign='start' color='dark'>
									{description}
							</Subtitle>
						</Middle>
						<SSubtitleLink>Pročitaj više</SSubtitleLink>
					</CardText>
				</CardContent>
			</Card>
		</NavLink>

	)
}
export default RecommendedBlogs