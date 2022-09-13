import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Posts.css'
import { Link } from 'react-router-dom'
export default function Post () {
  const [posts, setPost] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then((res) => {
        setPost(res.data)
      })
  }, [])

  return (
    <>
      <div className='flex-container'>
        {posts.map(post => (
          <div key={post.id} className='flex-item'>
            <div className='card'>
              <img src={post.header_image} className='card-img-top' alt='' />
              <div className='card-body'>
                <h5 className='card-title'>{post.title}</h5>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Last updated {post.updated_at}</li>
                <li className='list-group-item'>Status: {post.status}</li>
              </ul>
              <div className='card-body'>
                <Link to={'/posts/' + post.id} className='btn btn-primary'>Show</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
