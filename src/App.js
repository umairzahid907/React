import React from 'react';
import './App.css';
import Post from './components/Posts.js';
import ShowPost from './components/ShowPost';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/Posts" element={<Post />} />
          <Route path="/" element={<Post />} />
          <Route path="/Posts/:id" element={<ShowPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
