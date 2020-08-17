import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/core'
import album from 'shared/assets/album.jpg'

export default function Index({ item }) {
  const [image, setImage] = useState(album)

  const img = new Image()
  img.src = item.icons[0].url
  img.onload = () => setImage(img.src)

  return (
    <Link to={item.id} style={{ textDecoration: 'none' }}>
      <Box width='100%'>
        <img src={image} alt={`category-${item.id}`} width='100%' />
        <Text fontSize='xl' color='black'>
          {item.name}
        </Text>
      </Box>
    </Link>
  )
}
