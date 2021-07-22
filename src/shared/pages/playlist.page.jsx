import React from 'react'
import { useParams } from 'react-router-dom'
import { Text, Box } from '@chakra-ui/core'
import { Header, Track } from 'shared/components'
import { Content } from 'shared/containers'
import url from 'shared/constants/urls'
import api from 'shared/utils/api'
import { useQuery } from 'react-query'

function Tracks({ tracks }) {
  return tracks ? (
    <Box>
      {tracks.map((track, index) => (
        <Track key={index} item={track} />
      ))}
    </Box>
  ) : (
    <p>Loading ...</p>
  )
}

export default function Index() {
  const { playlist_id } = useParams()
  const { playlist } = useQuery(['playlist', 'tracks'])
  const { tracks } = useQuery(['tracks', playlist_id], api.get(url.tracks(playlist_id)))
  return (
    <Content>
      <Text 
        fontSize='3xl' 
        fontWeight='900'>
        Playlist:
      </Text>
      <Header
        item={
          playlist && {
            icons: [{ url: playlist.images[0].url }],
            name: playlist.name,
            id: playlist.id,
          }
        }
      />
      <Tracks tracks={tracks} />
    </Content>
  )
}
