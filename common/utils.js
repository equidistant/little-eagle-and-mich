import styled from 'styled-components'

export const millisToString = ({ date = new Date(Date.now()), full = false}) => {
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
	const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
	const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
	return full ? `${day}.${month}.${date.getFullYear()}. ${hours}:${minutes}:${seconds}` : `${day}.${month}.${date.getFullYear()}.`
}

export const enumerateImages = ({ path, length }) => {
	return [...Array(length)].map((elem, index) => `${path}/img${index}.jpg`)
}

export const getColor = ({ tags, theme }) => {
	if (tags.includes('weekend')) {
		return theme.color.orange
	}
	if (tags.includes('local')) {
		return theme.color.green
	}
	if (tags.includes('distant')) {
		return theme.color.blue
	}
}

export const getBgColor = ({ tags, theme }) => {
	if (tags.includes('weekend')) {
		return theme.color.lightOrange
	}
	if (tags.includes('local')) {
		return theme.color.lightGreen
	}
	if (tags.includes('distant')) {
		return theme.color.lightBlue
	}
}

export const paginate = ({ images, nPerPage = 20 }) => {
    let paginatedImages = []
    while (images.length) {
      paginatedImages.push(images.splice(0, nPerPage))
    }
    return paginatedImages
  }  

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}


export const buildHtml = (tags) => {
	return tags.map(({ name, data }, index) => {
	  switch(name) {
		case 'HEADER': {
		  return (
			<BoldText key={index}>{data}</BoldText>
		  )
		}
		case 'BOLD':
			return (
				<BoldText key={index}>{data}</BoldText>
			)
		case 'TXT':
		  return (
			<Text key={index}>{data}</Text>
		  )
		case 'PORTRAITS': 
			const split = data.split(' ')
		  	return (
				<Portraits key={index}>
					<PortraitImage src={split[0]} key={`k${index}`}/>
					<PortraitImage src={split[1]} key={`p${index}`}/>
			  	</Portraits>
		  )
		case 'IMG': 
		  return (
			<Image src={data} key={index}/>
		  )
		default: 
		  return (
			<div key={index}>{data}</div>
		  )
	  }
	})
  }


const Image = styled.img`
  width: 100%;
  margin-top: 20px;
  border-radius: 20px 2px;
`

const Portraits = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`

const PortraitImage = styled.img`
  width: 100%;
  max-width: 460px;
  &:first-of-type {
	margin-right: 10px;
	}
	&:last-of-type {
		margin-left: 10px;
	}
	filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
	border-radius: 20px 2px;
	margin-top: 20px;
	@media only screen and (max-width: 1079px) {
		max-width: 252.5px;
		margin-top: 15px;
	}
	@media only screen and (max-width: 660px) {
		margin-top: 10px;
		max-width: 140px;
	}
`

const Text = styled.p`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;  
	color: #434850;
	width: 100%;
	max-width: 740px;
	margin-top: 60px;
	@media only screen and (max-width: 1079px) {
		max-width: 340px;
		margin-top: 40px;
	}
	@media only screen and (max-width: 660px) {
		max-width: 300px;
		margin-top: 20px;
		font-size: 16px;
		line-height: 20px;  
	}
`

const BoldText = styled.p`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 23px;
	color: #434850;
	width: 100%;
	max-width: 740px;
	margin-top: 60px;
	@media only screen and (max-width: 1079px) {
		max-width: 340px;
		margin-top: 40px;
	}
	@media only screen and (max-width: 660px) {
		max-width: 300px;
		margin-top: 20px;
		font-size: 16px;
		line-height: 26px;
	}
`

