import React from 'react'
import './processingData.css'
import { Card } from '../card/card'


export const Comp = ({monster}) => {
    return (
        <div className='card-list'>
            { 
                monster.map(({name, id, email}) => 
                    <Card name={name} key={id} email={email}/>
                )
            }
        </div>
    )
}


export function processingData(data){
    return {
        name: data.name,
        id: data.id,
        username: data.username,
        email: data.email,
        phone: data.phone,
        website: data.website
    }
}
