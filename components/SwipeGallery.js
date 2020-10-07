import React, { memo, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import { useMouseTouchSwipe, useSwipeImages } from '../common'


const Swipe = ({ images, activeImg, setActiveImg, close }) => {
  const router = useRouter()
  const [swipeImages] = useSwipeImages({ images })
  const changeUrl = (id) => {
    const href = `/gallery/${router.query.title}?activeImg=${id}`
    window.history.replaceState( {}, '', href );
    setActiveImg(id)
  }
  const [previous, next] = useMouseTouchSwipe({ activeImg: parseInt(activeImg), length: images.length, changeUrl })

  useEffect(() => {
    document.querySelector('#swipeCarousel').style.setProperty('--i', parseInt(activeImg))
  })
  return (
    <SwipeGalleryContainer show={activeImg !== -1}>
      <PreviousButton handleClick={previous} hide={parseInt(activeImg) === 0}/>
      <SwipeCarousel id={'swipeCarousel'}>
        {renderImages({ images: swipeImages })}
      </SwipeCarousel>
      <NextButton handleClick={next} hide={parseInt(activeImg) === (images.length - 1)}/>
      <CloseSwipeButton handleClick={close} />
    </SwipeGalleryContainer>
  )
}


// const Swipe = ({ images, close, changeUrl }) => {
//   const router = useRouter()
//   const { activeImg } = router.query

//   const [previous, next] = useMouseTouchSwipe({ activeImg: parseInt(activeImg), length: images.length, changeUrl })

//   return (
//     <SwipeGalleryContainer>
//       <PreviousButton handleClick={previous} hide={parseInt(activeImg) === 0}/>
      // <SwipeCarousel id={'swipeCarousel'}>
      //   {renderImages({ images: swipeImages })}
      // </SwipeCarousel>
//       <NextButton handleClick={next} hide={parseInt(activeImg) === (images.length - 1)}/>
//       <CloseSwipeButton handleClick={close} />
//     </SwipeGalleryContainer>
//   )
// }

const renderImages = ({ images }) => {
  return images.map((image, index) => <SwipeImage key={index} image={image} />)
}

const SwipeGalleryContainer = styled.div`
  position: fixed;
  top: 0; right: 0; left: 0; bottom: 0;
  background-color: #24272EEB;
  width: 100%;
  height: 100%;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  opacity: ${props => props.show ? 1 : 0};
  z-index: ${props => props.show ? 1000 : -1 };
`

const SwipeCarousel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  width: calc(var(--n)*100%);
  transform: translate(calc(var(--i, 0)/var(--n)*-100%));
`

const SwipeImage = memo(({ image }) => {
  const imageRef = useRef(null)
  const { url, ...rest } = image
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 200px 0px 200px',
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
    <Img ref={imageRef} data-src={url} {...rest} />
  )
})

//

const Img = styled.img`
  width: ${props => props.width}px;
	height: ${props => props.height}px;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
	margin-left: ${props => props.marginX}px;
	margin-right: ${props => props.marginX}px;
	margin-top: ${props => props.marginY}px;
	margin-bottom: ${props => props.marginY}px;
`

const PreviousButton = memo(({ handleClick, hide }) => {
  return (
    <PreviousButtonContainer onClick={handleClick} hide={hide}>
      <PreviousIcon />
    </PreviousButtonContainer>
  )
})

const NextButton = memo(({ handleClick, hide }) => {
  return (
    <NextButtonContainer onClick={handleClick} hide={hide}>
      <NextIcon />
    </NextButtonContainer>
  )
})

const CloseSwipeButton = memo(({ handleClick }) => {
  return (
    <CloseSwipeButtonContainer onClick={handleClick}>
      <CloseSwipeIcon />
    </CloseSwipeButtonContainer>
  )
})

export const PreviousButtonContainer = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  left: 2%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.hide && css`
    display: none;
  `}
`

const NextButtonContainer = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  right: 2%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.hide && css`
    display: none;
  `}
`

const CloseSwipeButtonContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`

const PreviousIcon = memo(() => {
  return (
    <SmallSvg viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <path d={'M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z'} fill={'#FFFFFF'}/>
      <path d={'M0 0h24v24H0z'} fill={'none'}/>
    </SmallSvg>
  )
})

const NextIcon = memo(() => {
  return (
    <SmallSvg viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <path d={'M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z'} fill={'#FFFFFF'}/>
      <path d={'M0 0h24v24H0z'} fill={'none'}/>
    </SmallSvg>
  )
})

const SmallSvg = styled.svg`
  width: 24px;
  height: 24px;
  display: block;
`


const CloseSwipeIcon = memo(() => {
  return (
    <SmallSvg viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <path d={'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'} fill={'#FFFFFF'}/>
      <path d={'M0 0h24v24H0z'} fill={'none'}/>
    </SmallSvg>
  )
})




export default Swipe
