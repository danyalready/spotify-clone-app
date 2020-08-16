import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useChangeTitle, useStateValue } from 'shared/hooks'
import { Box, Image, Text } from '@chakra-ui/core'
import { Content } from 'shared/containers'
import api from 'shared/utils/api'
import url from 'shared/constants/urls'
import * as types from 'shared/constants/types'

function Category({ category }) {
  return category ? (
    <Box display='flex' flexDirection={['column-reverse', 'row']}>
      <Box maxWidth={['100%', category.icons[0].width]} height='auto'>
        <Image
          alt={`category-${category.id}`}
          src={category.icons[0].url}
          width='100%'
          height='auto'
        />
      </Box>
      <Box marginLeft={['0', '2rem']}>
        <Text fontSize='5xl' fontWeight={900}>
          {category.name}
        </Text>
      </Box>
    </Box>
  ) : (
    <Text>Loading ...</Text>
  )
}

export default function Index() {
  const params = useParams()
  const [{ categories }, dispatch] = useStateValue()
  const [category, setCategory] = useState(null)

  useChangeTitle(
    category ? `React Spotify / ${category.name}` : 'React Spotify'
  )

  useEffect(() => {
    if (!categories.length) {
      api
        .get(`${url.categories}/${params.category}`)
        .then((data) => {
          dispatch({ type: types.SET_CATEGORIES, payload: [data.data] })
        })
        .catch((err) => console.log('ERROR: ', err))
    }

    const foundCategory = categories.find(
      (category) => category.id === params.category
    )
    setCategory(foundCategory)

    // eslint-disable-next-line
  }, [categories])

  return (
    <Content>
      <Category category={category} />
    </Content>
  )
}
