import React from 'react'
import { Box } from '@chakra-ui/core'

export default function index({ children }) {
  return (
    <Box maxWidth='900px' margin='auto'>
      {children}
    </Box>
  )
}
