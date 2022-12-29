import { AppBar, Autocomplete, Avatar, Badge, Box, Button, Menu, MenuItem, styled, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState, useEffect} from 'react'
import {AcUnit, Mail, Notifications} from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from './Profile'
import ProfileHttp from '../services/client_services/user-detail-services'
import QuoteShare from './QuoteShare'

const Navbar = () => {

  const [image,setImage] = useState([])

  var retrievedObject = localStorage.getItem('userInfo');
  var userName=""  //JSON.parse(retrievedObject).userName
  //BURASI FENA PATLIYOR EĞER KULLANICI GİRİŞ YAPMIŞSA BURAYI KONTROL ET YANİ BİR ŞEKİLDE AYAR ÇEK YOKSA SİTEE AÇILMIYOR.
  if(userName==null)
  {
    userName=""
  }
  else{
    var userName=JSON.parse(retrievedObject).userName
  }


  //console.log('retrievedObject: ', JSON.parse(retrievedObject).userId);

  useEffect(()=>{
    ProfileHttp.getPhoto(userName)
    
  .then(res=>{
    console.log(res.data)
    setImage(res.data)//Burası res.data olacak büyük ihtimalle çünkü back-end değişti.
  
  })
  .catch(error=>{
    
  })
},[])

var profileImg=`https://moviesocial.blob.core.windows.net/${userName}/${image}`

  const StyledToolbar= styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
  });

  const Search= styled("div")(({theme})=>({
    backgroundColor:"#75E6DA",
    padding:"4px 10px",
    borderRadius:"50px",
    width:"40%",
  }));

  const Icons=styled(Box)(({theme})=>({
    display:"flex",
    gap:"20px",
  }));

  const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
  }));

  const [open, setOpen]=useState(false);
// var top100Films;
//    const defaultProps = {
//      options: top100Films,
//      getOptionLabel: (option) => option.name, 
 
//    };


  return (
    <AppBar position='sticky' sx={{bgcolor:"#0e7490"}}>
      <StyledToolbar>
      <Link to="/"style={{ textDecoration: 'none' }}><Typography variant='h6' sx={{color:"#75E6DA", display:{xs:"none", sm:"block"}}}>FROZEN</Typography></Link>
        
        <AcUnit fontSize='medium'  sx={{ color:"#75E6DA", display:{xs:"block", sm:"none"}}}/>

        <Search color='navyBlue'>
        {/* { <Autocomplete sx={{width:"590px"}}
        {...defaultProps}
        id="clear-on-escape"
        onChange={(a, b) => console.log(b.id)}
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="" placeholder='search...' type="text" variant="standard" />
        )}
      /> } */}
        </Search>


        <Button ><Register/> </Button>
        <Button ><Login/> </Button>
        <Button><QuoteShare/></Button>
        <Button sx={{color:'white'}}>semih</Button>
        <Icons sx={{display:{xs:"none", sm:"flex"}}}>
          <Badge badgeContent={4} color="navyBlue">
            <Mail sx={{color:"#75E6DA"}} />
          </Badge>
          <Badge badgeContent={5} color="navyBlue">
            <Notifications sx={{color:"#75E6DA"}} />
          </Badge>

          

          <Avatar sx={{width:30, height:30, display:{xs:"none", sm:"block"}}} 
          src={profileImg}
          onClick={(e)=>setOpen(true)}
          />
        </Icons>

        <UserBox sx={{display:{xs:"flex", sm:"none"}}}>
        <Avatar sx={{width:30, height:30}} 
        src="https://akns-images.eonline.com/eol_images/Entire_Site/2014212/rs_1024x759-140312104515-1024.Elsa-Frozen-Disney.jl.031214_copy.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top"
        onClick={e=>setOpen(true)}
        />
        <Typography sx={{color:"#05445E" }}>Elsa</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>(setOpen(false))}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Link to="profile" state={{ from: userName }} style={{ textDecoration:'none'}}>
        <MenuItem> Profile</MenuItem>
        </Link>
        
        <MenuItem> My account</MenuItem>
        <MenuItem> Logout</MenuItem>
      </Menu>
     
    </AppBar>
  )
}

export default Navbar