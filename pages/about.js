import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { coverAboutImage, getAboutImages } from '../images'
import { AboutStory, H1, Subheading } from '../components'

const AboutPage = () => {
  const aboutImages = getAboutImages()
	return (
    <Root>
        <Cover img={coverAboutImage}>
          <HeadersRoot>
            <HeadersCenter>
              <H1>Tko smo mi?</H1>
                <PSubheading>
                  Psihologinja i ferovac u potrazi za avanturom - i odličnom fotografijom!
                </PSubheading>
            </HeadersCenter>
          </HeadersRoot>
        </Cover>
        <ContentRoot>
          <AboutStory images={aboutImages}/>
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
  width: 80%;
  margin-top: 25px;
`

const ContentRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default AboutPage