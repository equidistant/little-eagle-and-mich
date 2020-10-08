import { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Subheading, JustifyScrollGallery, SwipeGallery, ExploreBlogs, Newsletter, LittleEaglePhoto } from '../../components'
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
		  <Cover img={coverImg}/>
      <ContentRoot>
        <Title>{longTitle}</Title>
        <SSubheading>{description}</SSubheading>
        <Content>
          <JustifyScrollGallery images={paginatedImages} width={940} open={open} />
          {activeImg !== -1 && <SwipeGallery images={gallery.high} activeImg={activeImg} close={close} setActiveImg={setActiveImg} />}
        </Content>
      </ContentRoot>
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

const ContentRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

const Title = styled.h1`
  font-family: Lobster;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 80px;
  color: #434850;
  margin-top: 20px;
  width: 620px;
  text-align: center;
`

const SSubheading = styled(Subheading)`
  color: #434850;
  width: 620px;
  text-align: center;
`

const Content = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`