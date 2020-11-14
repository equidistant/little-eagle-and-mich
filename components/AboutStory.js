import styled, { css } from 'styled-components'
import { H3, H2, AboutText} from './text'
import { useState } from 'react'
import Link from 'next/link'

const AboutStory = ({ images }) => {
	return (
		<Root>
			<Center>
				<SH2>Mi o nama</SH2>
				<Row>
					<Column>
						<PortraitImg src={images[0]}/>
						<AboutText margintop='11px'>Želimo obići cijeli svijet</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[1]}/>
						<AboutText margintop='11px'>sa što više kampiranja,</AboutText>
					</Column>
				</Row>
			</Center>
			<LandscapeRow>
				<LandscapeColumn>
					<LandscapeImg src={images[2]} />
					<AboutText margintop='11px'>i obaveznim hammockom.</AboutText>
				</LandscapeColumn>
			</LandscapeRow>
			<Center>
				<Row>
					<Column>
						<PortraitImg src={images[3]}/>
						<AboutText margintop='11px'>Volimo zimske radosti,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[4]}/>
						<AboutText margintop='11px'>volimo riječne radosti,</AboutText>
					</Column>
				</Row>
				<Row>
					<Column>
						<PortraitImg src={images[5]}/>
						<AboutText margintop='11px'>volimo morske radosti,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[6]}/>
						<AboutText margintop='11px'>netko ih ipak voli malo više.</AboutText>
					</Column>
				</Row>
				<Row>
					<Column>
						<PortraitImg src={images[7]}/>
						<AboutText margintop='11px'>Netko malo više voli ples,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[8]}/>
						<AboutText margintop='11px'>a oboje volimo promatrati svijet naopako.</AboutText>
					</Column>
				</Row>
			</Center>
			<LandscapeRow>
				<LandscapeColumn>
					<LandscapeImg src={images[9]} />
					<AboutText margintop='11px'>Ovo je naše najdraže mjesto,</AboutText>
				</LandscapeColumn>
			</LandscapeRow>
			<Center>
				<Row>
					<Column>
						<PortraitImg src={images[10]}/>
						<AboutText margintop='11px'>kiša nam ne smeta,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[11]}/>
						<AboutText margintop='11px'>a zalaske ne propuštamo,</AboutText>
					</Column>
				</Row>
				<Row>
					<Column>
						<PortraitImg src={images[12]}/>
						<AboutText margintop='11px'>Uživamo u koncertima na otvorenom,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[13]}/>
						<AboutText margintop='11px'>u kino ne idemo, ali kad idemo, slikamo selfie.</AboutText>
					</Column>
				</Row>
				<Row>
					<Column>
						<PortraitImg src={images[14]}/>
						<AboutText margintop='11px'>Znamo biti lijepi,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[15]}/>
						<AboutText margintop='11px'>i slučajno se spariti</AboutText>
					</Column>
				</Row>
			</Center>
			<LandscapeRow>
				<LandscapeColumn>
					<LandscapeImg src={images[16]} />
					<AboutText margintop='11px'>nekad i pretjeramo,</AboutText>
				</LandscapeColumn>
			</LandscapeRow>
			<Center>
				<Row>
					<Column>
						<PortraitImg src={images[17]}/>
						<AboutText margintop='11px'>Zanimaju nas kojekakve ludosti,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[18]}/>
						<AboutText margintop='11px'>netko skače glavom bez obzira,</AboutText>
					</Column>
				</Row>
				<Row>
					<Column>
						<PortraitImg src={images[19]}/>
						<AboutText margintop='11px'>netko je ipak malo zabrinut,</AboutText>
					</Column>
					<Column marginleft='20px'>
						<PortraitImg src={images[20]}/>
						<AboutText margintop='11px'>Ponekad se potučemo,</AboutText>
					</Column>
				</Row>
			</Center>
			<LandscapeRow>
				<LandscapeColumn>
					<FinalImg src={images[21]}/>
					<AboutText margintop='11px'>ali se i dalje volimo!</AboutText>
				</LandscapeColumn>
			</LandscapeRow>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`

const Center = styled.div`
	display: flex;
	flex-direction: column;
	width: 940px;
	@media only screen and (max-width: 1079px) {
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const SH2 = styled(H2)`
	margin-top: 130px;
	@media only screen and (max-width: 1079px) {
		margin-top: 100px;
	}
	@media only screen and (max-width: 660px) {
		margin-top: 75px;
	}
`

const Row = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  @media only screen and (max-width: 660px) {
	flex-direction: column;
	}
`

const LandscapeRow = styled.div`
  width: 940px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'};
  @media only screen and (max-width: 1079px) {
	width: 525px;
}
@media only screen and (max-width: 660px) {
	width: 100%;
}

`

const Column = styled.div`
	display: column;
	align-items: center;
	justify-content: flex-start;
	margin-left: ${props => props.marginleft ? props.marginleft : 0};
	@media only screen and (max-width: 660px) {
		width: 100%;
		margin-left: 0;
		margin-top: ${props => props.marginleft ? props.marginleft : 0};
		}
`

const PortraitImg = styled.img`
  width: 100%;
  height: 352px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
	border-radius: 20px 2px;
	object-fit: cover;
`

const LandscapeColumn = styled.div`
	display: column;
	align-items: center;
	justify-content: flex-start;
	object-fit: cover;
	margin-left: ${props => props.marginleft ? props.marginleft : 0};
	@media only screen and (max-width: 660px) {
		width: 100%;
		margin-top: ${props => props.marginleft ? props.marginleft : 0};
		justify-content: center;
	}
`

const LandscapeImg = styled.img`
  width: 100%;
  height: 400px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
	border-radius: 20px 2px;	
	margin-right: ${props => props.marginright ? props.marginright : 0};
`

const FinalImg = styled.img`
  width: 100%;
  height: 450px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
	border-radius: 20px 2px;	
	object-fit: cover;
`


export default AboutStory