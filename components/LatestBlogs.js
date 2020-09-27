import styled, { css } from 'styled-components'
import { H3, H2, Subtitle, DateLocation } from './text'
import { useState } from 'react'

const useHover = () => {
	const [index, setIndex] = useState(0)
	const handleMouseEnter = (newIndex) => {
		setIndex(newIndex)
	}
	return [index, handleMouseEnter]
}

const LatestBlogs = ({ posts }) => {
	const [index, handleMouseEnter] = useHover()
	return (
		<Root>
			<Center>
				<SH2>Najnoviji putopisi</SH2>
				<Row>
					<Cards>
						<OrangeCard onMouseEnter={() => handleMouseEnter(0)}>
							<TextCardBackground color='orange'/>
							<TextCardContent>
								<DateLocation>15.02.2020 | Lokacija</DateLocation>
								<SH3 active={index === 0} color='orange'>{posts[0].longTitle}</SH3>
								<Subtitle textAlign='start'>
								{posts[0].description}
								</Subtitle>
							</TextCardContent>
						</OrangeCard>
						<GreenCard onMouseEnter={() => handleMouseEnter(1)}>
							<TextCardBackground color='green'/>
							<TextCardContent>
								<DateLocation>15.02.2020 | Lokacija</DateLocation>
								<SH3 active={index === 1} color='green'>{posts[1].longTitle}</SH3>
								<Subtitle textAlign='start'>
								{posts[1].description}
								</Subtitle>
							</TextCardContent>
						</GreenCard>
						<BlueCard onMouseEnter={() => handleMouseEnter(2)}>
							<TextCardBackground color='blue'/>
							<TextCardContent>
								<DateLocation>15.02.2020 | Lokacija</DateLocation>
								<SH3 active={index === 2} color='blue'>{posts[2].longTitle}</SH3>
								<Subtitle textAlign='start'>
								{posts[2].description}
								</Subtitle>
							</TextCardContent>
						</BlueCard>
					</Cards>
					<ImageRoot>
						<Image src={posts[0].coverImg} active={index === 0}/>
						<Image src={posts[1].coverImg} active={index === 1}/>
						<Image src={posts[2].coverImg} active={index === 2}/>
					</ImageRoot>
				</Row>

			</Center>	
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 940px;
`

const Center = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 80px;
`

const SH2 = styled(H2)`
	margin-top: 130px;
`

const Row = styled.div`
	display: flex;
	width: 100%;
	height: min-content;
	margin-top: 40px;
`

const Cards = styled.div`
	height: 100%;
	display: flex;	
	flex-direction: column;
	width: 460px;
	margin-left: 10px;
`

const OrangeCard = styled.div`
	position: relative;
	background: linear-gradient(0deg, rgba(232, 168, 124, 0.8), rgba(232, 168, 124, 0.8)), url(${props => props.img});
	border-radius: 20px 2px;
	cursor: pointer;
`

const GreenCard = styled.div`
	margin-top: 30px;
	position: relative;
	background: linear-gradient(0deg, rgba(65, 179, 163, 0.8), rgba(65, 179, 163, 0.8)), url(${props => props.img});
	border-radius: 20px 2px;
	cursor: pointer;
`

const BlueCard = styled.div`
	margin-top: 30px;
	position: relative;
	background:  linear-gradient(0deg, rgba(130, 198, 219, 0.8), rgba(130, 198, 219, 0.8)), url(${props => props.img});
	border-radius: 20px 2px;
	cursor: pointer;
`

const TextCardBackground = styled.div`
  border-radius: 20px 2px;
  position: absolute;
  top: -10px;
  right: 10px;
  width: 100%;
  height: 100%;
  z-index: -1;
  ${props => props.color === 'orange' && css`
  	background: #E8A87C;
  `}
  ${props => props.color === 'green' && css`
	background: #41B3A3;
	`}
	${props => props.color === 'blue' && css`
	background: #82C6DB;
	`}
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

const SH3 = styled(H3)`
	transition: color .2s cubic-bezier(.4,0,.2,.1);
	${props => props.active && props.color === 'orange' && css`
		color: #E8A87C;
	`}
	${props => props.active && props.color === 'green' && css`
		color: #41B3A3;
	`}
	${props => props.active && props.color === 'blue' && css`
		color: #82C6DB;
	`}
`

const ImageRoot = styled.div`
	margin-top: -10px;
	margin-left: 50px;
	position: relative;
`

const Image = styled.img`
	width: 550px;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 20px 5px;
	opacity: 0;
	transition: opacity .4s cubic-bezier(.4,0,.2,.1);
	${props => props.active && css`
		opacity: 1;
	`}
`


export default LatestBlogs