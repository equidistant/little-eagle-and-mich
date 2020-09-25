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
				<Row>
					<Vector2Img src={vector2Img}/>
					<IndieRotated>voli sunce, fotografiju i sladoled</IndieRotated>
				</Row>
				<Row>
					<LeftImageCard src={anaImg} />
					<RightImageCard src={michImg} />
				</Row>
				<Column>
					<Vector3Img src={vector3Img}/>
					<IndieRotated>voli hlad, kodiranje i čips</IndieRotated>
				</Column>
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
`

const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 220px;
	margin-top: 130px;
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
`

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`

const Vector2Img = styled.img`
	margin-top: 20px;
	margin-bottom: 13px;
	width: 19px;
	height: 34px;
`

const IndieRotated = styled(Indie)`
	transform: rotate(2.53deg);
	margin-left: 17px;
`

const LeftImageCard = styled.img`
  width: 220px;
  height: 310px;
  border-radius: 20px 2px;
`

const RightImageCard = styled.img`
  width: 220px;
  height: 310px;
  border-radius: 20px 2px;
  margin-left: 20px;
  margin-top: 40px;
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
`

export default WhoAreWe