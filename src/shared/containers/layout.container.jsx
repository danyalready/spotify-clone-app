import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Image, Button } from '@chakra-ui/core'
import { Player } from 'shared/components'
import { logOut } from 'shared/service/user'
import { logo } from 'shared/assets'
import { useUserContext } from 'shared/service/user'

function SwitchButtons({ user, dispatch }) {
  return user && <Button onClick={() => logOut(dispatch)}>Log out</Button>
}

function Navbar() {
  const [user, dispatch] = useUserContext()

  return (
    <Box
      position='fixed'
      top='0'
      width='100%'
      height='76px'
      bg='gray.700'
      shadow='0 0 25px 5px #1DB954'
      zIndex='1000'
    >
      <Flex
        margin='0 auto'
        padding='0 1rem'
        maxWidth='900px'
        height='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Link to={user ? '/' : '#'}>
          <Image 
            alt='spotify-logo' 
            src={logo} 
            size='55px' />
        </Link>
        <Flex 
          alignItems='center' 
          justifyContent='space-evenly'>
          <SwitchButtons user={user} dispatch={dispatch} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default function Index({ children }) {
  return (
    <Box>
      <Navbar />
      <Box 
        maxWidth='900px' 
        margin='12rem auto' 
        padding='0 1rem'>
        {children}
      </Box>
      <Player />
    </Box>
  )
}
