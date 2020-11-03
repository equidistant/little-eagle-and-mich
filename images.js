import { enumerateImages } from "./common"

const URL = process.env.NEXT_PUBLIC_STATIC_URL


export const coverHomeImg = `${URL}/cover/home.jpg`
export const coverWeekendImg = `${URL}/cover/weekend.jpg`
export const coverLocalImg = `${URL}/cover/local.jpg`
export const coverDistantImg = `${URL}/cover/distant.jpg`
export const coverGalleryImg = `${URL}/cover/gallery.jpg`
export const coverAboutImage = `${URL}/cover/about.jpg`

export const anaImg = `${URL}/ana.png`
export const michImg = `${URL}/mich.png`

export const logoTextImg = `/images/logo-text.png`
export const randomImg = `/images/random.png`
export const vector1Img = `/images/vector-1.png`
export const vector2Img = `/images/vector-2.png`
export const vector3Img = `/images/vector-3.png`
export const vector3WhiteImg = `/images/vector-3-white.png`
export const vector4Img = `/images/vector-4.png`
export const vector5Img = `/images/vector-5.png`
export const vector6Img = `/images/vector-6.png`
export const vector7Img = `/images/vector-7.png`

export const copyrightImg = `/images/copyright.png`
export const githubImg = `/images/github.png`
export const instagramImg = `/images/instagram.png`
export const youtubeImg = `/images/youtube.png`
export const searchImg = `/images/search.png`
export const leLogoImg = '/images/le-logo.png'

export const hamburgerImg = '/images/hamburger.png'
export const hamburgerCloseImg = '/images/hamburger-close.png'

export const getAboutImages = () => enumerateImages({ path: `${URL}/about`, length: 22})