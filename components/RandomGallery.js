import styled from 'styled-components'
import Link from 'next/link'
import { JustifyGallery } from './JustifyGallery'
import { randomImg, vector1Img } from '../images'
import { Indie, H4 } from './text'

const RandomGallery = ({ handleNext, title, longTitle, ...rest }) => {
	return (
		<Root>
			<Row>
				<RandomImg src={randomImg} onClick={handleNext}/>
				<Vector1Img src={vector1Img}/>
				<IndiePressForRandom>pritisni za otkrivanje novih fotki</IndiePressForRandom>
			</Row>
			<JustifyGallery {...rest} marginTop={'23px'} gap={'20px'}/>
			<VisitGalleryRow>
				<VisitGalleryButton href={`/gallery/${title}`} name={longTitle}/>
			</VisitGalleryRow>
			
		</Root>
	)
}

const Root = styled.div`
	margin-top: 130px;
	width: 100%;
	height: min-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #FFF2E9;
`

const Row = styled.div`
	display: flex;
	width: 940px;
	align-items: center;
	margin-top: -30px;
`

const RandomImg = styled.img`
	margin-left: 30px;
	width: 64px;
	height: 64px;
	&:hover {
		cursor: pointer;
	}
`

const Vector1Img = styled.img`
	width: 93px;
	height: 23px;
	margin-left: 10px;
`

const IndiePressForRandom = styled(Indie)`
	transform: rotate(2.53deg);
	margin-left: 23px;
`

const SLink = styled.a`
	background: #E8A87C;
	border-radius: 20px 2px;
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 40px;
	padding-right: 40px;
	display: flex;
	cursor: pointer;
	text-decoration: none;
`

const SH4Dark = styled(H4)`
	color: #434850;
`
const SH4White= styled(H4)`
	margin-left: 10px;
	color: #FFFCF9;
`

const VisitGalleryRow = styled.div`
	margin-top: 40px;
	margin-bottom: 40px;
`

const VisitGalleryButton = ({ href, name }) => {
  return (
    <Link href={href} passHref>
		<SLink>
			<SH4Dark>Posjeti Galeriju:</SH4Dark><SH4White>{name}</SH4White>
		</SLink>
    </Link>
  )
}


export default RandomGallery