import styled from 'styled-components'
import { H3, H4, Subtitle } from './text'
import Link from 'next/link'

const Newsletter = ({ color, bgColor }) => {
	return (
		<Root bgColor={bgColor}>
			<Box>
				<H3>Saznaj o najnovijim putovanjima</H3> 
				<SSubtitle>Kada god objavimo novi putopis ili članak sa savjetima o putovanjima, dobit ćeš obavijest ako se priključiš mailing listi!</SSubtitle>
				<Row>
					<InputEmail color={color} type='text' placeholder='TVOJA EMAIL ADRESA'/>
					<SendButton color={color}>Pošalji</SendButton>
				</Row>
			</Box>
		</Root>
	)
}

const Root = styled.div`
	margin-top: 130px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 780px;
	padding-top: 40px;
	background: ${props => props.bgColor};
	margin-bottom: 130px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 20px 2px;
	@media only screen and (max-width: 1079px) {
		width: 525px;
		margin-top: 100px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 26px;
	@media only screen and (max-width: 1079px) {
		flex-direction: column;
		justify-content: center;
		margin-top: 15px;
	}
`

const Box = styled.div`
	width: 460px;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 60px;
	@media only screen and (max-width: 1079px) {
		padding-bottom: 40px;
	}
	@media only screen and (max-width: 660px) {
		width: 280px;
	}
`

const SSubtitle = styled(Subtitle)`
	margin-top: 5px;
	@media only screen and (max-width: 1079px) {
		margin-top: 10px;
		width: 200px;
	}
`

const InputEmail = styled.input`
	background: #FFFCF9;
	border: 1px solid ${props => props.color};
	box-sizing: border-box;
	border-radius: 20px 2px;
	height: 40px;
	font-family: Mulish;
	text-align: center;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	color: #989DA3;
	width: 300px;
	@media only screen and (max-width: 1079px) {
		width: 200px;
	}
`

const SendButton = styled.button`
	border: none;
	background: ${props => props.color};
	border-radius: 20px 2px;
	width: 140px;
	height: 40px;
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	text-transform: uppercase;
	color: white;
	cursor: pointer;
	@media only screen and (max-width: 1079px) {
		margin-top: 20px;
	}
`



export default Newsletter