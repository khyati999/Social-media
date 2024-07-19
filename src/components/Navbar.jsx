import { AppBar,Avatar,Badge,InputBase,Menu,MenuItem,Toolbar, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import ApiIcon from '@mui/icons-material/Api';
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
}));

const Icon = styled("box")(({theme})=>({
   display: "none",
   gap: "20px",
   alignItems: "center",
   [theme.breakpoints.up("sm")]:{
    display: "flex"
   }
}));
const UserBox = styled("Box")(({theme})=>({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
       }
 
 }));

const Navbar = () => {
  const [open, setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant="h6" sx={{ display: { xs: "none", sm:"block" } }}> Devloper </Typography>
                <ApiIcon sx={{ display: { xs: "block", sm:"none" } }}/>
                <Search><InputBase placeholder="Search"/></Search>
                <Icon>
                    <Badge badgeContent={4} color="error">
                        <Mail  />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar 
                        sx={{ width:30, height:30}} 
                        src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800"
                    onClick={e=>setOpen(true)}
                    />
                </Icon>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar 
                        sx={{ width:30, height:30}} 
                        src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800"
                    />
                    <Typography variant='span'>Alice</Typography>
                </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin=
            {{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin=
            {{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar