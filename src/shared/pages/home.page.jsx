import React from 'react'
import { useChangeTitle } from 'shared/hooks'
import { SimpleGrid, Text } from '@chakra-ui/core'
import { Category } from 'shared/components'
import { Content } from 'shared/containers'
import { useQuery } from 'react-query'
import { fetchCategories } from 'shared/service/spotify-api'

function Categories({ categories }) {
  return categories.map((category, index) => (
    <Category key={index} item={category} />
  ))
}

export default function Index() {
  useChangeTitle('React Spotify')
  
  const { data: categories, isLoading } = useQuery('categories', fetchCategories)

  if (isLoading) return 'Loading categories ...'

  return (
    <Content>
      <Text 
        fontSize='3xl' 
        fontWeight='900'>
        Categories:
      </Text>
      <SimpleGrid 
        minChildWidth='150px' 
        spacing='20px'>
        <Categories categories={categories} />
      </SimpleGrid>
    </Content>
  )
}
