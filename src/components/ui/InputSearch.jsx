import React from 'react'

export default function InputSearch({action,id}) {
  return (
    <input  type="url" className='search-input'  onKeyDown={action} id={id} ></input>
  )
}
