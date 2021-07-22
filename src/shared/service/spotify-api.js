import api from 'shared/utils/api'
import url from 'shared/constants/urls'

function handleFailure(error) {
  throw new Error(error)
}

function handleCategoriesSuccess(result) {
  return result.data.categories.items
}
export function fetchCategories() {
  return api.get(url.categories).then(handleCategoriesSuccess, handleFailure)
}

function handlePlaylistsSuccess(result) {
  return result.data.playlists.items
}
export function fetchPlaylists({queryKey}) {
  const category = queryKey[1]
  return api.get(url.playlists(category)).then(handlePlaylistsSuccess, handleFailure)
}

function handleTracksSuccess(result) {
  return result.data.items
}
export function fetchTracks({queryKey}) {
  const playlist_id = queryKey[1]
  return api.get(url.tracks(playlist_id)).then(handleTracksSuccess, handleFailure)
}
