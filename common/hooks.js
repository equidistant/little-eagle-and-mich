import { useRef, useCallback, useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import _ from 'lodash'
import { getRandomInt } from './utils'

export const useExplorePosts = ({ posts, title }) => {
  const [explorePosts, setExplorePosts] = useState([])
	useEffect(() => {
    let currentPosts = []
		for (let i = 0; i < 2; i++) {
			let post = posts[getRandomInt(posts.length)]
			while (post.title === title || (currentPosts.length === 1 && currentPosts[0].title === post.title)) {
				post = posts[getRandomInt(posts.length)]
			}
			currentPosts.push(post)
    }
    setExplorePosts(currentPosts)
  }, [])
  return explorePosts
}

export const useRandomGallery = ({ initialGalleries }) => {
  const [nextTitle, setNextTitle] = useState(initialGalleries[Math.floor(Math.random() * Math.floor(initialGalleries.length))].title)
  const [gallery, setGallery] = useState({})
  const handleNext = async () => {
    let newTitle = initialGalleries[Math.floor(Math.random() * Math.floor(initialGalleries.length))].title
    while(newTitle === gallery.title) {
      newTitle = initialGalleries[Math.floor(Math.random() * Math.floor(initialGalleries.length))].title
    }
    setNextTitle(newTitle)
  }
  useEffect(() => {
    const loadNextGallery = async () => {
      setGallery(initialGalleries.find(gallery => gallery.title === nextTitle))
    }
    if (gallery.title !== nextTitle) {
      loadNextGallery()
    }
    
  }, [nextTitle])
  return [gallery, handleNext]
}

export const useRows = ({ images, width, numOfRows, targetWidth }) => {
  const [previousImages, setPreviousImages] = useState([])
  const [rows, setRows] = useState([])
  const appendRows = useCallback(({ images }) => {
    const newRows = getRows({ images, width, numOfRows, targetWidth })
    setRows([...rows, ...newRows])
  }, [rows])
  const resetRows = useCallback(({ images }) => {
    const newRows = getRows({ images, width, numOfRows, targetWidth })
    setRows([...newRows])
  }, [])
  useEffect(() => {
    if (rows.length === 0) {
      appendRows({ images })
    }
    if (previousImages !== images) {
      setPreviousImages(images)
      resetRows({ images })
    }
  }, [images, rows.length, appendRows])
  return [rows, appendRows, resetRows]
}

const getRows = ({ images, width, numOfRows, targetWidth = 350 }) => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  let maxWidth = window.innerWidth - scrollbarWidth - 1
  if (width) {
    maxWidth = width
  }
  const minRatio = maxWidth / targetWidth
  return buildRows({ images: images, maxWidth, minRatio, numOfRows })
}

const buildRows = ({ images, maxWidth, minRatio, numOfRows }) => {
  const firstImage = images[0]
  const imagesCopy = images.slice(1)
  const rowsRatios = imagesCopy.reduce((acc, image) => {
    let currentRow = acc[acc.length - 1]
    if (currentRow.ratio < minRatio) {
      currentRow.ratio += image.ratio
      currentRow.images.push(image)
      currentRow.height = maxWidth / currentRow.ratio
    } else {
      currentRow.height = maxWidth / currentRow.ratio
      acc.push({
        ratio: image.ratio, images: [image], width: maxWidth, height: maxWidth / image.ratio
      })
    }
    return acc
  }, [{
    ratio: firstImage.ratio, images: [firstImage]
  }])
  if (rowsRatios[rowsRatios.length - 1].ratio < minRatio) {
    rowsRatios.pop()
  }
  const rowsSizes= rowsRatios.map((currentRow) => {
    currentRow.images = currentRow.images.map((curr, index) => {
      if (index === 0 || index === currentRow.images.length - 1) {
        curr.width = currentRow.height * curr.ratio - 10
        curr.height = currentRow.height
      } else {
        curr.width = currentRow.height * curr.ratio - 20
        curr.height = currentRow.height
      }
      return curr
    })
    currentRow.width = currentRow.images.reduce((acc, curr) => {
      acc = acc + curr.width
      return acc
    }, 0)
    return currentRow
  })
  if (rowsSizes.length !== 0 && !rowsSizes[rowsSizes.length - 1].width) {
    rowsSizes.pop()
  }
  if (numOfRows) {
    while(numOfRows < rowsSizes.length) {
      rowsSizes.splice(Math.floor(Math.random() * (rowsSizes.length - 1)),1)
    }
  }
  return rowsSizes
}

export const useScrollLoad = ({ images }) => {
  const page = useRef(0)
  const galleryRef = useRef(null)
  const [rows, appendRows, resetRows] = useRows({ images: images[page.current] })
  useEffect(() => {
    if (galleryRef.current.clientHeight < window.innerHeight) {
      if (rows.length > 0) {
        page.current += 1
      }
      appendRows({ images: images[page.current]})
    }
    const scrollListener = (e) => {
      if (window.innerHeight + window.scrollY >= (0.9 * galleryRef.current.clientHeight)) {
        if (page.current < images.length - 1) {
          if (rows.length > 0) {
            page.current += 1
          }
          appendRows({ images: images[page.current]})
        }
      }
    }
    const resizeListener = debounce(() => {
      const imagesSlice = images.slice(0, page.current + 1)
      const pageImages = [].concat.apply([], imagesSlice)
      resetRows({ images: pageImages })
    }, 100)
    window.addEventListener('resize', resizeListener)
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
      window.removeEventListener('scroll', scrollListener)
    }
  }, [appendRows, resetRows, images, rows])
  return [rows, galleryRef]
}


export const useScrolledDirection = function ({ boundary }) {
  const [scrollY, setScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const scrollListener = (e) => {
      setScrolled(checkScrolled({ boundary, scrollY}))
      setScrollY(window.scrollY)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [scrollY, scrolled]
}

const checkScrolled = ({ boundary, scrollY }) => {
  if (window.scrollY === 0) {
    return false
  } else if (window.scrollY > boundary && window.scrollY > scrollY) {
    return true
  } else {
    return false
  }
}


