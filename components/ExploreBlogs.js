import Link from 'next/link'
import styled, { css, useTheme } from 'styled-components'
import { H2, H4, Subtitle, DateLocation } from './text'
import BlogCategoryCard from './BlogCategoryCard.js.js'
import { getRandomInt, getColor } from '../common'

const ExploreBlogs = ({ posts, title }) => {
	let explorePosts = []
	for (let i = 0; i < 2; i++) {
		let post = posts[getRandomInt(posts.length)]
		while (post.title === title || (explorePosts.length === 1 && explorePosts[0].title === post.title)) {
			post = posts[getRandomInt(posts.length)]
		}
		explorePosts.push(post)
	}
	const theme = useTheme()
	return (
		<Root>
			<Center>
				<SH2>Nastavi istraživati putopise:</SH2>
				<Cards>
					{explorePosts.map((post, index) => <CCard post={post} color={getColor({ tags: post.tags, theme })} key={index}/>)}
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
	align-items: center;
	flex-direction: column;
`

const SH2 = styled(H2)`
	margin-top: 130px;
`

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 40px;
	width: 940px;
	height: 130px;
`

const Card = styled.div`
	width: 100%;
	position: relative;
	border-radius: 20px 2px;
	margin-left: 24px;
	&:first-of-type {
		margin-left: 0;
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
	background: ${props => props.color};
`

const CardContent = styled.div`
  background: #FFFFFF;
  border-radius: 20px 2px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const CardImage = styled.img`
	width: 140px;
	height: 130px;
	border-radius: 20px 2px;
`

const CardText = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	margin-left: 20px;
	margin-right: 20px;
	margin-bottom: 5px;
`

const DateLocationRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`

const Separator = styled.div`
	border-left: 1px solid #989DA3;
	height: 80%;
	margin-left: 20px;
	margin-right: 20px;
`

const SH4 = styled(H4)`
	margin-top: 5px;
	color: #434850;
	${Card}:hover & {
		color: ${props => props.color};
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
`

const SSubtitle = styled.p`
	font-family: Mulish;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;
	color: #434850;
	max-height: 45px;
	margin-top: 1px;
`

const SSubtitleLink = styled(Subtitle)`
	margin-top: 1px;
	text-decoration: underline;
	width: max-content;
	text-align: start;
	${Card}:hover & {
		color: ${props => props.color};
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
	align-self: flex-end;
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
						<SH4 color={color}>{longTitle}</SH4>
						<SSubtitle textAlign='start'>
								{description}
						</SSubtitle>
						<SSubtitleLink color={color}>Pročitaj više</SSubtitleLink>
					</CardText>
				</CardContent>
			</Card>
		</NavLink>

	)
}
export default ExploreBlogs