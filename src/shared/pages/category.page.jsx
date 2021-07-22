import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useChangeTitle, useImageLoading } from 'shared/hooks'
import { Box, Image, Text } from '@chakra-ui/core'
import { useQuery } from 'react-query'
import { Header } from 'shared/components'
import { Content } from 'shared/containers'
import { fetchCategories, fetchPlaylists } from 'shared/service/spotify-api'

function Playlist({ item }) {
  const { category } = useParams()

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/${category}/${item.id}`}
    >
      <Box 
        display='flex' 
        shadow='md' 
        margin='1rem 0'>
        <Box 
          maxWidth='137px' 
          minWidth='137px' 
          width='100%'>
          <Image
            alt={`playlist-${item.name}`}
            src={useImageLoading(item.images[0].url)}
            width='100%'
            height='auto'
          />
        </Box>
        <Box 
          padding='0 1rem' 
          overflow='hidden'>
          <Text 
            fontSize='3xl' 
            fontWeight='900'>
            {item.name}
          </Text>
          <Text dangerouslySetInnerHTML={{ __html: item.description }} />
        </Box>
      </Box>
    </Link>
  )
}

function Playlists({ category }) {
  const { data: playlists, isLoading } = useQuery(['playlists', category], fetchPlaylists)

  if (isLoading) return 'loading playlists ...'

  return (
    <Box>
      {playlists.map((playlist, index) => <Playlist key={index} item={playlist} />)}
    </Box>
  )
}

export default function Index() {
  const { category } = useParams()
  const { data: categories, isLoading } = useQuery('categories', fetchCategories)

  if (isLoading) return 'loading data ...'

  const foundCategory = categories.find((item) => item.id === category)
  // useChangeTitle(foundCategory ? `React Spotify / ${foundCategory.name}` : 'React Spotify')

  return (
    <Content>
      <Text 
        fontSize='3xl' 
        fontWeight='900'>
        Playlists:
      </Text>
      <Header item={foundCategory} />
      <Playlists category={category} />
    </Content>
  )
}
