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

const numOfRowsObj = {
  940: 2,
  525: 3,
  300: 4
}

const targetWidthObj = {
  940: 550,
  525: 450,
  300: 300
}

const marginObj = {
  940: 10,
  525: 7.5,
  300: 5
}

export const useRows = ({ images }) => {
  const [previousImages, setPreviousImages] = useState([])
  const [rows, setRows] = useState([])
  const jgRef = useRef()
  const [margin, setMargin] = useState(0)
  const appendRows = useCallback(({ images }) => {
    const width = jgRef.current.clientWidth
    const numOfRows = numOfRowsObj[width]
    const targetWidth = targetWidthObj[width]
    const margin = marginObj[width]
    setMargin(margin)
    if (images) {
      const newRows = getRows({ images, width, numOfRows, targetWidth, margin })
      setRows([...rows, ...newRows])
    }
  }, [rows])
  const resetRows = useCallback(({ images }) => {
    const width = jgRef.current.clientWidth
    const numOfRows = numOfRowsObj[width]
    const targetWidth = targetWidthObj[width]
    const margin = marginObj[width]
    const newRows = getRows({ images, width, numOfRows, targetWidth, margin })
    setMargin(margin)
    setRows([...newRows])
  }, [])
  useEffect(() => {
    if (rows.length === 0) {
      appendRows({ images })
    }
    if (images !== previousImages) {
      resetRows({ images })
      setPreviousImages(images)
    }
    const resizeListener = _.debounce(() => {
      resetRows({ images })
    }, 100)
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [images, rows.length, appendRows])
  return [rows, appendRows, resetRows, jgRef, margin]
}

export const useRowsLazy = ({ images, width, numOfRows, targetWidth }) => {
  const [rows, setRows] = useState([])
  const [margin, setMargin] = useState(0)
  const galleryRef = useRef(null)
  const appendRows = useCallback(({ images }) => {
    const margin = marginObj[width]
    const newRows = getRows({ images, width, numOfRows, targetWidth, margin })
    setMargin(margin)
    setRows([...rows, ...newRows])
  }, [rows])
  const resetRows = useCallback(({ images }) => {
    const margin = marginObj[width]
    const newRows = getRows({ images, width, numOfRows, targetWidth, margin })
    setMargin(margin)
    setRows([...newRows])
  }, [])
  useEffect(() => {
    if (rows.length === 0) {
      appendRows({ images })
    }
  }, [images, rows.length, appendRows])
  return [rows, appendRows, resetRows, galleryRef, margin]
}

export const useRowsScroll = ({ images, width }) => {
  const page = useRef(0)
  const [rows, appendRows, resetRows, galleryRef, margin] = useRowsLazy({ images: images[page.current], width })
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
  return [rows, galleryRef, margin]
}


const getRows = ({ images, width, numOfRows, targetWidth = 550, margin = 10 }) => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  let maxWidth = window.innerWidth - scrollbarWidth - 1
  if (width) {
    maxWidth = width
  }
  const minRatio = maxWidth / targetWidth
  return buildRows({ images, maxWidth, minRatio, numOfRows, margin })
}

