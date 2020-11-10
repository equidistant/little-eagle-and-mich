import styled, { css, useTheme } from 'styled-components'
import Link from 'next/link'
import { H4, Subtitle, DateLocation } from './text'
import { getColor, millisToString } from '../common'

const SmallBlogCard = ({ post: {title, created, tags, longTitle, description, coverImg, location}, marginleft = 0, margintop = 0 }) => {
	const theme = useTheme()
	const color = getColor({ tags, theme })
	return (
		<NavLink href={`/post/${title}`}>
			<Card marginleft={marginleft} margintop={margintop}>
				<CardBackground color={color}/>
				<CardContent>
					<CardImage src={coverImg}/>
					<CardText>
						<DateLocationRow>
							<DateLocation>
								{millisToString({ date: new Date(created) })}
							</DateLocation>
							<Separator />
							<DateLocation>
								{location}
							</DateLocation>
						</DateLocationRow>
						<SH4 color={color}>{longTitle}</SH4>
						<SSubtitle textAlign='start'>
								{description}
						</SSubtitle>
						<SSubtitleLink color={color}>Pročitaj više</SSubtitleLink>
					</CardText>
				</CardContent>
			</Card>
		</NavLink>

	)
}

export default SmallBlogCard

const Card = styled.div`
	width: 100%;
	position: relative;
	border-radius: 20px 2px;
	cursor: pointer;
	@media only screen and (min-width: 1079px) {
		margin-left: ${props => props.marginleft};
		margin-top: ${props => props.margintop};
		&:first-of-type {
			margin-left: 0;
			margin-top: 0;
		}		
	}
	@media only screen and (max-width: 1079px) {
		margin-top: 30px;
	}
`

const CardBackground = styled.div`
	border-radius: 20px 2px;
	position: absolute;
	top: -10px;
	right: 10px;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: ${props => props.color};
`

const CardContent = styled.div`
  background: #FFFFFF;
  border-radius: 20px 2px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
`

const CardImage = styled.img`
	width: 140px;
	height: 130px;
	border-radius: 20px 2px;
	@media only screen and (max-width: 1079px) {
		display: none;
	}
`

const CardText = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	margin-left: 20px;
	margin-right: 20px;
	margin-bottom: 5px;
`

const DateLocationRow = styled.div`
	display: flex;
	width: min-content;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.theme.color.gray};
`

const Separator = styled.div`
	border-left: 1px solid ${props => props.theme.color.gray};
	height: 80%;
	margin-left: 20px;
	margin-right: 20px;
`

const SH4 = styled(H4)`
	margin-top: 5px;
	color: #434850;
	${Card}:hover & {
		color: ${props => props.color};
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
`

const SSubtitle = styled.p`
	font-family: Mulish;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;
	color: #434850;
	max-height: 45px;
	margin-top: 1px;
`

const SSubtitleLink = styled(Subtitle)`
	margin-top: 1px;
	text-decoration: underline;
	width: max-content;
	${Card}:hover & {
		color: ${props => props.color};
	}
	transition: color .2s cubic-bezier(.4,0,.2,.1);
	align-self: flex-end;
	vertical-align: middle;
	margin-top: auto;
	margin-bottom: auto;
	@media only screen and (max-width: 1079px) {
		display: none;
	}
`

const NavLink = ({ href, children }) => {
	return (
	  <Link href={href} passHref>
		{children}
	  </Link>
	)
  }

