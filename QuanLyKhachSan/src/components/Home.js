
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export const Home = () => {
    return (
      
        <AutoGrid>
          
        </AutoGrid>
    )
};




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: "none",
  textTransform: "none",
  marginTop:"1rem",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={8}>
          <Item><Slideshow/></Item>
        </Grid>
        <Grid item xs>
         
        </Grid>
      </Grid>
    </Box>
  );
}




const slideImages = [
  {
    url: "https://www.pexels.com/photo/view-of-cityscape-325185",
    caption: 'Slide 1'
   
  },
  {
    url: './img/bg2.jpg',
    caption: 'Slide 2'
  },
  {
    url: './bg1.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}


