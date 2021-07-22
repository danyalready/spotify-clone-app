import React from 'react'
import { Box, Text, Button } from '@chakra-ui/core'
import { Content } from 'shared/containers'
import { accessUrl } from 'shared/service/spotify'
import { useChangeTitle } from 'shared/hooks'

export default function Login() {
  useChangeTitle('React Spotify / Login')

  const login = () => window.location.href = accessUrl

  return (
    <Content>
      <Box
        shadow='md'
        margin='2rem auto'
        padding='1rem'
        maxWidth='500px'
        borderWidth='1px'
      >
        <Text 
          fontSize='5xl' 
          fontWeight='900' 
          textAlign='center'>
          Login to Spotify
        </Text>
        <Button 
          variantColor='green' 
          size='lg' 
          onClick={login}>
          Login
        </Button>
      </Box>
    </Content>
  )
}
