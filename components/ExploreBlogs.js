import styled, { css, useTheme } from 'styled-components'
import { H2 } from './text'
import { getColor, useExplorePosts } from '../common'
import { SmallBlogCard } from '.'

const ExploreBlogs = ({ posts, title }) => {
	const theme = useTheme()
	const explorePosts = useExplorePosts({ posts, title })
	return (
		<Root>
			<SH2>Nastavi istraživati putopise:</SH2>
			<Cards>
				{explorePosts.map((post, index) => <SmallBlogCard post={post} color={getColor({ tags: post.tags, theme })} marginleft='24px' key={index}/>)}
			</Cards>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 940px;
	@media only screen and (max-width: 1079px) {
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const SH2 = styled(H2)`
	margin-top: 130px;
`

const Cards = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 40px;
	width: 100%;
	@media only screen and (max-width: 1079px) {
		flex-direction: column;
		align-items: center;
		margin-top: 15px;
	}
`

export default ExploreBlogs