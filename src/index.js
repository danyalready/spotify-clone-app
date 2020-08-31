import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'shared/static/styles.css'

import { theme } from '@chakra-ui/core'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import { StateProvider } from 'shared/service/context'
import reducer, { initialState } from 'shared/service/reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
