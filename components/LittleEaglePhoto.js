import Link from 'next/link'
import styled, { css } from 'styled-components'
import { H2, H3, Body, Subtitle, DateLocation,  Indie} from './text'
import { leLogoImg, vector5Img } from '../images'
import { useWindow } from '../common'

const LittleEaglePhoto = ({ color, posts }) => {
	const [width] = useWindow()
	if (width >= 1079) {
		return (
			<Root>
				<Center>
					<Column>
						<SH3>Želiš imati ovakve fotografije za sebe?</SH3>
						<SBody color='dark'>Imaš sreće jer Ana nudi usluge fotografiranja! </SBody>
						<SBody color='dark'>
							Javi joj se putem <LittleEagleLink href='https://www.littleeaglephoto.com' target='_blank'>littleeaglephoto.com</LittleEagleLink> i naruči se za fotkanje!
						</SBody>
					</Column>
					<Column>
						<LittleEagleLink href='https://www.littleeaglephoto.com' target='_blank'>
							<LittleEagleLogo src={leLogoImg}/>
						</LittleEagleLink>
						<Vector6 src={vector5Img} />
						<SIndie>klikni!</SIndie>
					</Column>

				</Center>
			</Root>
		)
	} else if (width <= 1079 && width > 0) {
		return (
			<Root>
				<CenterWrap>
					<SH3>Želiš imati ovakve fotografije za sebe?</SH3>
					<Center>
						<Column>
							<SBody color='dark'>Imaš sreće jer Ana nudi usluge fotografiranja! </SBody>
							<SBody color='dark'>
								Javi joj se putem <LittleEagleLink href='https://www.littleeaglephoto.com' target='_blank'>littleeaglephoto.com</LittleEagleLink> i naruči se za fotkanje!
							</SBody>
						</Column>
						<Column>
							<LittleEagleLink href='https://www.littleeaglephoto.com' target='_blank'>
								<LittleEagleLogo src={leLogoImg}/>
							</LittleEagleLink>
							<Vector6 src={vector5Img} />
							<SIndie>klikni!</SIndie>
						</Column>

					</Center>
				</CenterWrap>
			</Root>
		)
	} 
	else {
		return (
			<Root>
				<Center>
					Loading...
				</Center>
			</Root>
		)
	}
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-color: ${props => props.theme.color.lightOrange};
	margin-top: 150px;
`

const CenterWrap = styled.div`
	width: 520px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const Center = styled.div`
	width: 760px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 130px;	
	margin-bottom: 130px;
	@media only screen and (max-width: 1079px) {
		align-items: flex-start;
		width: 100%;
		margin-top: 20px;
		padding-right: 150px;
	}
	@media only screen and (max-width: 660px) {
		padding-right: 0px;
		margin-top:
	}
`

const Column = styled.div`
	width: min-content;
	display: flex;
	flex-direction: column;
`

const SH3 = styled(H3)`
	@media only screen and (max-width: 1079px) {
		margin-top: 85px;
	}
	@media only screen and (max-width: 1079px) {
		width: 50%;
	}
`

const SBody = styled(Body)`
	margin-top: 10px;
	&:first-of-type {
		margin-top: 0;
	}
	width: 379px;
	@media only screen and (max-width: 1079px) {
		width: 224px;
	}
	@media only screen and (max-width: 660px) {
		width: 136px;
	}
`

const LittleEagleLink = styled.a`
	color: #E8A87C;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`

const LittleEagleLogo = styled.img`
	width: 140px;
	height: 140px;
	@media only screen and (max-width: 1079px) {
		width: 100px;
		height: 100px;
	}
`

const Vector6 = styled.img`
	width: 32.78px;
	height: 31px;

	margin-top: 10px;
	margin-left: 80px;
	@media only screen and (max-width: 1079px) {
		margin-top: 0px;
		margin-left: 60px;
	}
`

const SIndie = styled(Indie)`
	transform: rotate(8.11deg);
	margin-left: 120px;
	margin-top: -30px;
	@media only screen and (max-width: 1079px) {
		margin-left: 100px;
		margin-top: -20px;
	}
`
export default LittleEaglePhoto