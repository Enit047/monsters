import React from 'react'
import './card.css'

export const Card = ({name, email}) => {
    return (
        <div className='card-container'>
            <img 
            alt='monster' 
            src={`https://robohash.org/${Math.floor(Math.random()* 190 + 3 )}?set=set2&size=190x190`} />
            <h2>{name}</h2> 
            <p>{email}</p>
        </div>
    )
}