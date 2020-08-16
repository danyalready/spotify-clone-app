import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Image, Text } from '@chakra-ui/core'

export default function Category({ item }) {
  return (
    <Link to={item.id}>
      <Box width='100%'>
        <Image
          src={item.icons[0].url}
          alt={`category-${item.id}`}
          width='100%'
        />
        <Text fontSize='xl' color='black'>
          {item.name}
        </Text>
      </Box>
    </Link>
  )
}
