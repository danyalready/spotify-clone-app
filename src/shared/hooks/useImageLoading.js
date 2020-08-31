import { useState } from 'react'
import { album } from 'shared/assets'

export const useImageLoading = (src) => {
  const [image, setImage] = useState(album)
  const img = new Image()

  img.src = src
  img.onload = () => setImage(img.src)

  return image
}
