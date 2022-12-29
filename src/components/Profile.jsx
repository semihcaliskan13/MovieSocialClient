import { Box, Card, Divider, IconButton } from '@mui/material'
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Avatar, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import PostQuotes from './PostQuotes';
import '../style.css'
import { Link, useLocation } from 'react-router-dom';
import ProfileHttp from "../services/client_services/user-detail-services"
import { useEffect } from 'react';
import { useState } from 'react';

const Profile = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from)

const [image,setImage] = useState([])

  var retrievedObject = localStorage.getItem('userInfo');
  var userName= JSON.parse(retrievedObject).userName


  //console.log('retrievedObject: ', JSON.parse(retrievedObject).userId);

  useEffect(()=>{
    ProfileHttp.getPhoto(from)
    
  .then(res=>{
    console.log(res.data)
    setImage(res.data)
  
  })
  .catch(error=>{
    
  })
},[])

var profileImg=`https://moviesocial.blob.core.windows.net/${from}/${image}`
console.log(profileImg)


  return (
    
      <Box sx={{
        width: "80%",
        margin: 5, padding: 2,
        alignItems: "center",
        justifyContent: "center"
      }}>


        <CardMedia sx={{ width: "100%", height: "240px", borderRadius: "6px" }}
          component="img"
          image="https://iasbh.tmgrup.com.tr/83f5f7/1200/627/0/0/620/323?u=https://isbh.tmgrup.com.tr/sbh/2022/06/13/sihirli-annem-neden-yok-sihirli-annem-kaldirildi-mi-ne-zaman-yayinlanacak-kanal-d-yayin-akisi-1655105719996.jpg"
          alt="green iguana"
        />
        <Avatar style={{
          zIndex: "100", bgcolor: "white", width: "5.1875rem",
          height: "5.1875rem", marginTop: " -2.6875rem", marginLeft: " 0.9375rem", justifyContent: " center",
          alignItems: " center", borderRadius: "80px", border: "solid 3px white", overflow: "hidden"
        }}
          src={profileImg}
        ></Avatar>


        <CardContent>
          <Typography sx={{ fontWeight: "bold" }}>Çilek Peri</Typography>
          <Typography sx={{ color: "gray" }}>@cilek</Typography>
          <Typography sx={{marginTop:"5px"}}>Keşke büyük olsam :(</Typography>

          <Box sx={{marginTop:"5px"}}>
            <Typography color='text.secondary' sx={{ fontSize:"14px"}}>@cilek bu filmi öneriyor</Typography>
            <CardMedia
                sx={{ width: "8%", marginLeft: "6%", borderRadius: "4%" }}
                component="img"

                image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IPCEr7ifdH5CtU97QG7XgAAtOp.jpg"
                alt="green iguana"
              />
            
          </Box>
        </CardContent>
        <div className='stickyy'>
          <Grid container spacing={1} sx={{ marginTop: "5px" }}> 
              <Grid item xs={3}>
              <a href='#top' style={{ textDecoration: 'none' }} >
                <IconButton sx={{fontWeight:"bold", fontSize: "16px", color: "black"}}>               
                  Duvar
                </IconButton>
                </a>

              </Grid>
              <Grid item xs={3}>
                
              
                <Link to="/movies" style={{ textDecoration: 'none' }} >
                <IconButton sx={{fontWeight:"bold", fontSize: "16px", color: "black" }}>
                   Filmler
                   </IconButton>
                   </Link>
               
                                
              </Grid>
              <Grid item xs={3}>
                <Link to="/musics" style={{ textDecoration: 'none' }} >
                <IconButton sx={{fontWeight:"bold",fontSize: "16px", color: "black" }}>
                  Müzikler
                </IconButton>
                </Link>
                

              </Grid>
              <Grid item xs={3}>
                <Link to="/quotes" style={{ textDecoration: 'none' }} >
                <IconButton sx={{fontWeight:"bold", fontSize: "16px", color: "black" }}>
                  Alıntılar
                </IconButton>
                </Link>
                

              </Grid>
            </Grid> 
            <Divider sx={{ marginTop: "5px" }} /> 
          </div>
          
        <CardContent>
       
          <PostQuotes />
        </CardContent>

      </Box >
   






  )
}

export default Profile