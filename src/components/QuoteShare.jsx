import React, { useState } from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardActionArea, CardHeader, CardMedia, Grid, Checkbox, IconButton, Typography, Tooltip, Input, Modal, Button, Dialog, DialogContent, DialogTitle, TextField, InputBase, Autocomplete } from '@mui/material'
import { Comment, Favorite, FavoriteBorder, MoreVert, Save, Share } from '@mui/icons-material'
import { json, Link, Route, Routes } from 'react-router-dom'
import SettingsButton from './SettingsButton'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import moviesServices from '../services/client_services/movies-services'
import UploadFiles from './UploadFiles'
import UserService from '../services/client_services/users-services'
import QuoteService from '../services/client_services/quotes-services'



const QuoteShare = () => {
   
    const [file, setFile] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };


    var userId = ""
    var userName = ""
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        

        var retrievedObject = localStorage.getItem('userInfo');
        userId = JSON.parse(retrievedObject).userId;
        userName = JSON.parse(retrievedObject).userName;
        const data2 = {
            Description: data.get('desc'),
            MovieId: movieId.toString(),
            UserId: userId,
            ImagePath: userName

        }

        console.log("bu data2'dir  " + data2)
        QuoteService.postQuote(data2).then(function (response) {
            //handle success
            console.log(response.data);
            
            QuoteService.postQuoteImage(userName,response.data.id,file)
            .then(function(response){

            })
            .catch(function(error){
                console.log(error.response.data.message)
            })
            

        })
            .catch(function (error) {
                //handle error
                console.log(error.response.data.message);
            });


            



    };
   




    const theme = createTheme();
    const [open, setOpen] = React.useState(false);
    const [top100films, SetTop100Films] = useState([])
    const [movie, SetMovie] = useState([])
    const [movieId, SetMovieId] = useState(0)
    const [responseId, SetResponseId] = useState(0);
    let movieIdd = 0

    var timer = 0
    if (movie.posterPath != null) {
        var imgg = "https://image.tmdb.org/t/p/w154/" + movie.posterPath
    }



    var query = "";


    function getMovie(id) {

        moviesServices.getMovieById(id)
            .then((res) => SetMovie(res.data.movie))

    }
    
    

    function myApi() {
        var replacedQuery = query.replace(/ /g, '+');

        axios(`https://api.themoviedb.org/3/search/movie?query=${replacedQuery}&api_key=cde21e835ed34679a10746ce57a3ec54`)
            .then((res) => SetTop100Films(res.data.results))
    }
    const defaultProps = {
        options: top100films,
        getOptionLabel: (option) => option.original_title
    };







    

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    return (
        <ThemeProvider theme={theme}>
            <Button sx={{ color: "white" }} onClick={handleOpen}>Alıntı Paylaş</Button>
            <Dialog
                maxWidth='xl'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle>Alıntı Paylaş</DialogTitle>
                <DialogContent>
                    <Card sx={{ border: "groove 1px #a5b4fc", borderRadius: "6px", padding: "4px", marginBottom: "20px" }}>

                        {/* <CardHeader
                avatar={
                    <Link to="profile"
                    //state={{ from: userName }}
                    >
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"
                            src="{profileImg}"
                        >
                        </Avatar>
                    </Link>
                }
                action={
                    <SettingsButton />
                }
                title=<Link
                    //state={{ from: userName }} 
                    style={{ textDecoration: 'none' }} to="profile" ><Typography >Lili</Typography></Link>
                subheader="deneme"
            /> */}


                        <CardContent >

                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12}>

                                        <TextField sx={{ height: "50px" }}
                                            color="secondary"
                                            required
                                            fullWidth
                                            id="desc"
                                            maxRows={2}
                                            multiline="true"
                                            name="desc"
                                            placeholder='Açıklama'

                                        />


                                        <label htmlFor="btn-upload">
                                            <input
                                                id="btn-upload"
                                                name="btn-upload"
                                                style={{ display: 'none' }}
                                                type="file"
                                                onChange={handleFileChange} />
                                            <Button
                                                className="btn-choose"
                                                variant="outlined"
                                                component="span" >
                                                Resim Seç
                                            </Button>
                                        </label>
                                        <div className="file-name">
                                        {file && `${file.name}`}
                                        </div>



                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"

                                    size='large'
                                    variant="contained"
                                    sx={{
                                        mt: 3, mb: 2, marginLeft: "850px", bgcolor: "primary", borderRadius: 2
                                    }}
                                >
                                    Paylaş
                                </Button>
                                <Grid container justifyContent="flex-end">

                                </Grid>
                            </Box>






                        </CardContent>

                        <CardActions disableSpacing >
                            {movieId != 0 ? <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                                <Grid item xs={2}>

                                    <Link
                                        to={"/movie"}
                                    //state={{ from: post.movieId }}
                                    >
                                        <CardMedia
                                            sx={{ width: "100%", marginLeft: "6%", borderRadius: "4%" }}
                                            component="img"
                                            image={imgg}

                                        />
                                    </Link>



                                </Grid>
                                <Grid item xs={6}>

                                    <Typography variant='inherit' sx={{ color: 'blue' }}>
                                        post.movie.title
                                    </Typography>
                                    <Typography sx={{ lineHeight: '22px', fontSize: '14px' }} >

                                        <span ><b>Yönetmen:</b></span>
                                    </Typography>
                                    <Typography sx={{ lineHeight: '22px', fontSize: '14px' }} >
                                        <span><b>Oyuncular:</b></span>
                                    </Typography>
                                    <Typography sx={{ lineHeight: '22px', fontWeight: "", fontSize: '14px' }} >
                                        <span ><b>Bestekar:</b></span>
                                    </Typography>
                                </Grid>

                            </Grid> : null}



                        </CardActions>
                        <Grid item xs={12} sx={{ mt: 2, mb: 3, ml: 70 }}>
                            
                            <Autocomplete placeholder='Film Seçiniz...' sx={{ width: "390px" }}
                                {...defaultProps}



                                id="clear-on-escape"
                                onChange={(a, b) => {

                                    SetMovieId(b.id)
                                    getMovie(b.id)
                                }
                                }

                                onInputChange={(event, newInputValue) => {

                                    query = newInputValue


                                    clearTimeout(timer)

                                    const newTimer = setTimeout(() => {
                                        myApi()
                                    }, 500)

                                    timer = newTimer


                                }}

                                clearOnEscape
                                renderInput={(params) => (
                                    <TextField {...params} label="" placeholder='search...' type="text" variant="standard" />
                                )}
                            />
                        </Grid>
                    </Card>
                </DialogContent>
            </Dialog>


        </ThemeProvider>
    )
}

export default QuoteShare