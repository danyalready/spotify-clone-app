import React, { useState } from 'react'
import {
  Grid,
  Box,
  Text,
  Image,
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
import { album } from 'shared/assets'

function SoundSlider() {
  const loudStatus = useState(volumeMax)

  return (
    <Box
      display='flex'
      height='100%'
      justifyContent='flex-end'
      alignItems='center'
    >
      <Box
        display='flex'
        height='100%'
        width='200px'
        justifyContent='flex-end'
        alignItems='center'
      >
        <Button
          cursor='pointer'
          backgroundImage={`url(${loudStatus[0]})`}
          backgroundRepeat='no-repeat'
          backgroundPosition='center'
          backgroundSize='20px'
          backgroundColor='rgba(0,0,0,0)'
          border='none'
          borderRadius='50%'
        />
        <Slider color='green' defaultValue={70} margin='0 1rem'>
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb />
        </Slider>
      </Box>
    </Box>
  )
}

function CurrentTrack({ item }) {
  return (
    <Box display='flex' alignItems='center'>
      <Image src={album} alt='current-track' rounded='full' size='84px' />

      <Box marginLeft='1rem'>
        <Text fontWeight='900'>{item.name}</Text>
      </Box>
    </Box>
  )
}

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
        oordensch
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
    <Grid
      columns={3}
      templateColumns={['1fr', '1fr', '1fr 2fr 1fr']}
      position='fixed'
      bottom='0'
      width='100%'
      height='100px'
      shadow='0 0 25px 5px #1DB954'
      padding='.5rem'
      bg='white'
    >
      <Box height='100%' display={['none', 'none', 'block']}>
        <CurrentTrack item={{ id: 123123, name: 'Drake' }} />
      </Box>
      <Box height='100%'>
        <PlayerController />
        <PlayerSlider />
      </Box>
      <Box height='100%' display={['none', 'none', 'block']}>
        <SoundSlider />
      </Box>
    </Grid>
  )
}
