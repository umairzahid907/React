import React, { useState, useEffect } from 'react'
import './Posts.css'
import { Link } from 'react-router-dom'
import { getPosts } from '../api/PostAPI'
import Error from './Error'
export default function Post () {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()
  useEffect(() => {
    getPosts().then(response => {
      if (response.error) {
        setError(response.error)
      } else {
        setPosts(response.posts)
      }
    })
  }, [])

  return (
    <>
      {error &&
        <Error error={error.message} />}
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
