import React from 'react'
import {
  SimpleGrid,
  Box,
  Text,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/core'
import {
  play,
  pause,
  next,
  volumeMute,
  volumeMin,
  volumeMax,
} from 'shared/assets'

function PlayerController() {
  // TODO: needed in optimization
  return (
    <Box
      margin='0 auto'
      maxWidth='300px'
      display='flex'
      alignItems='center'
      justifyContent='space-evenly'
    >
      <Button
        cursor='pointer'
        backgroundImage={`url(${next})`}
        transform='scaleX(-1)'
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        backgroundSize='15px'
        backgroundColor='rgba(0,0,0,0)'
        border='none'
        borderRadius='50%'
      />
      <Button
        cursor='pointer'
        width='55px'
        height='55px'
        backgroundImage={`url(${play})`}
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        backgroundSize='20px'
        border='none'
        borderRadius='50%'
        backgroundColor='#1DB954'
      />
      <Button
        cursor='pointer'
        backgroundImage={`url(${next})`}
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        backgroundSize='15px'
        backgroundColor='rgba(0,0,0,0)'
        border='none'
        borderRadius='50%'
      />
    </Box>
  )
}

function PlayerSlider() {
  return (
    <Box width='100%' display='flex' alignItems='center'>
      <Text>00:00</Text>
      <Slider color='green' defaultValue={0} margin='0 1rem'>
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
      <Text>00:00</Text>
    </Box>
  )
}

export default function Index() {
  return (
    <SimpleGrid
      columns={3}
      gridTemplateColumns='1fr 2fr 1fr'
      position='fixed'
      bottom='0'
      width='100%'
      height='100px'
      shadow='0 0 25px 5px #1DB954'
      bg='gray.700'
      padding='.5rem'
      borderWidth='1px'
    >
      <Text>Player</Text>
      <Box>
        <PlayerController />
        <PlayerSlider />
      </Box>
      <Text>Player</Text>
    </SimpleGrid>
  )
}
