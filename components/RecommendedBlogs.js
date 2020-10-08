import Link from 'next/link'
import styled, { css } from 'styled-components'
import { H2, H3, Subtitle, DateLocation } from './text'

const RecommendedBlogs = ({ color, posts }) => {

	return (
		<Root>
			<Center>
				<SH2>Preporučeni izleti</SH2>
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
	flex-direction: column;
	margin-top: 40px;
	width: 780px;
	margin-left: 10px;
`

const Card = styled.div`
	width: 100%;
	position: relative;
	border-radius: 20px 2px;
	margin-top: 40px;
	&:first-of-type {
		margin-top: 0;
	}
	cursor: pointer;
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
  display: flex;
  flex-direction: row;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const CardImage = styled.img`
	width: 50%;
	border-radius: 20px 2px;
`

const CardText = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	padding-right: 50px;
	padding-top: 80px;
	padding-bottom: 70px;
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
	margin-top: 14px;
	color: #434850;
	${Card}:hover & {
		color: #E8A87C;
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
`

const SSubtitle = styled(Subtitle)`
	margin-top: 7px;
`

const SSubtitleLink = styled(Subtitle)`
	margin-top: 12px;
	text-decoration: underline;
	width: max-content;
	text-align: start;
	${Card}:hover & {
		color: #E8A87C;
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
`

const NavLink = ({ href, children }) => {
	return (
	  <Link href={href} passHref>
		{children}
	  </Link>
	)
  }

const CCard = ({ color, post: {title, longTitle, description, coverImg} }) => {
	return (
		<NavLink href={`/post/${title}`}>
			<Card>
				<CardBackground color={color}/>
				<CardContent>
					<CardImage src={coverImg}/>
					<CardText>
						<DateLocationRow>
							<DateLocation>
								27.10.2019.
							</DateLocation>
							<Separator />
							<DateLocation>
								Gorski Kotar: Kanjon Kamačnik
							</DateLocation>
						</DateLocationRow>
							<SH3>{longTitle}</SH3>
						<SSubtitle textAlign='start' color='dark'>
								{description}
						</SSubtitle>
							<SSubtitleLink>Pročitaj više</SSubtitleLink>
					</CardText>
				</CardContent>
			</Card>
		</NavLink>

	)
}
export default RecommendedBlogs