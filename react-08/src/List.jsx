import React from 'react';
import Item from './Item';

// I AM USING DESTRUCTURING TO ACCESS DATA VARIABLE FROM PROPS
export default function List( { data }) {
  return (
    <div className='post-container'>
        {
            data.map((post) => {
                return  <Item post={post} />
            })
        }
    </div>
  )
}