const buildRows = ({ images, maxWidth, minRatio, numOfRows, margin }) => {
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
  const rowsSizes = rowsRatios.map((currentRow) => {
    currentRow.images = currentRow.images.map((curr, index) => {
      if (index === 0 || index === currentRow.images.length - 1) {
        curr.width = currentRow.height * curr.ratio - margin
        curr.height = currentRow.height
      } else {
        curr.width = currentRow.height * curr.ratio - margin * 2
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
    const limitedRowsSizes = []
    let indexes = []
    for (let i = 0; i < numOfRows; i++) {
      let index = Math.floor(Math.random() * (rowsSizes.length))
      while(indexes.includes(index)) {
        index = Math.floor(Math.random() * (rowsSizes.length))
      }
      indexes.push(index)
      limitedRowsSizes.push(rowsSizes[index])
    }

    return limitedRowsSizes
  }
  return rowsSizes
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

export const useSwipeImages = ({ images }) => {
  const [swipeImages, setSwipeImages] = useState([])
  useEffect(() => {
    setSwipeImages(buildSwipeImages(images))
    const resizeListener = debounce(() => {
      setSwipeImages(buildSwipeImages(images))
    }, 100)
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [images])
  return [swipeImages]
}

const buildSwipeImages = images => {
  const windowHeight = window.innerHeight - 20
  const windowWidth = document.body.clientWidth
  return images.map(({ url, ratio }) => {
    if (ratio < 1) {
      let height = windowHeight - windowHeight * 0.1
      let width = height * ratio
      while (height > windowHeight || width > windowWidth) {
        height = height * 0.99
        width = height * ratio
      }
      return {
        url,
        width: height * ratio,
        height: height,
        marginX: (windowWidth - width) / 2,
        marginY: (windowHeight - height) / 2,
      }
    }
    else {
      let height = windowHeight - windowHeight * 0.1
      let width = height * ratio
      while (height > windowHeight || width > windowWidth) {
        height = height * 0.99
        width = height * ratio
      }
      return {
        url,
        width,
        height,
        marginX: (windowWidth - width) / 2,
        marginY: (windowHeight - height) / 2,
      }
    }
  })
}


export const useMouseTouchSwipe = function ({ activeImg, length, changeUrl }) {
  const [w, setW] = useState(0)
  const locked = useRef(false)
  const i = useRef(activeImg)
  const n = useRef(length)

  const C = useRef(null)
  const rID = useRef(null)

  const x0 = useRef(0)
  const ini = useRef(0)
  const anf = useRef(0)
  const fin = useRef(0)

  const cf = useRef(0)

  const N = length
  const NF = 30
  const TFN = {
  	'ease-in-out': (k) => .5*(Math.sin((k - .5)*Math.PI) + 1)
  }

  const next = () => {
    if (i.current + 1 < N) {
      anf.current = 24
      fin.current = fin.current + 1
      i.current = i.current + 1
      ani()
    }
  }

  const previous = () => {
      if (i.current >= 1) {
        anf.current = 24
        fin.current = fin.current - 1
        i.current = i.current - 1
        ani()
      }
    }

  const unify = (e) => e.changedTouches ? e.changedTouches[0] : e

  const ani = () => {
    const newI = ini.current + (fin.current - ini.current) * TFN['ease-in-out'](cf.current / anf.current)
    if (newI) {
      C.current.style.setProperty('--i', newI)
    }
    if (cf.current === anf.current) {
      if (newI) {
        changeUrl(newI)
      }
      stopAni()
      return
    }

    cf.current = cf.current + 1
    rID.current = requestAnimationFrame(ani)
  }

  const stopAni = () => {
    cf.current = 0
    cancelAnimationFrame(rID.current)
    rID.current = null
  }

  const lock = (e) => {
    x0.current = unify(e).clientX
    locked.current = true
  }

  const drag = (e) => {
    e.preventDefault()

    if (locked.current) {
      let dx = unify(e).clientX - x0.current
      let f = +(dx/w).toFixed(2)
      C.current.style.setProperty('--i', i.current - f)
    }
  }

  const move = (e) => {
    if (locked.current) {
      let dx = unify(e).clientX - x0.current
      let s = Math.sign(dx)
      let f = +(s * dx / w).toFixed(2)

      ini.current = i.current - s * f

      if ((i.current > 0 || s < 0) && (i.current < N - 1 || s > 0) && f > .2) {
        i.current = i.current - s
        f = 1 - f
      }

      fin.current = i.current
      anf.current = Math.round(f * NF)
      n.current = 2 + Math.round(f)

      ani()
      x0.current = null
      locked.current = false
    }
  }

  const resize = () => {
    setW(document.body.clientWidth)
  }

  useEffect(() => {
    setW(window.innerWidth)
    C.current = document.querySelector('#swipeCarousel')
    C.current.style.setProperty('--n', N)
    C.current.style.setProperty('--i', i.current)
    window.addEventListener('mousedown', lock)
    window.addEventListener('touchstart', lock)
    window.addEventListener('mousemove', drag)
    window.addEventListener('touchmove', drag)
    window.addEventListener('mouseup', move)
    window.addEventListener('touchend', move)
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('mousedown', lock)
      window.removeEventListener('mousemove', drag)
      window.removeEventListener('mouseup', move)
      window.removeEventListener('touchstart', lock)
      window.removeEventListener('touchmove', drag)
      window.removeEventListener('touchend', move)
      window.removeEventListener('resize', resize)
    }
  })
  return [previous, next]
}

export const useWindow = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		const listener = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
    window.addEventListener('resize', listener)
    if (!width) {
      listener()
    }
		return () => window.removeEventListener('resize', listener)
	},[])
	return [width, height]
}