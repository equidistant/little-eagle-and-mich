import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { coverHomeImg } from '../images'
import { H1, Subheading, BlogCategories, LatestBlogs, RandomGallery, YoutubeVideo, WhoAreWe, Newsletter } from '../components'
import useSWR, { mutate } from 'swr'
import { paginate, useRandomGallery } from '../common'

export async function getServerSideProps() {
  const resGalleries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery/`)
  const initialGalleries = await resGalleries.json()

  // let index = Math.floor(Math.random() * Math.floor(galleries.length))
  // const gallery = galleries[index]


  const resWeekendPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?tags=weekend`)
  const weekendPosts = await resWeekendPost.json()

  const resLocalPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?tags=local`)
  const localPosts = await resLocalPost.json()

  const resDistantPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post?tags=distant`)
  const distantPosts = await resDistantPost.json()

  const initialPosts = [weekendPosts[0], localPosts[0], distantPosts[0]]

  return { 
    props: { 
      initialGalleries,
      initialPosts
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

const HomePage = ({ initialGalleries, initialPosts }) => {
  const theme = useTheme()
  const [gallery, handleNext] = useRandomGallery({ initialGalleries })
	return (
    <Root>
        <Cover img={coverHomeImg}>
          <HeadersRoot>
            <H1>LittleEagle&Mich</H1>
              <PSubheading>
                Putopisne ideje i savjeti za ljude koji vole putovati, no nemaju puno vremena.
              </PSubheading>
            <SubheadingButton>
              Kreni na avanturu
            </SubheadingButton>
          </HeadersRoot>
        </Cover>
        <ContentRoot>
          <BlogCategories/>
          <LatestBlogs posts={initialPosts}/>
          {gallery && gallery.low && <RandomGallery longTitle={gallery.longTitle} title={gallery.title} images={gallery.low} handleNext={handleNext} />} 
          <WhoAreWe/>
          <YoutubeVideo title='Najnovija avantura' href='/' buttonText='Odi na članak' src='https://www.youtube.com/embed/8eBgcVkIFrs'/>
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
  width: 780px;
  @media only screen and (max-width: 1079px) {
    width: 525px;
  }
  @media only screen and (max-width: 660px) {
    width: 300px;
  }
`

const PSubheading = styled(Subheading)`
  width: 70%;
  margin-top: 25px;
  @media only screen and (max-width: 1220px) {
    margin-top: 15px;
    font-size: 16px;
    line-height: 20px;
    width: 50%;
  }
  @media only screen and (max-width: 660px) {
    width: 80%;
    font-size: 14px;
    line-height: 17.5px;
  }
`

const SubheadingButton = styled.button`
  border: 3px solid #FFFCF9;
  border-radius: 20px 2px;
  width: 231px;
  height: 40px;
  background: transparent;
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  margin-left: 25%;
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

  color: #FFFCF9;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);

  margin-top: 25px;
  cursor: pointer;
`

const ContentRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default HomePage