import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  

const Post = () => {
    const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm:"block" } }}>
        <Card sx={{margin:5}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                         <MoreVert />
                    </IconButton>
                }
                title="John Doe"
                subheader={ currentDate }
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/13760308/pexels-photo-13760308.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=279.825&fit=crop&h=453.05"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                
            </CardActions>
            
        </Card>
    </Box>
  )
}

export default Post