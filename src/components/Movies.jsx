import { Grid, Paper, Radio } from '@mui/material'
import React from 'react'
import Movie from './Movie'
import MovieImage from './MovieImage'
import { useLocation, useParams } from "react-router-dom";


const Movies = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  console.log(5) // output: "the-page-id"
  
  
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={3} rowGap={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 240,
                  width: 140,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <MovieImage/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 240,
                  width: 140,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <MovieImage/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      
    </Grid>
  )
}

export default Movies
