import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  useChangeTitle,
  useStateValue,
  useGetData,
  useImageLoading,
} from 'shared/hooks'
import { Box, Text } from '@chakra-ui/core'
import { Header } from 'shared/components'
import { Content } from 'shared/containers'
import url from 'shared/constants/urls'
import * as type from 'shared/constants/types'

function Playlist({ item }) {
  const { category } = useParams()

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/${category}/${item.id}`}
    >
      <Box display='flex' shadow='md' margin='1rem 0'>
        <Box maxWidth='137px' minWidth='137px' width='100%'>
          <img
            alt={`playlist-${item.name}`}
            src={useImageLoading(item.images[0].url)}
            width='100%'
            height='auto'
          />
        </Box>
        <Box padding='0 1rem' overflow='hidden'>
          <Text fontSize='3xl' fontWeight='900'>
            {item.name}
          </Text>
          <Text dangerouslySetInnerHTML={{ __html: item.description }}></Text>
        </Box>
      </Box>
    </Link>
  )
}

function Playlists({ category_id, playlists }) {
  const foundPlaylists = playlists.find(
    (playlist) =>
      playlist.href.split('categories/')[1].split('/')[0] === category_id
  )
  useGetData(url.playlists(category_id), !foundPlaylists, type.SET_PLAYLISTS)

  return (
    <Box>
      {foundPlaylists &&
        foundPlaylists.items.map((playlist, index) => (
          <Playlist key={index} item={playlist} />
        ))}
    </Box>
  )
}

export default function Index() {
  const { category } = useParams()
  const [{ categories, playlists }] = useStateValue()

  useGetData(
    url.category(category),
    !categories.length,
    type.SET_CATEGORY,
    categories
  )

  const foundCategory = categories.find((item) => item.id === category)
  useChangeTitle(
    foundCategory ? `React Spotify / ${foundCategory.name}` : 'React Spotify'
  )

  return (
    <Content>
      <Text fontSize='3xl' fontWeight='900'>
        Playlists:
      </Text>
      <Header item={foundCategory} />
      <Playlists category_id={category} playlists={playlists} />
    </Content>
  )
}
