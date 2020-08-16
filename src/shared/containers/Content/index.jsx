import React from 'react'
import { Box } from '@chakra-ui/core'

export default function index({ children }) {
  return (
    <Box paddingTop='2rem' margin='0 1rem'>
      {children}
    </Box>
  )
}
