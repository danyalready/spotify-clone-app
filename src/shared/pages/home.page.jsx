import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useChangeTitle, useStateValue } from 'shared/hooks'
import { SimpleGrid, Text } from '@chakra-ui/core'
import { Category } from 'shared/components'
import { Content } from 'shared/containers'
import { removeAuthToken } from 'shared/utils/authToken'
import api from 'shared/utils/api'
import url from 'shared/constants/urls'
import * as types from 'shared/constants/types'

function Categories({ categories }) {
  return categories.map((category, index) => (
    <Category key={index} item={category} />
  ))
}

export default function Index() {
  useChangeTitle('React Spotify')

  const history = useHistory()
  const [{ categories }, dispatch] = useStateValue()

  // Getting item categories ...
  // TODO: needed in optimized way!!!
  useEffect(() => {
    if (categories.length <= 1) {
      api
        .get(url.categories)
        .then((data) => {
          dispatch({
            type: types.SET_CATEGORIES,
            payload: data.data.categories.items,
          })
        })
        .catch((err) => {
          if (err.request.status === 401) {
            removeAuthToken()
            history.push('/login')
          }
        })
    }

    // eslint-disable-next-line
  }, [])

  return (
    <Content>
      <Text fontSize='3xl' fontWeight='900'>
        Categories
      </Text>
      <SimpleGrid minChildWidth='150px' spacing='20px'>
        <Categories categories={categories} />
      </SimpleGrid>
    </Content>
  )
}
