import styled, { useTheme } from 'styled-components'
import { Subheading, GalleryPreview, ExploreBlogs, Newsletter } from '../../components'
import { buildHtml, getColor, getBgColor } from '../../common'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await res.json()
    const paths = posts.map((post) => ({
      params: { title: post.title },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const resPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?title=${params.title}`)
  const arrPost = await resPost.json()
  const post = arrPost[0]

  const resPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await resPosts.json()

  const resGallery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?title=${post.gallery}`)
  const arrGallery = await resGallery.json()
  const gallery = await arrGallery[0]

  return { props: { post, gallery, posts } }
}

export default function PostPage ({ post, gallery, posts }) {
  const { longTitle, description, tags, created, coverImg, nodes} = post
  const theme = useTheme()
  return (
    <Root>
		  <Cover img={coverImg}/>
      <ContentRoot>
        <Title>{longTitle}</Title>
        <SSubheading>{description}</SSubheading>
        <Content>
          {buildHtml(nodes)}
        </Content>
      </ContentRoot>
      <GalleryPreview title={gallery.title} longTitle={gallery.longTitle} color={getColor({ tags, theme })} bgColor={getBgColor({ tags, theme })} images={gallery.low} width={940} numOfRows={2}/>
      <ExploreBlogs posts={posts} />
      <Newsletter color={getColor({ tags, theme})} bgColor={getBgColor({ tags, theme })}/>
    </Root>
  )
}

{/*  */}

const Root = styled.div`
  width: 100%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1079px) {
    padding-bottom: 75px;
	}
	@media only screen and (max-width: 660px) {
    padding-bottom: 50px;
	}
`

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(28, 57, 74, 0.3), rgba(28, 57, 74, 0.3)), url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ContentRoot = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  @media only screen and (max-width: 1079px) {
    width: 525px;
    margin-top: 30px;
	}
	@media only screen and (max-width: 660px) {
    margin-top: 20px;
    width: 300px;
	}
`

const Title = styled.h1`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 80px;
  color: #434850;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 1079px) {
    max-width: 340px;
    font-size: 48px;
    line-height: 60px;
  }
  @media only screen and (max-width: 660px) {
    max-width: 300px;
    font-size: 36px;
    line-height: 45px;
	}
`

const SSubheading = styled(Subheading)`
  color: #434850;
  width: 100%;
  max-width: 620px;
  text-align: center;
  margin-top: 20px;
  @media only screen and (max-width: 1079px) {
    margin-top: 10px;
    max-width: 340px;
  }
  @media only screen and (max-width: 660px) {
    max-width: 300px;
    font-size: 16px;
    line-height: 22px;
	}
`

const Content = styled.div`
  width: 100%;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1079px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 660px) {
    margin-top: 25px;
	}
`