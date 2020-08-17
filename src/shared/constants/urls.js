export default {
  user: '/me',
  categories: '/browse/categories',
  category: (category_id) => `/browse/categories/${category_id}`,
  playlists: (category_id) => `/browse/categories/${category_id}/playlists`,
  playlist: (playlist_id) => `/playlists/${playlist_id}`,
}
