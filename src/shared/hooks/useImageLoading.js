import { useEffect, useState } from 'react'
import album from 'shared/assets/album.jpg'

export const useImageLoading = (src) => {
  const [image, setImage] = useState(album)
  const img = new Image()

  useEffect(() => {
    img.src = src
    img.onload = () => setImage(img.src)
    // eslint-disable-next-line
  }, [src])

  return image
}
