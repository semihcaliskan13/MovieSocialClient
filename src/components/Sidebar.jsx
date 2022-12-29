import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, IconButton, Card, Fab, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import { Audiotrack, ExpandLess, ExpandMore, FormatQuote, Menu, Movie, Person } from '@mui/icons-material';
import { Link } from "react-router-dom";

const Sidebar = () => {


  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box bgcolor="#f8fafc" height="100vh" flex={1} p={0} sx={{ display: { xs: "none", sm: "block" }, marginTop: "16px" }}>
      <Box bgcolor="#f8fafc" position="fixed" >
        <Card variant="outlined" height="100vh" sx={{ marginLeft: "0" }} >
          <IconButton >
            <ExpandLess color='navyBlue'></ExpandLess>
          </IconButton>

          <List>
            <ListItem disablePadding>
              <Link to="movies" style={{ textDecoration: 'none' }}>
                <ListItemButton>
                  <ListItemIcon >
                    <Movie color='cyan' />
                  </ListItemIcon>
                  <ListItemText primary="Filmler" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Audiotrack color='sky' />
                </ListItemIcon>
                <ListItemText primary="Müzikler" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FormatQuote color='blue' />
                </ListItemIcon>
                <ListItemText primary="Alıntılar" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person color='indigo' />
                </ListItemIcon>
                <ListItemText primary="Yönetmenler" />
              </ListItemButton>
            </ListItem>

            {/* <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon color='violet' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon color='purple' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon color='fuchsia' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon color='pink' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon color='rose' />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem> */}

          </List>
        </Card>
        
      </Box>
      <Box  sx={{marginTop:"500px",marginLeft:"50px",position:"fixed"}}>
      <IconButton>
          <Fab color="secondary">
            <Typography >+</Typography>
          </Fab>
      </IconButton>
      </Box>
     
    </Box>

  )
}

export default Sidebar
