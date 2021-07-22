import React from 'react'
import { useParams } from 'react-router-dom'
import { Text, Box } from '@chakra-ui/core'
import { Header, Track } from 'shared/components'
import { Content } from 'shared/containers'
import { useQuery } from 'react-query'
import { fetchPlaylists, fetchTracks } from 'shared/service/spotify-api'

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
  const { category, playlist_id } = useParams()
  const { data: playlists, isLoading } = useQuery(['playlists', category], fetchPlaylists)
  const { data: tracks } = useQuery(['tracks', playlist_id], fetchTracks)

  if (isLoading) return 'loading ...'
  const playlist = playlists.find(item => item.id === playlist_id)

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
