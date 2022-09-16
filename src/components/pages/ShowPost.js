import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPost } from '../api/PostAPI.js'
import Error from './Error'
export default function ShowPost () {
  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])
  const { id } = useParams()
  const [error, setError] = useState()
  useEffect(() => {
    getPost(id).then(response => {
      if (response.error) {
        setError(response.error)
      } else {
        setPost(response.posts)
        setComment(response.comments)
      }
    })
  }, [])

  return (
    <>
      {error
        ? <Error error={error.message} />
        : <div>
          <div className='d-flex justify-content-between pt-3 pb-3'>
            <Link to='/' className='btn btn-dark'>Back</Link>
          </div>

          <h5 className='display-3 text-center head'>{post.title}</h5>

          <div className='card mb-3'>
            <img src={post.header_image} className='header-image' alt='' />
            <div className='card-body'>
              <p className='card-text'>{post.body}</p>
            </div>
          </div>

          <div id='like'>
            <Link to='' className='btn btn-primary'>Like</Link>
          </div>

          <Link to='' className='btn btn-warning'>Report this post</Link>
          <Link to='' className='btn btn-primary'>Give Suggestion</Link>

          <h2>Comments</h2>
          {
            comment.map(c =>
              <div key={c.id} className='card w-75'>
                <div className='card-body'>
                  <h5 className='card-title'>{c.user_email}</h5>
                  <p className='card-text'>{c.body}</p>
                  <Link to='' className='btn btn-dark'>Delete</Link>
                </div>
              </div>)
          }
        </div>}
    </>
  )
}
