import React, { useEffect, useRef, memo } from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import { useRows, useRowsScroll, paginate } from '../common'

const JustifyScrollGallery = ({ images, open, width, numOfRows, marginTop }) => {
  const router = useRouter()
  const [rows, galleryRef, margin] = useRowsScroll({ images, width, numOfRows })
  return (
    <JustifiedGalleryContainer marginTop={marginTop} ref={galleryRef}>
        {renderRowsLazy({ rows, open, margin })}
    </JustifiedGalleryContainer>
  )
}

const JustifyGallery = ({ images, numOfRows, marginTop, open }) => {
  const [rows, appendRows, resetRows, jgRef, margin] = useRows({ images, numOfRows })
  return (
    <JustifiedGalleryContainer marginTop={marginTop} ref={jgRef}>
        {renderRows({ rows, open, margin })}
    </JustifiedGalleryContainer>
  )
}

const renderRows = ({ rows, open, margin }) => {
  return rows.map((row, index) => {
    return (
      <Row key={index}>
        {
          row.images.map(({ width, height, url, id}) => {
            return (
              <Image margin={margin} url={url} height={height} width={width} key={url} handleClick={() => open(id)}/>
            )
          })
        }
      </Row>
    )
  })
}

const renderRowsLazy = ({ rows, open, margin }) => {
  console.log(margin)
  return rows.map((row, index) => {
    return (
      <Row key={index}>
        {
          row.images.map(({ width, height, url, id}) => {
            return (
              <Image margin={margin} url={url} height={height} width={width} key={url} handleClick={() => open(id)} />
            )
          })
        }
      </Row>
    )
  })
}

const JustifiedGalleryContainer = styled.div`
   margin-top: ${props => props.marginTop || 0};
   width: 940px;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media only screen and (max-width: 1079px) {
     width: 525px;
   }
   @media only screen and (max-width: 660px) {
		width: 300px;
	}
`

const Row = styled.div`
  display: flex;
  height: min-content;
  width: min-content;
`

const Image = memo(({ url, height, width, handleClick, margin }) => {
  const imageRef = useRef(null)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 750px 0px',
      threshold: 0
    }
    const intersectionCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > observerOptions.threshold) {
          entry.target.src = entry.target.dataset.src
          observer.unobserve(imageRef.current)
        }
      })
    }
    const observer = new IntersectionObserver(intersectionCallback, observerOptions)
    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <Img data-src={url} height={height} width={width} ref={imageRef} onClick={handleClick} margin={margin}/>
  )
})

const Img = styled.img`
  ${props => props.width && props.height && css`
    margin: ${props => props.margin}px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
  `}
  opacity: 1;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
  transition:
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms,
    transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    opacity: 0.85;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  }
  border-radius: 20px 5px;
`

export default Image



export { JustifyGallery, JustifyScrollGallery }
