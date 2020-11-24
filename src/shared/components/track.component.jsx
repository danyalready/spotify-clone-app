import React from 'react'
import { Box, Button, Text, Image } from '@chakra-ui/core'
import { play, pause } from 'shared/assets'
import { toMinAndSec } from 'shared/utils/functions'
import { useStateValue } from 'shared/hooks'
import * as types from 'shared/constants/types'

const icons = [
  { alt: 'play-icon', src: play },
  { alt: 'pause-icon', src: pause },
]

function PlayButton({ item }) {
  const [{}, dispatch] = useStateValue() // eslint-disable-line

  return (
    <Button
      cursor='pointer'
      minWidth='45px'
      minHeight='45px'
      maxWidth='45px'
      maxHeight='45px'
      width='100%'
      height='100%'
      borderRadius='50%'
      background='none'
      onClick={() => dispatch({ type: types.SET_TRACK, payload: item })}
    >
      <Image 
        alt='icons' 
        src={icons[0].src} 
        width='15px' 
        height='auto' />
    </Button>
  )
}

export default function Index({ item }) {
  return (
    <Box 
      display='flex' 
      margin='1rem 0' 
      padding='1rem' 
      shadow='md'>
      <PlayButton item={item} />
      <Box marginLeft='1rem'>
        <Box marginBottom='1rem'>
          <Text 
            fontSize='2xl' 
            fontWeight='900'>
            {item.track.name}
          </Text>
          <Text 
            color='gray.500' 
            fontWeight='900'>
            Duration: {toMinAndSec(item.track.duration_ms)}
          </Text>
        </Box>
        <Text>
          Artists:{' '}
          {item.track.artists.map((artist, index, self) => {
            if (index === self.length - 1) {
              return artist.name
            } else {
              return artist.name + ', '
            }
          })}
        </Text>
      </Box>
    </Box>
  )
}
