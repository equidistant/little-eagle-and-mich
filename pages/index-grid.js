import styled from 'styled-components'
import { coverHomeImg } from '../images'
import { H1, H2, H3, Subheading, Card, DateLocation, Subtitle } from '../components'

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await res.json()

  return { props: { orange: posts[0], green: posts[1], blue: posts[2] } }
}

const HomePage = ({ orange, green, blue }) => {
	return (
    <Root>
        <Cover img={coverHomeImg}>
          <Headers>
            <H1>LittleEagle&Mich</H1>
              <PSubheading>
                Putopisne ideje i savjeti za ljude koji vole putovati, no nemaju puno vremena.
              </PSubheading>
            <SubheadingButton>
              Kreni na avanturu
            </SubheadingButton>
          </Headers>
        </Cover>
        <Content>
            <H2First>
              Istraži putopise i savjete
            </H2First>
            <OrangeCardRoot>

            </OrangeCardRoot>
            <GreenCardRoot>

            </GreenCardRoot>
            <BlueCardRoot>

            </BlueCardRoot>
            <H2Second>Najnoviji putopisi</H2Second>
            <OrangeTextCardRoot>
              <OrangeTextCardBackground />
              <TextCardContent>
                <DateLocation>15.02.2020 | Lokacija</DateLocation>
                <H3>{orange.longTitle}</H3>
                <Subtitle>
                  {orange.description}
                </Subtitle>
              </TextCardContent>
            </OrangeTextCardRoot>
            <GreenTextCardRoot>
              <GreenTextCardBackground />
              <TextCardContent>
                <DateLocation>15.02.2020 | Lokacija</DateLocation>
                <H3>{green.longTitle}</H3>
                <Subtitle>
                  {green.description}
                </Subtitle>
              </TextCardContent>
            </GreenTextCardRoot>
            <BlueTextCardRoot>
              <BlueTextCardBackground />
              <TextCardContent>
                <DateLocation>15.02.2020 | Lokacija</DateLocation>
                <H3>{blue.longTitle}</H3>
                <Subtitle>
                  {blue.description}
                </Subtitle>
              </TextCardContent>
            </BlueTextCardRoot>
            <TextCardImageRoot>
              <TextCardImage src={orange.coverImg}/>
            </TextCardImageRoot>
        </Content>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
`

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(28, 57, 74, 0.3), rgba(28, 57, 74, 0.3)), url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: 1fr min-content 1fr;
  grid-template-columns: 1fr repeat(12, 60px) 1fr;
  grid-column-gap: 20px;
`

const Headers = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  grid-column: 3 / -1;
  grid-row: 2 / 3;
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

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 130px min-content 30px 310px 130px 130px 40px 130px 30px 130px 30px 130px;
  grid-template-columns: 1fr repeat(12, 60px) 1fr;
  grid-column-gap: 20px;
`

const H2First = styled(H2)`
  grid-row: 2 / 3;
  grid-column: 3 / -1;
`

const OrangeCardRoot = styled.div`
	background: linear-gradient(0deg, rgba(232, 168, 124, 0.8), rgba(232, 168, 124, 0.8)), url(${props => props.img});
	border-radius: 20px 2px;
  grid-column: 3 / span 3;
  grid-row: 4 / 5;
`

const GreenCardRoot = styled.div`
	background: linear-gradient(0deg, rgba(65, 179, 163, 0.8), rgba(65, 179, 163, 0.8)), url(${props => props.img});
	border-radius: 20px 2px;
  grid-column: 6 / span 3;
  grid-row: 4 / 5;
`

const BlueCardRoot = styled.div`
	background:  linear-gradient(0deg, rgba(130, 198, 219, 0.8), rgba(130, 198, 219, 0.8)), url(${props => props.img});
	border-radius: 20px 2px;
  grid-column: 9 / span 3;
  grid-row: 4 / 5;
`

const H2Second = styled(H2)`
  grid-row: 6 / 7;
  grid-column: 3 / -1;
`

const OrangeTextCardRoot = styled.div`
  height: min-content;
  position: relative;
  grid-row: 8 / 9;
  grid-column: 3 / span 6;
` 

const GreenTextCardRoot = styled.div`
  height: min-content;
  position: relative;
  grid-row: 10 / 11;
  grid-column: 3 / span 6;
` 

const BlueTextCardRoot = styled.div`
  height: min-content;
  position: relative;
  grid-row: 12 / 13;
  grid-column: 3 / span 6;
` 

const TextCardBackground = styled.div`
  border-radius: 20px 2px;
  position: absolute;
  top: -10px;
  right: 10px;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const OrangeTextCardBackground = styled(TextCardBackground)`
  background: #E8A87C;
`

const GreenTextCardBackground = styled(TextCardBackground)`
  background: #41B3A3;
`

const BlueTextCardBackground = styled(TextCardBackground)`
  background: #82C6DB;
`

const TextCardContent = styled.div`
  background: #FFFFFF;
  border-radius: 20px 2px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-left: 28.75px;
  padding-top: 9px;
  padding-bottom 22px;
  padding-right: 10px;
`

const TextCardImageRoot = styled.div`
  width: 550px;
  height: 436px;
  grid-row: 8 / -1;
  grid-column: 10 / -1;
  position: relative;
`

const TextCardImage = styled.img`
  width: 100%;
  border-radius: 20px 5px;
`

export default HomePage