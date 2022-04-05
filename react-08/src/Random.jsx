import React from 'react'
import Item from './Item'

export default function Random(data) {

    return (
        <div className='random-post-container'>
            <h1>RANDOM POST FOR THE DAY!</h1>
            <Item post={data.random} />
        </div>
    )
}
