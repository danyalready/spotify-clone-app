import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'shared/static/styles.css'
import { theme } from '@chakra-ui/core'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from 'shared/service/user'
import { TrackProvider } from 'shared/service/track'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <TrackProvider>
            <App />
          </TrackProvider>
        </UserProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
