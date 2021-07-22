import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

export function ErrorBoundary({children}) {
  return (
    <ReactErrorBoundary fallbackRender={() => <h3>Error ...</h3>}>
      {children}
    </ReactErrorBoundary>
  )
}
