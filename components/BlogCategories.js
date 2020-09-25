import styled from 'styled-components'
import { H2 } from './text'
import BlogCategoryCard from './BlogCategoryCard.js.js'

const BlogCategories = () => {
	return (
		<Root>
			<Center>
				<SH2>Istraži putopise i savjete</SH2>
				<BlogCards>
					<BlogCategoryCard color='orange' title='Vikend izleti' description='Savjeti i ideje oko vikend izleta, gdje i kako kampirati, što posjetiti.' img='https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/travels/img128.jpg'/>
					<BlogCategoryCard color='green' title='Lokalna putovanja' description='Dulja (dva-tri tjedna) putovanja u Hrvatskoj i okolnim zemljama. ' img='https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/travels/img128.jpg'/>
					<BlogCategoryCard color='blue' title='Daleke avanture' description='Dulja putovanja u daleke zemlje - što vidjeti i kako se pripremiti.' img='https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/low/travels/img128.jpg'/>
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

export default BlogCategories