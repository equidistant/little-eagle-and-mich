import Link from 'next/link'
import styled, { css } from 'styled-components'
import { H2, H3, Body, Subtitle, DateLocation,  Indie} from './text'
import BlogCategoryCard from './BlogCategoryCard.js.js'
import { leLogoImg, vector5Img } from '../images'

const LittleEaglePhoto = ({ color, posts }) => {

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

const Center = styled.div`
	width: 760px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 130px;	
	margin-bottom: 130px;
`

const Column = styled.div`
	width: min-content;
	display: flex;
	flex-direction: column;
`


const SH3 = styled(H3)`
`

const SBody = styled(Body)`
	margin-top: 10px;
	width: 379px;
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
`

const Vector6 = styled.img`
	width: 32.78px;
	height: 31px;

	margin-top: 10px;
	margin-left: 80px;
`

const SIndie = styled(Indie)`
	transform: rotate(8.11deg);
	margin-left: 120px;
	margin-top: -30px;
`
export default LittleEaglePhoto