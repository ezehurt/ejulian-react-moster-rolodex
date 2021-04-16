import React from 'react';

import './search-box.component.css'

export const Searchbox = ({placeholder, handleChange}) => {
    return (
        <input type="search"
        placeholder={placeholder} 
        onChange={handleChange}/>
    )
}