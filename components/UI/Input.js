import React from 'react'



export default function Input({name,...inputProps}) {
  return (
    <input name={name || 'input'} {...inputProps} />
  )
}
