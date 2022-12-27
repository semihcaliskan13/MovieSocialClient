import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardActionArea, CardHeader, CardMedia, Grid, Checkbox, IconButton, Typography, Tooltip, Input, Modal, Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { Comment, Favorite, FavoriteBorder, MoreVert, Save, Share } from '@mui/icons-material'
import { Link, Route, Routes } from 'react-router-dom'
import SettingsButton from './SettingsButton'
import { createTheme, ThemeProvider } from '@mui/material/styles';



const QuoteShare = () => {
    const theme = createTheme();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    return (
        <ThemeProvider theme={theme}>
       <Button sx={{color:"white"}} onClick={handleOpen}>Alıntı Paylaş</Button>
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

            <CardHeader
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
            />


            <CardContent >
                <Box sx={{ border: "groove 1px #a5b4fc", borderRadius: "6px", padding: "4px" }}>
                    <Typography variant="body2" color="text.secondary">
                        aciklama
                    </Typography>
                </Box>

            </CardContent>

            <CardActions disableSpacing >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={2}>

                        <Link
                            to={"/movie"}
                        //state={{ from: post.movieId }}
                        >
                            <CardMedia
                                sx={{ width: "100%", marginLeft: "6%", borderRadius: "4%" }}
                                component="img"

                                image="{imgg}"
                                alt="green iguana"
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
            <Grid item xs={12} sx={{ mt: 2, mb: 3, ml: 70 }}>
                <Input
                    placeholder='Yorum yaz...'
                ></Input>
            </Grid>
        </Card>
        </DialogContent>
        </Dialog>


    </ThemeProvider>
    )
}

export default QuoteShare