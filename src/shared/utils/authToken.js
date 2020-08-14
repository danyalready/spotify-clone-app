export const getAuthToken = () => localStorage.getItem('authToken')

export const storeAuthToken = (token) => localStorage.setItem('authToken', token)

export const removeAuthToken = () => localStorage.removeItem('authToken')
