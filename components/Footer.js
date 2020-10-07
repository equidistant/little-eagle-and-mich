import styled from 'styled-components'
import { H2, H4, Body, Indie, Subheading } from './text'
import Link from 'next/link'
import { vector3WhiteImg, vector4Img, copyrightImg, githubImg, instagramImg, youtubeImg } from '../images'

const Footer = () => {
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
`

const IndieTop = styled.div`
	margin-top: 64px;
	margin-right: 705px;
	margin-bottom: -15px;
	display: flex;
`

const Vector4Img = styled.img`
	transform: rotate(-14.6deg);
	width: 25.04px;
	height: 32.92px;
	margin-top: 40px;
	margin-right: 5px;
`

const IndieRotatedTop = styled(Indie)`
	color: #FFFCF9;
	transform: rotate(-7.07deg);
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
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
`

const SmallColumn = styled(Column)`
	width: 140px;
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

const IndieBottom = styled.div`
	display: flex;
	margin-left: 130px;
	margin-top: -50px;
`

const Vector3WhiteImg = styled.img`
	width: 25x;
	height: 50px;
`

const IndieRotatedBottom = styled(Indie)`
	color: #FFFCF9;
	transform: rotate(6.58deg);
	margin-top: 50px;
	margin-bottom: 25px;
	margin-left: 10px;
`

const Copyright = styled.div`
	display: flex;
	width: 940px;
	margin-bottom: 27px;
	align-items: center;
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