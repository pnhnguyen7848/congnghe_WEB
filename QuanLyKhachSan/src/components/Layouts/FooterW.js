import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    fontWeight: "300",
    color: "#333333",
    lineHeight: 0,
    
    backgroundColor: "#ffff",
    
    fontFamily: ["Roboto"].join(","),
    "&:hover": {
      backgroundColor: "#fff",
      color: "#999999",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#fff",
      borderColor: "#fff"
    },
    
  });

export const FooterW = () => {
    return (
        <div class="App-header">
            
            <Stack spacing={2} direction="row">
              
              
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    Projects     
                    </BootstrapButton> 
                    
                </Link>
                <Link to="/home" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>
              
            
                <Link to="/news" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    News
                    </BootstrapButton> 
                
                </Link>

                <Link to="/home" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>

                <Link to="/about" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    About
                    </BootstrapButton> 
                
                </Link>                   
                
                <Link to="/home" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>

                <Link to="/contact" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    Contact
                    </BootstrapButton> 
                
                </Link>   
                
            </Stack>
            < AutoGrid />
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
      <Box sx={{ flexGrow: 1 }} style={{width:'1440px'}}>
        <Grid container spacing>
          <Grid item xs>
            
          </Grid>
          <Grid item xs>
            <Item>a</Item>
          </Grid>
          <Grid item xs>
           
          </Grid>
        </Grid>
      </Box>
    );
  }
  