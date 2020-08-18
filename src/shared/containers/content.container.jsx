import React from 'react'
import { Box } from '@chakra-ui/core'

export default function index({ children }) {
  return (
    <Box padding='4rem 0' margin='0 1rem'>
      {children}
    </Box>
  )
}
