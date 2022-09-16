import React from 'react'
import './App.css'
import Post from './components/pages/Posts'
import ShowPost from './components/pages/ShowPost'
import Error from './components/pages/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/Posts' element={<Post />} />
          <Route path='/' element={<Post />} />
          <Route path='/Posts/:id' element={<ShowPost />} />
          <Route path='*' element={<Error error='Page not found' />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
