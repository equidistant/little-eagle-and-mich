import { useState } from 'react'
import styled from 'styled-components'
import { coverHomeImg } from '../images'
import { H1, Subheading, BlogCategories, LatestBlogs, RandomGallery, RandomVideo, WhoAreWe, Newsletter } from '../components'
import useSWR, { mutate } from 'swr'
import { paginate, useRandomGallery } from '../common'

export async function getServerSideProps() {
  const resTitles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery/titles`)
  const titles = await resTitles.json()
  const title = titles[Math.floor(Math.random() * Math.floor(titles.length))].title
  const resGallery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery/${title}`)
  const gallery = await resGallery.json()
  const resPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await resPosts.json()
  return { 
    props: { 
      initialTitle: title, 
      initialGallery: gallery,
      initialPosts: posts.slice(0, 3),
      titles: titles
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

const HomePage = ({ initialTitle, initialGallery, initialPosts, titles }) => {
  const [title, longTitle, gallery, handleNext] = useRandomGallery({ titles })
  // const { data: gallery, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/gallery/${title}`, fetcher, { initialData: initialGallery })
  // let paginatedGallery = paginate({ images: JSON.parse(JSON.stringify(gallery.low)), nPerPage: 20 })
	return (
    <Root>
        <Cover img={coverHomeImg}>
          <HeadersRoot>
            <HeadersCenter>
              <H1>LittleEagle&Mich</H1>
                <PSubheading>
                  Putopisne ideje i savjeti za ljude koji vole putovati, no nemaju puno vremena.
                </PSubheading>
              <SubheadingButton>
                Kreni na avanturu
              </SubheadingButton>
            </HeadersCenter>
          </HeadersRoot>
        </Cover>
        <ContentRoot>
          <BlogCategories/>
          <LatestBlogs posts={initialPosts}/>
          {gallery.low && <RandomGallery longTitle={longTitle} title={title} images={gallery.low} width={940} numOfRows={2} handleNext={handleNext} />} 
          <WhoAreWe/>
          <RandomVideo/>
          <Newsletter/>
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
`

const HeadersCenter = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`

const PSubheading = styled(Subheading)`
  width: 70%;
  margin-top: 25px;
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

  color: #FFFCF9;
  transform: matrix(1, 0.01, -0.01, 1, 0, 0);

  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
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