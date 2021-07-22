import React, { useState, useEffect, useCallback } from 'react'
import { useImageLoading} from 'shared/hooks'
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
import { toMinAndSec } from 'shared/utils/numbers'
import api from 'shared/utils/api'
import { useTrackContext } from 'shared/service/track'

function SoundSlider() {
  const [loudStatus, setLoudStatus] = useState(volumeMax)
  const [loudValue, setLoudValue] = useState(70)

  const mutateLoudStatus = useCallback(function() {
    if (loudValue === 0) setLoudStatus(volumeMute)
    else if (loudValue <= 45) setLoudStatus(volumeMin)
    else setLoudStatus(volumeMax)
  }, [loudValue])

  useEffect(() => {
    mutateLoudStatus()
  }, [mutateLoudStatus])

  function mute() {
    if (loudStatus !== volumeMute) setLoudStatus(volumeMute)
    else mutateLoudStatus()
  }

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
          backgroundImage={`url(${loudStatus})`}
          backgroundRepeat='no-repeat'
          backgroundPosition='center'
          backgroundSize='20px'
          backgroundColor='rgba(0,0,0,0)'
          border='none'
          borderRadius='50%'
          onClick={mute}
        />
        <Slider
          color='green'
          margin='0 1rem'
          value={loudValue}
          onChange={setLoudValue}>
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb />
        </Slider>
      </Box>
    </Box>
  )
}

function CurrentTrack({ track }) {
  return (
    <Box display='flex' alignItems='center'>
      <Image 
        src={useImageLoading(track.track.album.images[1].url)} 
        alt='current-track' 
        rounded='full' 
        size='84px' />

      <Box marginLeft='1rem'>
        <Text fontWeight='900'>{track.track.name}</Text>
      </Box>
    </Box>
  )
}

function PlayerController({ isPaused, dispatch }) {
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
        backgroundImage={`url(${isPaused ? play : pause})`}
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        backgroundSize='20px'
        border='none'
        borderRadius='50%'
        backgroundColor='#1DB954'
        onClick={() => dispatch({ type: 'SET_PAUSED' })}
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

function PlayerSlider({ track }) {
  return (
    <Box 
      width='100%' 
      display='flex' 
      alignItems='center'>
      <Text>00:00</Text>
      <Slider 
        color='green' 
        defaultValue={0} 
        margin='0 1rem'>
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
      <Text>{toMinAndSec(track.track.duration_ms)}</Text>
    </Box>
  )
}

export default function Index() {
  const [{ track, isPaused }, dispatch] = useTrackContext()
  const controls = { track, isPaused, dispatch }

  // Premium is required :(
  // !!!!!!!Work is stoped!!!!!!!
  useEffect(() => {
    if (!isPaused) {
      api.put('/me/player/play', { context_uri: track.track.uri })
    }
  }, [track, isPaused])

  return track ? (
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
      <Box 
        height='100%' 
        display={['none', 'none', 'block']}>
        <CurrentTrack track={track} />
      </Box>
      <Box height='100%'>
        <PlayerController {...controls} />
        <PlayerSlider {...controls} />
      </Box>
      <Box 
        height='100%' 
        display={['none', 'none', 'block']}>
        <SoundSlider />
      </Box>
    </Grid>
  ) : null
}
