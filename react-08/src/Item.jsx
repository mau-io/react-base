import React from 'react'

export default function Item({post}) {

  return (
    <div className="item">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}
