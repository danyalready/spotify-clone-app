import React from 'react'
import { Box, Button, Text } from '@chakra-ui/core'
import { play, pause } from 'shared/assets'
import { toMinAndSec } from 'shared/utils/functions'

const icons = [
  { alt: 'play-icon', src: play },
  { alt: 'pause-icon', src: pause },
]

function PlayButton() {
  return (
    <Button
      cursor='pointer'
      width='45px'
      height='45px'
      borderRadius='50%'
      background='none'
    >
      <img alt='icons' src={icons[0].src} width='15px' height='auto' />
    </Button>
  )
}

export default function Index({ item }) {
  return (
    <Box display='flex' margin='1rem 0' padding='1rem' shadow='md'>
      <PlayButton />
      <Box marginLeft='1rem'>
        <Box marginBottom='1rem'>
          <Text fontSize='2xl' fontWeight='900'>
            {item.track.name}
          </Text>
          <Text color='gray.500' fontWeight='900'>
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
