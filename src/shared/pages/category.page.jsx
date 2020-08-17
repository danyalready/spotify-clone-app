import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useChangeTitle, useStateValue, useGetData } from 'shared/hooks'
import { Box, Text } from '@chakra-ui/core'
import { Header } from 'shared/components'
import { Content } from 'shared/containers'
import url from 'shared/constants/urls'
import * as type from 'shared/constants/types'
import album from 'shared/assets/album.jpg'

function Playlist({ item }) {
  const { category } = useParams()
  const [image, setImage] = useState(album)

  const img = new Image()
  img.src = item.images[0].url
  img.onload = () => setImage(img.src)

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/${category}/${item.id}`}
    >
      <Box display='flex' shadow='md' margin='1rem 0'>
        <Box maxWidth='137px' minWidth='137px' width='100%'>
          <img
            alt={`playlist-${item.name}`}
            src={image}
            width='100%'
            height='auto'
          />
        </Box>
        <Box padding='0 1rem' overflow='hidden'>
          <Text fontSize='3xl' fontWeight='900'>
            {item.name}
          </Text>
          <Text>{item.description}</Text>
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
  useGetData(
    `${url.categories}/${category_id}/playlists`,
    !foundPlaylists,
    type.SET_PLAYLISTS
  )

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
  const params = useParams()
  const [{ categories, playlists }] = useStateValue()

  useGetData(
    `${url.categories}/${params.category}`,
    !categories.length,
    type.SET_CATEGORY,
    categories
  )

  const foundCategory = categories.find(
    (category) => category.id === params.category
  )
  useChangeTitle(
    foundCategory ? `React Spotify / ${foundCategory.name}` : 'React Spotify'
  )

  return (
    <Content>
      <Text fontSize='3xl' fontWeight='900'>
        Playlists
      </Text>
      <Header item={foundCategory} />
      <Playlists category_id={params.category} playlists={playlists} />
    </Content>
  )
}
