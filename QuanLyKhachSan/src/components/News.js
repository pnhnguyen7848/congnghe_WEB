import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import 'react-slideshow-image/dist/styles.css'

export const News = () => {
   
    return (
        
         <div class="news-gt">
            <AutoGrid></AutoGrid>
         </div>
         
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
          <Item> news</Item>
          </Grid>
          <Grid item xs>
            <Item> news</Item>
          </Grid>
          <Grid item xs>
          <Item> news</Item>
          </Grid>
          <Grid item xs>
          <Item> news</Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
  