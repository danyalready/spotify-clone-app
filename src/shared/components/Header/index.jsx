import React, { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/core'
import album from 'shared/assets/album.jpg'

export default function Index({ item }) {
  const [image, setImage] = useState(album)

  useEffect(() => {
    if (item) {
      const img = new Image()
      img.src = item.icons[0].url
      img.onload = () => setImage(img.src)
    }
  }, [item])

  return item ? (
    <Box display='flex' flexDirection={['column-reverse', 'row']}>
      <Box maxWidth={['100%', '274px']} height='auto'>
        <img
          alt={`category-${item.id}`}
          src={image}
          width='100%'
          height='auto'
        />
      </Box>
      <Box marginLeft={['0', '2rem']}>
        <Text fontSize='5xl' fontWeight={900}>
          {item.name}
        </Text>
      </Box>
    </Box>
  ) : (
    <Text fontSize='4xl'>Loading ...</Text>
  )
}
