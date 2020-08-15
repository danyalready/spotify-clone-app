import React from 'react'
import { Box, Text, Button } from '@chakra-ui/core'
import { accessUrl } from 'shared/service/spotify'

export default function Login() {
  const loginFunction = () => {
    window.location.href = accessUrl
  }

  return (
    <Box
      shadow='md'
      margin='2rem auto'
      padding='1rem'
      maxWidth='500px'
      borderWidth='1px'
    >
      <Text fontSize='5xl' fontWeight='900' textAlign='center'>
        Login to Spotify
      </Text>
      <Button variantColor='green' size='lg' onClick={loginFunction}>
        Login
      </Button>
    </Box>
  )
}
