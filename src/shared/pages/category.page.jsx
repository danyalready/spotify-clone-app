import React from 'react'
import { useParams } from 'react-router-dom'
import { useChangeTitle, useStateValue, useGetData } from 'shared/hooks'
import { Box, Image, Text } from '@chakra-ui/core'
import { Content } from 'shared/containers'
import url from 'shared/constants/urls'
import * as type from 'shared/constants/types'

function Playlist({ category_id, playlists }) {
  const foundPlaylists = playlists.find(
    (playlist) =>
      playlist.href.split('categories/')[1].split('/')[0] === category_id
  )
  useGetData(
    `${url.categories}/${category_id}/playlists`,
    !foundPlaylists,
    type.SET_PLAYLISTS
  )

  return <Box></Box>
}

function Category({ item }) {
  return item ? (
    <Box display='flex' flexDirection={['column-reverse', 'row']}>
      <Box maxWidth={['100%', item.icons[0].width]} height='auto'>
        <Image
          alt={`category-${item.id}`}
          src={item.icons[0].url}
          width='100%'
          height='auto'
        />
      </Box>
      <Box marginLeft={['0', '2rem']}>
        <Text fontSize='5xl' fontWeight={900}>
          {item.name}
        </Text>
      </Box>
    </Box>
  ) : (
    <Text fontSize='4xl'>Loading ...</Text>
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
      <Category item={foundCategory} />
      <Playlist category_id={params.category} playlists={playlists} />
    </Content>
  )
}
