import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { JustifyGallery } from './JustifyGallery'
import { randomImg, vector1Img } from '../images'
import { Indie, H4 } from './text'

const RandomGallery = ({ handleNext, title, longTitle, ...rest }) => {
	const router = useRouter()
	const open = (id) => {
		router.push(`/gallery/${title}?activeImg=${id}`)
	}
	return (
		<Root>
			<Row>
				<RandomImg src={randomImg} onClick={handleNext}/>
				<Vector1Img src={vector1Img}/>
				<IndiePressForRandom>pritisni za otkrivanje novih fotki</IndiePressForRandom>
			</Row>
			<JustifyGallery {...rest} marginTop={'23px'} gap={'20px'} title={title} open={open}/>
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
	@media only screen and (max-width: 1079px) {
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const RandomImg = styled.img`
	margin-left: 30px;
	width: 64px;
	height: 64px;
	&:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 1079px) {
		margin-left: -30px;
	}
	@media only screen and (max-width: 660px) {
		width: 52px;
		height: 52px;
	}
`

const Vector1Img = styled.img`
	width: 93px;
	height: 23px;
	margin-left: 10px;
	@media only screen and (max-width: 660px) {
		width: 70px;
		height: 18px;
	}
`

const IndiePressForRandom = styled(Indie)`
	transform: rotate(2.53deg);
	text-align: center;
	margin-left: 20px;
	@media only screen and (max-width: 660px) {
		margin-left: 5px;
		width: 223px;
		flex: 1;
	}
	
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
	@media only screen and (max-width: 1079px) {
		margin-top: 30px;
		margin-bottom: 30px;
	}
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