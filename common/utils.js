export const paginate = ({ images, nPerPage = 20 }) => {
    let paginatedImages = []
    while (images.length) {
      paginatedImages.push(images.splice(0, nPerPage))
    }
    return paginatedImages
  }  