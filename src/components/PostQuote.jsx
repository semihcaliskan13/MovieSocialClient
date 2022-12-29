import { Avatar, Box, Card, CardActions, CardContent, CardActionArea, CardHeader, CardMedia, Grid, Checkbox, IconButton, Typography, Tooltip, Input } from '@mui/material'
import React from 'react'
import { Comment, Favorite, FavoriteBorder, MoreVert, Save, Share } from '@mui/icons-material'
import Inbox from './Inbox'
import { Link, Route, Routes } from 'react-router-dom'
import SettingsButton from './SettingsButton'
import { useState } from 'react'
import { useEffect } from 'react'
import UserHttp from "../services/client_services/users-services"
import userDetailServices from '../services/client_services/user-detail-services'

const PostQuote = ({ post }) => {
  const [crews, setCrew] = useState([]);
  const [images,setImage] = useState([]);
  const [userName,setUserName] = useState([])
  
    //console.log(post)
  useEffect(()=>{
     setCrew(post.movie.movieCast)
     UserHttp.getUserInfo(post.userId)
     .then(res=>{
      setUserName(res.data.userName)
      userDetailServices.getPhoto(res.data.userName)
      
      .then(res=>{
        setImage(res.data)//burada yapı değişti.
        console.log(res.data)
     
      })
      .catch(error=>{
        console.log(error)
      })
       
       
     })
     .catch(error=>{
       console.log(error)
     })
    
},[])


var imgg= "https://image.tmdb.org/t/p/w500/"+post.movie.posterPath
var profileImg=`https://moviesocial.blob.core.windows.net/${userName}/${images}`


  return (
   
    <Card sx={{ border: "groove 1px #a5b4fc", borderRadius: "6px", padding: "4px", marginBottom: "20px" }}>
       
      <CardHeader
        avatar={
          <Link to="profile" 
          state={{ from: userName }}>
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"
              src={profileImg}
            >
            </Avatar>
          </Link>
        }
        action={
          <SettingsButton />
        }
        title=<Link state={{ from: userName }} style={{ textDecoration: 'none' }} to="profile" ><Typography >Lili</Typography></Link>
        subheader={post.createdTime}
      />


      <CardContent >
        <Box sx={{ border: "groove 1px #a5b4fc", borderRadius: "6px", padding: "4px" }}>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </Box>

      </CardContent>

      <CardActions disableSpacing >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>

            <Link 
            to={"/movie"}
            state={{ from: post.movieId }}
            >
              <CardMedia
                sx={{ width: "80%", marginLeft: "6%", borderRadius: "4%" }}
                component="img"

                image= {imgg}
                alt="green iguana"
              />
            </Link>



          </Grid>
          <Grid item xs={6}>

            <Typography variant='inherit' sx={{ color: 'blue' }}>
               {post.movie.title} 
            </Typography>
            <Typography sx={{ lineHeight: '22px', fontSize: '14px' }} >
              
              <span ><b>Yönetmen:</b></span>{crews.map(name=>
                name.job=="Director"?name.name:null)}
            </Typography>
            <Typography sx={{ lineHeight: '22px', fontSize: '14px' }} >
              <span><b>Oyuncular:</b>{crews.map(name=>
               name.job==null?name.name+", ":null) }</span>
            </Typography>
            <Typography sx={{ lineHeight: '22px', fontWeight: "", fontSize: '14px' }} >
            <span ><b>Bestekar:</b></span>{crews.map(name=>
                name.job=="Original Music Composer"?name.name+", ":null)}
            </Typography>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="flex-end"
            alignItems="center" item xs={4}>

            <Tooltip title="Beğen"
              arrow="true">
              <IconButton aria-label="add to favorites"
              >
                <Checkbox icon={<FavoriteBorder color='indigo' />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#a5b4fc" }}>12</Typography>
              </IconButton>
            </Tooltip >


            <Tooltip title="Yorum Yap"
              arrow="true">
              <IconButton aria-label="share">
                <Comment color='indigo' />
              </IconButton>
            </Tooltip>

            <Tooltip title="Kaydet"
              arrow="true">
              <IconButton aria-label="share">
                <Save color='indigo' />
              </IconButton>
            </Tooltip>

            <Tooltip title="Paylaş"
              arrow="true">
              <IconButton aria-label="share">
                <Share color='indigo' />
              </IconButton>
            </Tooltip>

          </Grid>
        </Grid>
        


      </CardActions>
      <Grid item xs={12} sx={{mt:2, mb:3, ml:70}}>
          <Input 
            placeholder='Yorum yaz...'
          ></Input>
        </Grid>
    </Card>
  )
}

export default PostQuote