import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Inbox from './Inbox'

import PostQuotes from './PostQuotes'
import Profile from './Profile'
import Movie from './Movie'
import Movies from './Movies'
import Musics from './Musics'





const Feed = () => {
  return (

    <Box  flex={4} p={2} >
      <Box> 
        <Routes>
          {/* <Route  path="/" element={<Navigate replace to="/anasayfa" />}></Route>  */}
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/' element={<PostQuotes />}></Route>
          <Route path='/movie' element={<Movie />}></Route>
          <Route path='/movies:id' element={<Movies />}></Route>
          <Route path='/musics' element={<Musics />}></Route>
          <Route path='/quotes' element={<PostQuotes />}></Route>


        </Routes>
      </Box>



    </Box>


  )
}

export default Feed
