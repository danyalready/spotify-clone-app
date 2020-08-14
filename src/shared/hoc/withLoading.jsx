import React from 'react'

export default function withLoading(WrappedComponent) {
  return ({ loading, ...props }) => {
    if (loading) {
      return <p>Loading ...</p>
    }
    return <WrappedComponent {...props} />
  }
}
