import styled from 'styled-components'

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
`

const Text = styled.p`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 23px;  
	color: #434850;
	width: 740px;
	margin-top: 60px;
`

const BoldText = styled.p`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 23px;
	color: #434850;
	width: 740px;
	margin-top: 40px;
`

