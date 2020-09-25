import styled from 'styled-components'
import { H2, H4, Subtitle } from './text'
import Link from 'next/link'

const Newsletter = () => {
	return (
		<Root>
			<Box>
				<H2>Saznaj o najnovijim putovanjima</H2> 
				<Subtitle>Kada god objavimo novi putopis ili članak sa savjetima o putovanjima, dobit ćeš obavijest ako se priključiš mailing listi!</Subtitle>
				<Row>
					<InputEmail type='text' placeholder='TVOJA EMAIL ADRESA'/>
					<SendButton>Pošalji</SendButton>
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
	background: #FFF2E9;
	margin-bottom: 130px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 20px 2px;
`

const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 26px;
`

const Box = styled.div`
	width: 460px;
	display: row;
	align-items: center;
	justify-content: center;
	padding-bottom: 60px;
`

const InputEmail = styled.input`
	background: #FFFCF9;
	border: 1px solid #E8A87C;
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
`

const SendButton = styled.button`
	border: none;
	background: #E8A87C;
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
`



export default Newsletter