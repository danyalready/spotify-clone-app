import { useEffect } from 'react'

export const useChangeTitle = (value) => {
  useEffect(() => {
    if (value) {
      document.title = value
    }

    // eslint-disable-next-line
  }, [value])
}
