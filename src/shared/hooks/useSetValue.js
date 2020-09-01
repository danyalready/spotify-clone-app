import { useState } from 'react'

export const useSetValue = (intialValue) => {
  const [value, setValue] = useState(intialValue)

  const valueHandle = (value) => setValue(value)

  return { value, onChange: valueHandle }
}
