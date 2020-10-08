import styled, { css } from 'styled-components'
import { H2, H3, Subtitle } from './text'
import Link from 'next/link'

const BlogCategories = () => {
	return (
		<Root>
			<Center>
				<SH2>Istraži putopise i savjete</SH2>
				<BlogCards>
					<BlogCategoryCard href='/weekend' color='orange' title='Vikend izleti' description='Savjeti i ideje oko vikend izleta, gdje i kako kampirati, što posjetiti.' img='https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/travels/img128.jpg'/>
					<BlogCategoryCard href='/local' color='green' title='Lokalna putovanja' description='Dulja (dva-tri tjedna) putovanja u Hrvatskoj i okolnim zemljama. ' img='https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/travels/img128.jpg'/>
					<BlogCategoryCard href='/distant' color='blue' title='Daleke avanture' description='Dulja putovanja u daleke zemlje - što vidjeti i kako se pripremiti.' img='https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/travels/img128.jpg'/>
				</BlogCards>
			</Center>	
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 940px;
`

const Center = styled.div`
	width: min-content;
	display: flex;
	flex-direction: column;
	margin-left: 80px;
`

const SH2 = styled(H2)`
	margin-top: 130px;
`

const BlogCards = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 40px;
`

const NavLink = ({ href, children }) => {
	return (
	  <Link href={href} passHref>
		{children}
	  </Link>
	)
  }

const BlogCategoryCard = ({ color, href, title, description, img }) => {
	return (
		<NavLink href={href}>
			<CardRoot color={color} img={img}>
				<Overlay color={color} img={img}/>
				<Text>
					<SH3>{title}</SH3>
					<SSubtitle>{description}</SSubtitle>
				</Text>
			</CardRoot>
		</NavLink>
	)
}


const CardRoot = styled.div`
	position: relative;
	width: 220px;
	height: 310px;
	display: flex;
	flex-direction: column;
	margin-left: 30px;
	&:first-of-type {
		margin-left: 0;
	}
	border-radius: 20px 2px;
	background: url(${props => props.img});
	display: flex;
	flex-direction: row;
	justify-content: center;
	overflow: hidden;
	&:hover {
		cursor: pointer;
	}
	z-index: 3;
`

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: opacity .2s cubic-bezier(.4,0,.2,.1);
	${props => props.color === 'orange' && css`
		opacity: 0.8;
		${CardRoot}:hover &{
			opacity: 1;
		}
		background: linear-gradient(0deg, rgba(232, 168, 124, 1), rgba(232, 168, 124, 1));
	`}
	${props => props.color === 'green' && css`
		opacity: 0.8;
		${CardRoot}:hover &{
			opacity: 1;
		}
		background: linear-gradient(0deg, rgba(65, 179, 163, 1), rgba(65, 179, 163, 1));
	`}
	${props => props.color === 'blue' && css`
		opacity: 0.8;
		${CardRoot}:hover &{
			opacity: 1;
		}
		background:  linear-gradient(0deg, rgba(130, 198, 219, 1), rgba(130, 198, 219, 1));
	`}
	border-radius: 20px 2px;
`

const Text = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 2;
	padding-left: 20px;
	align-items: flex-start;
	transition: transform .2s cubic-bezier(.4,0,.2,.1);
	transform: translateY(200px);
	${CardRoot}:hover &{
		transform: translateY(60px);
	}
`

const SH3 = styled(H3)`
	color: white;
	width: 60%;
	transform: rotate(-4.44deg);
`

const SSubtitle = styled(Subtitle)`
	margin-top: 60px;
	color: white;
	width: 70%;
	transition: margin .2s cubic-bezier(.4,0,.2,.1);
	${CardRoot}:hover &{
		margin-top: 30px;
	}
	text-align: start;
`

export default BlogCategories