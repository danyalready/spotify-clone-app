import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Image, Text } from '@chakra-ui/core'
import { useImageLoading } from 'shared/hooks'

export default function Index({ item }) {
  return (
    <Link 
      to={item.id} 
      style={{ textDecoration: 'none' }}>
      <Box width='100%'>
        <Image
          src={useImageLoading(item.icons[0].url)}
          alt={`category-${item.id}`}
          width='100%'
        />
        <Text 
          fontSize='xl' 
          color='black'>
          {item.name}
        </Text>
      </Box>
    </Link>
  )
}
