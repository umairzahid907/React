import api from './baseAPI'

export const getPosts = () =>
  api.get().then((response) => {
    if (response.data.posts.length === 0) {
      return { error: { message: 'Empty response from server' } }
    } else {
      return response.data
    }
  })
    .catch(err => {
      return { error: err }
    })

export const getPost = (id) => {
  return api.get(`/posts/${id}.json`).then((response) => {
    if (response.data.posts.length === 0) {
      return { error: { message: 'Empty response from server' } }
    } else {
      return response.data
    }
  })
    .catch(err => {
      return { error: err }
    })
}
