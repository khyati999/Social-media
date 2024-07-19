import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} >
      <Box position="fixed" width={300} mt={2} mb={2}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar 
            alt="Remy Sharp" 
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800" 
          />
          <Avatar 
            alt="Travis Howard" 
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800" 
          />
          <Avatar 
            alt="Cindy Baker" 
            src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800" 
          />
          <Avatar 
            alt="Agnes Walker" 
            src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800" 
          />
          <Avatar 
            alt="Trevor Henderson" 
            src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=800" 
          />
          <Avatar 
            alt="Joseph" 
            src="" 
          />
          <Avatar 
            alt="Gracy" 
            src="" 
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100}>Latest Posts</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
            </ImageListItem>
            <ImageListItem>
                <img 
                    src="https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
            </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
        </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800" />
              </ListItemAvatar>
              <ListItemText
                  primary="Summer BBQ"
                  secondary={
                  <React.Fragment>
                      <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                         {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
              />
          </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </ListItemAvatar>
            <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
            />
         </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Rightbar