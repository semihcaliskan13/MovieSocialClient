import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserService from "../services/client_services/users-services";
import imga from "../assets/cinema.png"
import { Modal } from '@mui/material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const data2={
      UsernameOrEmail:data.get('email'),  
      Password:data.get('password'),
      
      
    }
    console.log(data2)
    UserService.login(data2).then(function (response) {
      //handle success
      console.log(response.data.userInfo);
      localStorage.setItem('userInfo', JSON.stringify(response.data.userInfo));
      
    })
      .catch(function (error) {
        //handle error
        console.log(error.response.data.message);
      });

var retrievedObject = localStorage.getItem('userInfo');
console.log('retrievedObject: ', JSON.parse(retrievedObject).userId);
  };

  
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <ThemeProvider theme={theme}>
       <Button sx={{color:"white"}} onClick={handleOpen}>GİRİŞ YAP</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={{ backgroundColor: "#ede9fe", borderRadius: 4 }} component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{

              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, width: 60, height: 60 }}
              src={imga}
            >

            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#4f46e5" }}>
              Giriş
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                
                <Grid item xs={12}>
                  <TextField
                    color="secondary"
                    hidden="true"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    color="secondary"
                    required
                    fullWidth
                    name="password"
                    label="Şifre"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>              
              </Grid>
              <Button
                type="submit"
                fullWidth
                size='large'
                variant="contained"
                sx={{
                  mt: 3, mb: 2, backgroundImage: "linear-gradient(to right, blue, indigo, purple,fuchsia, pink)", borderRadius: 2
                }}
              >
                GİRİŞ YAP
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: "#8b5cf6" }}>
                    Hesabın yok mu? Kaydol
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5, color: "#93c5fd" }} />
        </Container>
      </Modal>


    </ThemeProvider>
  );
}
export default Login