import styled from 'styled-components'
import { H2, H4, Body, Indie } from './text'
import Link from 'next/link'
import { vector2Img, vector3Img, anaImg, michImg } from '../images'

const WhoAreWe = () => {
	return (
		<Root>
			<LeftColumn>
				<H2>Tko smo mi?</H2>
				<SBody color={'dark'}>Psihologinja i programer koji najviše od svega vole putovati, kampirati i puno to fotografirati. </SBody>
				<SBody color={'dark'}>Svoja iskustva dijelimo kako bi drugi “umjereni avanturisti” poput nas mogli pronaći nove ideje i savjete kako - i gdje - se dobro provesti.  </SBody>
				<MoreAboutUsButtonRow>
					<MoreAboutUsButton href={`/about`} name='Više o nama'/>
				</MoreAboutUsButtonRow>
			</LeftColumn>
			<RightColumn>
				<Row margintop='10px'>
					<Vector2Img src={vector2Img}/>
					<IndieRotatedLeft>voli sunce, fotografiju i sladoled</IndieRotatedLeft>
				</Row>
				<Row>
					<LeftImageCard src={anaImg} />
					<RightImageCard src={michImg} />
				</Row>
				<Column>
					<Vector3Img src={vector3Img}/>
					<IndieRotatedRight>voli hlad, kodiranje i čips</IndieRotatedRight>
				</Column>
				<MoreAboutUsButtonRow2>
					<MoreAboutUsButton href={`/about`} name='Više o nama'/>
				</MoreAboutUsButtonRow2>
			</RightColumn>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;
	justify-content: center;
	width: 940px;
	@media only screen and (max-width: 1079px) {
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		flex-direction: column;
		width: 300px;
	}
`

const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 220px;
	margin-top: 130px;
	@media only screen and (max-width: 1079px) {
		margin-top: 100px;
	}
`

const SBody = styled(Body)`
	margin-top: 20px;
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

const MoreAboutUsButtonRow = styled.div`
	margin-top: 30px;
	@media only screen and (max-width: 660px) {
		display: none;
	}
`

const MoreAboutUsButtonRow2 = styled.div`
	margin-top: 30px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (min-width: 660px) {
		display: none;
	}
`

const MoreAboutUsButton = ({ href, name }) => {
	return (
	  <Link href={href} passHref>
		  <SLink>
			  <H4 color='orange'>{name}</H4>
		  </SLink>
	  </Link>
	)
  }
  
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 102px;
  margin-left: 100px;
  @media only screen and (max-width: 1079px) {
	margin-left: 20px;
}
@media only screen and (max-width: 660px) {
	margin-top: 20px;
	margin-left: 0px;
}
`

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (max-width: 660px) {
	justify-content: flex-start;
}
	margin-top: ${props => props.margintop ? props.margintop : 0};
`

const Vector2Img = styled.img`
	margin-top: 20px;
	margin-bottom: 13px;
	width: 19px;
	height: 34px;
	@media only screen and (max-width: 1079px) {
		margin-top: 10px;
		width: 14px;
		height: 25px;
	}
	@media only screen and (max-width: 660px) {
		margin-left: 20px;
		margin-top: 40px;
	}
`

const IndieRotatedLeft = styled(Indie)`
	transform: rotate(2.53deg);
	margin-left: 17px;
	width: max-content;
	@media only screen and (max-width: 660px) {
		transform: rotate(-4.59deg);
	}
`

const IndieRotatedRight = styled(Indie)`
	transform: rotate(2.53deg);
	margin-left: 17px;
	width: max-content;
`

const LeftImageCard = styled.img`
  width: 220px;
  height: 310px;
  border-radius: 20px 2px;
  @media only screen and (max-width: 1079px) {
	width: 162px;
	height: 228px;
	}
	@media only screen and (max-width: 660px) {
		width: 125px;
		height: 177px;
		}
`

const RightImageCard = styled.img`
  width: 220px;
  height: 310px;
  border-radius: 20px 2px;
  margin-left: 20px;
  margin-top: 40px;
  @media only screen and (max-width: 1079px) {
	width: 162px;
	height: 228px;
	margin-top: 20px;
	margin-left: 10px;
	}
	@media only screen and (max-width: 660px) {
		width: 125px;
		height: 177px;
		}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-right: 75px;
  margin-top: -30px;
`

const Vector3Img = styled.img`
	margin-top: 20px;
	margin-bottom: 13px;
	width: 45px;
	height: 30px;
	margin-left: 10px;
	@media only screen and (max-width: 1079px) {
		margin-bottom: 0;
		width: 33px;
		height: 22px;
	}
	@media only screen and (max-width: 660px) {
		margin-right: 10px;
	}
`

export default WhoAreWe