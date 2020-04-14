import React from 'react'

export const SearchBlock = ({placeholder, handler}) => (
    <input
        type='search'
        placeholder={placeholder}
        onChange={handler}
    />    
)