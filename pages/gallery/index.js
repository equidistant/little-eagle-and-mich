import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { coverGalleryImg } from '../../images'
import { H1, Subheading,  RecommendedBlogs, AllBlogs, GalleryList, YoutubeVideo, Newsletter, LatestGalleries } from '../../components'
import useSWR, { mutate } from 'swr'
import { paginate, useRandomGallery, getRandomInt } from '../../common'

export async function getServerSideProps() {
  const resGalleries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
  const galleries = await resGalleries.json()

  const resWeekend = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?tags=weekend`)
  const weekend = await resWeekend.json()

  const resLocal = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?tags=local`)
  const local = await resLocal.json()

  const resDistant = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?tags=distant`)
  const distant = await resDistant.json()

  const latest = galleries.slice(0, 2)
  return {
    props: {
      latest,
      weekend,
      local,
      distant
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

const GalleryPage = ({ latest, weekend, local, distant }) => {
  const theme = useTheme()
	return (
    <Root>
        <Cover img={coverGalleryImg}>
          <HeadersRoot>
            <HeadersCenter>
              <H1>Galerija Fotografija</H1>
                <PSubheading>
                  Za one kojima su fotke sasvim dovoljne
                </PSubheading>
            </HeadersCenter>
          </HeadersRoot>
        </Cover>
        <ContentRoot>
          <LatestGalleries galleries={latest} title='Najnoviji foto albumi'/>
          <GalleryList title={'Vikend fotografije'} galleries={weekend} color={theme.color.orange}/>
          <GalleryList title={'Lokalni foto albumi'} galleries={local} color={theme.color.green}/>
          <GalleryList title={'Fotografije iz daleka'} galleries={distant} color={theme.color.blue}/>
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
  width: 95%;
  margin-top: 25px;
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
`

const ContentRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default GalleryPage