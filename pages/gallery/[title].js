import { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { H1, Subheading, JustifyScrollGallery, SwipeGallery, ExploreBlogs, Newsletter, LittleEaglePhoto } from '../../components'
import { buildHtml, getColor, getBgColor, paginate } from '../../common'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
  const galleries = await res.json()
    const paths = galleries.map((gallery) => ({
      params: { title: gallery.title },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const resGallery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery?title=${params.title}`)
  const arrGallery = await resGallery.json()
  const gallery = arrGallery[0]

  return { props: { gallery } }
}

export default function SingleGalleryPage ({ gallery }) {
  const { title, longTitle, description, tags, created, coverImg, nodes} = gallery
  const theme = useTheme()
  const router = useRouter()
  const [activeImg, setActiveImg] = useState(-1)
  useEffect(() => {
    if (router.query.activeImg && router.query.activeImg !== -1) {
      setActiveImg(parseInt(router.query.activeImg))
    }
  }, [router.query.activeImg])
  const open = (id) => {
    const href = `/gallery/${router.query.title}?activeImg=${id}`
    window.history.replaceState( {}, '', href )
    setActiveImg(id)
  }
  const close = () => {
    const href = `/gallery/${router.query.title}`
    window.history.replaceState( {}, '', href )
    setActiveImg(-1)  
  }
  const paginatedImages = paginate({ images: JSON.parse(JSON.stringify(gallery.low)) })
  return (
    <Root>
		    <Cover img={coverImg}>
        <HeadersRoot>
            <H1>{longTitle}</H1>
              <PSubheading>
               {description}
              </PSubheading>
          </HeadersRoot>
        </Cover>
        <Gallery>
          <JustifyScrollGallery images={paginatedImages} width={940} open={open} />
          {activeImg !== -1 && <SwipeGallery images={gallery.high} activeImg={activeImg} close={close} setActiveImg={setActiveImg} />}
        </Gallery>
      <LittleEaglePhoto />
    </Root>
  )
}


const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 95%;
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

const Gallery = styled.div`
  width: 780px;
  @media only screen and (max-width: 1079px) {
    width: 525px;
  }
  @media only screen and (max-width: 660px) {
    width: 300px;
  }
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`