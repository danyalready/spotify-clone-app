import React from 'react'
import { useChangeTitle, useStateValue, useGetData } from 'shared/hooks'
import { SimpleGrid, Text } from '@chakra-ui/core'
import { Category } from 'shared/components'
import { Content } from 'shared/containers'
import url from 'shared/constants/urls'
import * as types from 'shared/constants/types'

function Categories({ categories }) {
  return categories.map((category, index) => (
    <Category key={index} item={category} />
  ))
}

export default function Index() {
  const [{ categories }] = useStateValue()

  useChangeTitle('React Spotify')
  useGetData(url.categories, categories.length <= 1, types.SET_CATEGORIES)

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
