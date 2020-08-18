import React from 'react'
import { Box, Button, Text } from '@chakra-ui/core'
import { play, pause } from 'shared/assets'

const icons = [
  { alt: 'play-icon', src: play },
  { alt: 'pause-icon', src: pause },
]

function PlayIcons({ icons }) {
  return icons.map((icon, index) => (
    <Box
      minWidth='100%'
      key={index}
      padding='8px'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <img alt={icon.alt} src={icon.src} width='100%' />
    </Box>
  ))
}

function PlayButton() {
  return (
    <Box
      width='35px'
      height='35px'
      overflow='hidden'
      border='2px'
      borderRadius='50%'
      display='flex'
      alignItems='center'
    >
      <PlayIcons icons={icons} />
    </Box>
  )
}

function durationInMinAndSec(time) {
  const seconds = time / 1000

  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)

  return `${min}:${sec}`
}

export default function Index({ item }) {
  return (
    <Box display='flex' margin='1rem 0' shadow='md'>
      <Box>
        <PlayButton />
      </Box>
      <Box paddingLeft='1rem'>
        <Text fontSize='2xl' fontWeight='900'>
          {item.track.name}
        </Text>
        <Text>Artists: {item.track.artists.map((artist) => artist.name)}</Text>
        <Text color='gray.500' fontWeight='900'>
          Duration: {durationInMinAndSec(item.track.duration_ms)}
        </Text>
      </Box>
    </Box>
  )
}
