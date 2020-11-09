import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { coverWeekendImg } from '../images'
import { H1, Subheading,  RecommendedBlogs, AllBlogs, GalleryList, YoutubeVideo, Newsletter } from '../components'
import useSWR, { mutate } from 'swr'
import { paginate, useRandomGallery, getRandomInt } from '../common'

export async function getServerSideProps() {
  const resWeekendPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?tags=weekend`)
  const weekendPosts = await resWeekendPost.json()

  const resWeekendGalleries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?tags=weekend`)
  const weekendGalleries = await resWeekendGalleries.json()
 
  let index = [getRandomInt(weekendPosts.length), getRandomInt(weekendPosts.length)]
  while (index[0] === index[1]) {
    index = [getRandomInt(weekendPosts.length), getRandomInt(weekendPosts.length)]
  }
  const recommendedPosts = [weekendPosts[index[0]], weekendPosts[index[1]]]
  
  return {
    props: {
      recommendedPosts,
      posts: weekendPosts,
      galleries: weekendGalleries
    }
  }
}

const fetcher = async (url) => {
    const response = await fetch(url)
    if (response.status === 404) {
      throw new Error('Not found.')
    }
    return response.json()
}

const HomePage = ({ posts, recommendedPosts, galleries }) => {
  const theme = useTheme()
	return (
    <Root>
        <Cover img={coverWeekendImg}>
          <HeadersRoot>
            <HeadersCenter>
              <H1>Vikend izleti</H1>
                <PSubheading>
                  Savjeti i ideje oko vikend izleta u Hrvatskoj i okolici, gdje i kako kampirati, što posjetiti
                </PSubheading>
              <SubheadingButton>
                Kreni istraživati!
              </SubheadingButton>
            </HeadersCenter>
          </HeadersRoot>
        </Cover>
        <ContentRoot>
          <RecommendedBlogs posts={recommendedPosts} color='orange'/>
          <AllBlogs title={'Vikend putopisi'} posts={posts} color='orange'/>
          <GalleryList title={'Foto galerija'} galleries={galleries} color={theme.color.orange}/>
          <YoutubeVideo title='Najnovija vikend avantura' href='/' buttonText='Odi na članak' src='https://www.youtube.com/embed/8eBgcVkIFrs'/>
          <Newsletter color={theme.color.orange} bgColor={theme.color.lightOrange}/>
        </ContentRoot>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  padding-bottom: 100px;
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

const HeadersRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 940px;
  width: 780px;
  @media only screen and (max-width: 1079px) {
    width: 525px;
  }
  @media only screen and (max-width: 660px) {
    width: 300px;
  }
`

const HeadersCenter = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
`

const PSubheading = styled(Subheading)`
  width: 95%;
  margin-top: 25px;
  @media only screen and (max-width: 1220px) {
    margin-top: 15px;
    font-size: 16px;
    line-height: 20px;
    width: 75%;
  }
  @media only screen and (max-width: 660px) {
    width: 80%;
    font-size: 14px;
    line-height: 17.5px;
  }
`

const SubheadingButton = styled.button`
  border: 3px solid #E8A87C;
  border-radius: 20px 2px;
  width: 231px;
  height: 40px;
  background: transparent;
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;

  color: #FFFCF9;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);

  margin-top: 25px;
  margin-left: 160px;
  cursor: pointer;
  background: #E8A87C;

  @media only screen and (max-width: 1079px) {
    max-width: 200px;
    font-size: 20px;
    line-height: 25px;
    margin-left: 0;
  }
  @media only screen and (max-width: 660px) {
    font-size: 18px;
    line-height: 22.5px;
  }
`

const ContentRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default HomePage