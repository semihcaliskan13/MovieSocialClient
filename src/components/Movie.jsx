import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import MovieHtpp from "../services/client_services/movies-services"


const Movie = () => {
  const location = useLocation();
  const { from } = location.state;
  
  const [movies,setMovies]=useState([])
  const [crews,setCrews]=useState([])
  
  useEffect(()=>{
      MovieHtpp.getMovieById(from)
      
    .then(res=>{
      console.log(res.data)
      setMovies(res.data.movie)
      setCrews(res.data.movie.movieCast)
      //console.log(posts)
      
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  
  var imgg= "https://image.tmdb.org/t/p/w154/"+movies.posterPath
  return (

    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image={imgg}
                alt={"green iguana"}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {movies.originalTitle}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{ padding: "2px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography>{movies.overview}
            </Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>Yönetmen:{crews.map(name=>
                name.job=="Director"?name.name:null)}</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>Oyuncular:</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>Yapım:</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>Tür:</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>Kategori:</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography sx={{ fontWeight: "bold" }}>Dil:</Typography>
              </Grid>
            </Grid>           
          </CardContent>
        </Grid>

      </Grid>


    </>

  )
}

export default Movie
