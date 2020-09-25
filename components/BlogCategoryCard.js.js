import styled, { css } from 'styled-components'
import { H3, Subtitle } from './text'

const BlogCategoryCard = ({ color, title, description, img }) => {
	return (
		<Root color={color} img={img}>
			<Overlay color={color} img={img}/>
			<Text>
				<SH3>{title}</SH3>
				<SSubtitle>{description}</SSubtitle>
			</Text>
		</Root>
	)
}


const Root = styled.div`
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
		${Root}:hover &{
			opacity: 1;
		}
		background: linear-gradient(0deg, rgba(232, 168, 124, 1), rgba(232, 168, 124, 1));
	`}
	${props => props.color === 'green' && css`
		opacity: 0.8;
		${Root}:hover &{
			opacity: 1;
		}
		background: linear-gradient(0deg, rgba(65, 179, 163, 1), rgba(65, 179, 163, 1));
	`}
	${props => props.color === 'blue' && css`
		opacity: 0.8;
		${Root}:hover &{
			opacity: 1;
		}
		background:  linear-gradient(0deg, rgba(130, 198, 219, 1), rgba(130, 198, 219, 1)), url(${props => props.img});
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
	${Root}:hover &{
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
	${Root}:hover &{
		margin-top: 30px;
	}
`



export default BlogCategoryCard