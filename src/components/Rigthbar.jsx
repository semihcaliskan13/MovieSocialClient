
import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import { height } from '@mui/system';


const Rigthbar = () => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 16 ,marginBottom: 3, color:"#4338ca"}} /*color="text.secondary"*/ gutterBottom>
          Ne izlesem?
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md:3 }}>
            <Grid item xs={6} md={3}>
           
              <CardMedia
                sx={{ width: "100%", marginLeft: "6%", borderRadius: "4%" }}
                component="img"

                image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IPCEr7ifdH5CtU97QG7XgAAtOp.jpg"
                alt="green iguana"
              />
             
              
            </Grid>
            <Grid item xs={2} md={9}>
           
           <Typography variant='inherit' sx={{color:'blue'}}>
            The Dark Knight
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'12px', fontWeight:"bold"}} >
            <span ><b>Yönetmen:</b></span> Christoper Nolan
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'14px', fontWeight:"bold"}} >
            Oyuncular:
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'14px', fontWeight:"bold"}} > 
            Bestekar:
           </Typography> 
              
         </Grid>
         <Grid item xs={6} md={3}>
           
              <CardMedia
                sx={{ width: "100%", marginLeft: "6%", borderRadius: "4%" }}
                component="img"

                image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IPCEr7ifdH5CtU97QG7XgAAtOp.jpg"
                alt="green iguana"
              />
             
              
            </Grid>
            <Grid item xs={2} md={9}>
           
           <Typography variant='inherit' sx={{color:'blue'}}>
            The Dark Knight
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'12px', fontWeight:"bold"}} >
            <span ><b>Yönetmen:</b></span> Christoper Nolan
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'14px', fontWeight:"bold"}} >
            Oyuncular:
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'14px', fontWeight:"bold"}} > 
            Bestekar:
           </Typography> 
              
         </Grid>
         <Grid item xs={6} md={3}>
           
              <CardMedia
                sx={{ width: "100%", marginLeft: "6%", borderRadius: "4%" }}
                component="img"

                image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IPCEr7ifdH5CtU97QG7XgAAtOp.jpg"
                alt="green iguana"
              />
             
              
            </Grid>
            <Grid item xs={2} md={9}>
           
           <Typography variant='inherit' sx={{color:'blue'}}>
            The Dark Knight
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'12px'}} >
            <span ><b>Yönetmen:</b></span> Christoper Nolan
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'14px', fontWeight:"bold"}} >
            <b>Oyuncular:</b>
           </Typography>
           <Typography sx={{lineHeight:'22px,',fontSize:'14px', fontWeight:"bold"}} > 
            Bestekar:
           </Typography> 
              
         </Grid>
         </Grid>
      </CardContent>
      
    </React.Fragment>
  );
  return (
    <Box bgcolor="#f8fafc" flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box sx={{ minWidth: 275 ,position:"fixed"}}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </Box>
  )
}

export default Rigthbar
