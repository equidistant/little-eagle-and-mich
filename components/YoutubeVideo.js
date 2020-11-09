import styled from 'styled-components'
import { H2, H4 } from './text'
import Link from 'next/link'

const WhoAreWe = ({ title, src, href, buttonText }) => {
	return (
		<Root>
			<Row>
				<H2>{title}</H2> 
			</Row>
			<YoutubeVideo src={src} frameborder="0" allowfullscreen/>
			<VisitArticleButtonRow>
				<VisitArticleButton href={href} name={buttonText}/>
			</VisitArticleButtonRow>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: center;
	width: 780px;
	@media only screen and (max-width: 1079px) {
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 175px;
	@media only screen and (max-width: 1079px) {
		margin-top: 130px;
	}
`

const SLink = styled.a`
	border-radius: 20px 2px;
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 25px;
	padding-right: 25px;
	display: flex;
	cursor: pointer;
	text-decoration: none;
	border: 3px solid #E8A87C;
	box-sizing: border-box;
	border-radius: 20px 2px;
	width: max-content;
`


const YoutubeVideo = styled.iframe`
	width: 780px;
	height: 440px;
	margin-top: 30px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 20px 2px;
	border: none;
	@media only screen and (max-width: 1079px) {
		width: 525px;
		height: 290px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
		height: 160px;
	}
`

const VisitArticleButtonRow = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;
`

const VisitArticleButton = ({ href, name }) => {
	return (
	  <Link href={href} passHref>
		  <SLink>
			  <H4 color='orange'>{name}</H4>
		  </SLink>
	  </Link>
	)
  }
  

export default WhoAreWe