import styled from 'styled-components'
import { useWindow } from '../common'
import { H2, H4, Body, Indie, Subheading } from './text'
import Link from 'next/link'
import { vector3WhiteImg, vector4Img, vector7Img, copyrightImg, githubImg, instagramImg, youtubeImg } from '../images'

const Footer = () => {
	const [width] = useWindow()
	if (width >= 1079) {
		return (
			<Root>
				<IndieTop>
					<Vector4Img src={vector4Img}/>
					<IndieRotatedTop>Istraži još avantura</IndieRotatedTop>
				</IndieTop>
				<Center>
					<Links>
						<SiteLinks>
							<SmallColumn>
								<Subheading>O NAMA</Subheading>
								<NavLink href='/' name='Vikend izleti'/>
								<AbsoluteLink href='https://www.youtube.com/channel/UCdiTmZzxSp274IfUfa_zwgQ' target='_blank'>Naš Youtube</AbsoluteLink>
								<AbsoluteLink href='https://www.instagram.com/littleeagle.mich/' target='_blank'>Naš Instagram</AbsoluteLink>
							</SmallColumn>
							<SmallColumn>
								<Subheading>GALERIJE</Subheading>
								<NavLink href='/' name='Šri Lanka'/>
								<NavLink href='/' name='Kuba'/>
								<NavLink href='/' name='Slovenija'/>
							</SmallColumn>
							<SmallColumn>
								<Subheading>USLUGE</Subheading>
								<NavLink href='/' name='Fotografija:'/>
								<AbsoluteLink href='https://littleeaglephoto.com/' target='_blank'>Litte Eagle Photography</AbsoluteLink>
							</SmallColumn>
							<BigColumn>
								<Subheading>PUTOPISI</Subheading>
								<NavLink href='/' name='Jesenjski Kanjon'/>
								<NavLink href='/' name='Magloviti Grad'/>
								<NavLink href='/' name='10 Zanimljivosti o Šri Lanci'/>
							</BigColumn>
						</SiteLinks>
						<Icons>
							<a href='https://www.youtube.com/channel/UCdiTmZzxSp274IfUfa_zwgQ' target='_blank'>
								<Icon src={youtubeImg} />
							</a>
							<a href='https://www.instagram.com/littleeagle.mich/' target='_blank'>
								<Icon src={instagramImg} />
							</a>
							<a href='https://github.com/equidistant/little-eagle-and-mich-client' target='_blank'>
							<Icon src={githubImg} />
							</a>						
						</Icons>
					</Links>
				</Center>
				<IndieBottom>
					<Vector3WhiteImg src={vector3WhiteImg}/>
					<IndieRotatedBottom>dogovori se s Anom za fotkanje</IndieRotatedBottom>
				</IndieBottom>
				<Copyright>
					<CopyrightImg src={copyrightImg}/>
					<CopyrightText>
						Copyright: Little Eagle & Mich 2020
					</CopyrightText>
				</Copyright>			
			</Root>
		)
	} else if (width <= 1079 && width > 660) {
		return (
			<Root>
				<Center>
					<IndieTop>
						<Vector4Img src={vector4Img}/>
						<IndieRotatedTop>Istraži još avantura</IndieRotatedTop>
					</IndieTop>
					<Row>
						<SmallColumn>
							<Subheading>O NAMA</Subheading>
							<NavLink href='/' name='Vikend izleti'/>
							<AbsoluteLink href='https://www.youtube.com/channel/UCdiTmZzxSp274IfUfa_zwgQ' target='_blank'>Naš Youtube</AbsoluteLink>
							<AbsoluteLink href='https://www.instagram.com/littleeagle.mich/' target='_blank'>Naš Instagram</AbsoluteLink>
						</SmallColumn>
						<SmallColumn>
							<Subheading>GALERIJE</Subheading>
							<NavLink href='/' name='Šri Lanka'/>
							<NavLink href='/' name='Kuba'/>
							<NavLink href='/' name='Slovenija'/>
						</SmallColumn>
					</Row>
					<Row>
						<SmallColumn>
							<Subheading>USLUGE</Subheading>
							<NavLink href='/' name='Fotografija:'/>
							<AbsoluteLink href='https://littleeaglephoto.com/' target='_blank'>Litte Eagle Photography</AbsoluteLink>
						</SmallColumn>
						<SmallColumn>
							<Subheading>PUTOPISI</Subheading>
							<NavLink href='/' name='Jesenjski Kanjon'/>
							<NavLink href='/' name='Magloviti Grad'/>
							<NavLink href='/' name='10 Zanimljivosti o Šri Lanci'/>
						</SmallColumn>
					</Row>
					<Row>
						<IndieColumn>
							<IndieBottom>
								<Vector3WhiteImg src={vector3WhiteImg}/>
								<IndieRotatedBottom>dogovori se s Anom za fotkanje</IndieRotatedBottom>
							</IndieBottom>
						</IndieColumn>
						<Icons>
							<a href='https://www.youtube.com/channel/UCdiTmZzxSp274IfUfa_zwgQ' target='_blank'>
								<Icon src={youtubeImg} />
							</a>
							<a href='https://www.instagram.com/littleeagle.mich/' target='_blank'>
								<Icon src={instagramImg} />
							</a>
							<a href='https://github.com/equidistant/little-eagle-and-mich-client' target='_blank'>
							<Icon src={githubImg} />
							</a>						
						</Icons>
					</Row>
				</Center>
				<Copyright>
					<CopyrightImg src={copyrightImg}/>
					<CopyrightText>
						Copyright: Little Eagle & Mich 2020
					</CopyrightText>
				</Copyright>			
			</Root>
		)
	} else if (width <= 660 && width > 0) {
		return (
			<Root>
				<Center>
					<Row>
						<SmallColumn>
							<Subheading>O NAMA</Subheading>
							<NavLink href='/' name='Vikend izleti'/>
							<AbsoluteLink href='https://www.youtube.com/channel/UCdiTmZzxSp274IfUfa_zwgQ' target='_blank'>Naš Youtube</AbsoluteLink>
							<AbsoluteLink href='https://www.instagram.com/littleeagle.mich/' target='_blank'>Naš Instagram</AbsoluteLink>
						</SmallColumn>
						<IndieTop>
							<Vector4Img src={vector4Img}/>
							<IndieRotatedTop>Istraži još avantura</IndieRotatedTop>
						</IndieTop>
					</Row>
					<Row>
						<SmallColumn>
							<Subheading>USLUGE</Subheading>
							<NavLink href='/' name='Fotografija:'/>
							<AbsoluteLink href='https://littleeaglephoto.com/' target='_blank'>Litte Eagle Photography</AbsoluteLink>
						</SmallColumn>
						<IndieColumn>
							<IndieBottom>
								<Vector7Img src={vector7Img}/>
								<IndieRotatedBottom>dogovori se s Anom za fotkanje</IndieRotatedBottom>
							</IndieBottom>
						</IndieColumn>
					</Row>
					<Row>
						<SmallColumn>
							<Subheading>GALERIJE</Subheading>
							<NavLink href='/' name='Šri Lanka'/>
							<NavLink href='/' name='Kuba'/>
							<NavLink href='/' name='Slovenija'/>
						</SmallColumn>
					</Row>
					<Row>
					<SmallColumn>
							<Subheading>PUTOPISI</Subheading>
							<NavLink href='/' name='Jesenjski Kanjon'/>
							<NavLink href='/' name='Magloviti Grad'/>
							<NavLink href='/' name='10 Zanimljivosti o Šri Lanci'/>
						</SmallColumn>
					</Row>
					<Row>
						<Icons>
							<a href='https://www.youtube.com/channel/UCdiTmZzxSp274IfUfa_zwgQ' target='_blank'>
								<Icon src={youtubeImg} />
							</a>
							<a href='https://www.instagram.com/littleeagle.mich/' target='_blank'>
								<Icon src={instagramImg} />
							</a>
							<a href='https://github.com/equidistant/little-eagle-and-mich-client' target='_blank'>
							<Icon src={githubImg} />
							</a>						
						</Icons>
					</Row>
				</Center>
				<Copyright>
					<CopyrightImg src={copyrightImg}/>
					<CopyrightText>
						Copyright: Little Eagle & Mich 2020
					</CopyrightText>
				</Copyright>			
			</Root>
		)
	} else {
		return (
			<Root>
				<Center>
					Loading
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
	background: #434850;
`

const Center = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 940px;
	@media only screen and (max-width: 1079px) {
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const IndieTop = styled.div`
	margin-top: 64px;
	margin-right: 705px;
	margin-bottom: -15px;
	display: flex;
	@media only screen and (max-width: 1079px) {
		margin-top: 35px;
		margin-right: 150px;
		margin-bottom: -65px;
		margin-left: 10px;
	}
	@media only screen and (max-width: 660px) {
		margin-top: 0px;
		margin-right: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
	}
`

const Vector4Img = styled.img`
	transform: rotate(-14.6deg);
	width: 25.04px;
	height: 32.92px;
	margin-top: 40px;
	margin-right: 5px;
	@media only screen and (max-width: 1079px) {
		transform: rotate(-162.83deg);
	}
	@media only screen and (max-width: 660px) {
		margin-top: 70px;
		margin-right: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
	}
`

const IndieRotatedTop = styled(Indie)`
	color: #FFFCF9;
	transform: rotate(-7.07deg);
	@media only screen and (max-width: 660px) {
		margin-top: 0px;
		margin-right: 0px;
		margin-bottom: 0px;
		margin-left: -15px;
	}
`

const Links = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const SiteLinks = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	border-right: 1px solid #FFFCF9;
	padding-top: 40px;
	padding-bottom: 40px;
	width: 800px;
	padding-right: 80px;
	@media only screen and (max-width: 1079px) {
		flex-direction: column;
	}
`

const Row = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 50px;

	@media only screen and (min-width: 660px) {
		&:first-of-type {
			margin-top: 0px;
		}
	}
	@media only screen and (max-width: 660px) {
		width: 100%;
	}
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
`

const SmallColumn = styled(Column)`
	width: 140px;
	@media only screen and (max-width: 1079px) {
		width: 100%;
	}
`

const BigColumn = styled(Column)`
	width: 200px;
`

const SLink = styled.a`
	text-decoration: none;
	font-family: 'Mulish';
	font-style: normal;
	font-size: 18px;
	line-height: 18px;
	color: #FFFFFF;
	color: #FFFCF9;
	margin-top: 20px;
`

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <SLink>{name}</SLink>
    </Link>
  )
}

const AbsoluteLink = styled.a`
	text-decoration: none;
	font-family: 'Mulish';
	font-style: normal;
	font-size: 18px;
	line-height: 18px;
	color: #FFFFFF;
	color: #FFFCF9;
	margin-top: 20px;
`

const IndieColumn = styled.div`
	width: 50%;
	display: flex;
	flex-direction: row;
`

const IndieBottom = styled.div`
	display: flex;
	margin-left: 130px;
	margin-top: -50px;
	@media only screen and (max-width: 1079px) {
		margin-left: 20px;
		margin-top: -50px;
		width: 100%;
	}
	@media only screen and (max-width: 660px) {
		margin-top: 90px;
		margin-right: 0px;
		margin-bottom: -90px;
		margin-left: -10px;
	}
`

const Vector3WhiteImg = styled.img`
	width: 25x;
	height: 50px;
`

const Vector7Img = styled.img`
	width: 40x;
	height: 30px;
	transform: rotate(0.33deg);
`

const IndieRotatedBottom = styled(Indie)`
	color: #FFFCF9;
	transform: rotate(6.58deg);
	margin-top: 50px;
	margin-bottom: 25px;
	margin-left: 10px;
	@media only screen and (max-width: 660px) {
		margin-top: 25px;
		margin-right: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
		width: 175px;
	}

`

const Copyright = styled.div`
	display: flex;
	width: 940px;
	margin-bottom: 27px;
	align-items: center;
	@media only screen and (max-width: 1079px) {
		margin-top: 30px;
		width: 525px;
	}
	@media only screen and (max-width: 660px) {
		margin-top: 50px;
		padding-bottom: 50px;
		width: 300px;
	}
`

const CopyrightText = styled.p`
	font-family: Mulish;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;

	/* identical to box height */
	text-align: center;

	/* BG */
	color: #FFFCF9;

`

const Icons = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 1079px) {
		border-top: 1px solid ${props => props.theme.color.white};
		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
		width: 50%;
		flex-direction: row;
		justify-content: space-between;
	}
	@media only screen and (max-width: 660px) {
		width: 100%;
	}
`

const Icon = styled.img`
	width: 48px;
	height: 48px;
	margin-top: 20px;
	cursor: pointer;
`

const CopyrightImg = styled.img`
	width: 12px;
	height: 15px;
	margin-right: 3px;
	margin-bottom: 1px;
`

export default Footer