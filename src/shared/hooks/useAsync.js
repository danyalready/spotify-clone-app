import React from 'react'

export const statusType = {
  IDLE: 'idle',
  PENDING: 'pending',
  FAILURE: 'failure',
  SUCCESS: 'success',
}

export function useAsync() {
  const [result, setResult] = React.useState()
  const [status, setStatus] = React.useState(statusType.IDLE)
  const [error, setError] = React.useState()

  function handleSuccess(result) {
    setStatus(statusType.SUCCESS)
    setResult(result)
  }
  function handleFailure(error) {
    setStatus(statusType.FAILURE)
    setError(error)
  }

  const run = React.useCallback((asyncCallback) => {
    setStatus(statusType.PENDING)
    asyncCallback().then(handleSuccess, handleFailure)
  }, [])

  return {
    result,
    status,
    error,
    run,
  }
}
