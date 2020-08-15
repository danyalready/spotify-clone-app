import React from 'react'
import { useStateValue } from 'shared/hooks'
import { Box, Flex, Image, Button } from '@chakra-ui/core'
import logo from 'shared/assets/logo.png'
import * as types from 'shared/constants/types'

function SwitchButtons({ loggedIn, dispatch }) {
  const logOut = () => {
    dispatch({ type: types.SET_UNAUTHENTICATED })
  }

  return loggedIn && <Button onClick={logOut}>Log out</Button>
}

function Navbar(props) {
  return (
    <Box height='76px' bg='gray.700' shadow='0 1px 10px 1px #1DB954'>
      <Flex
        margin='auto'
        width='900px'
        height='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Image alt='spotify-logo' src={logo} size='55px' />
        <Flex alignItems='center' justifyContent='space-evenly'>
          <SwitchButtons {...props} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default function Index({ children }) {
  const [{ loggedIn }, dispatch] = useStateValue()

  return (
    <Box>
      <Navbar loggedIn={loggedIn} dispatch={dispatch} />
      <Box maxWidth='900px' margin='auto'>
        {children}
      </Box>
    </Box>
  )
}
