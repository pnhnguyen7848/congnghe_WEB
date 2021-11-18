import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import logo from './logo.svg';

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

export const HeaderW = () => {
    return (
        <div class="App-header">
             <Stack spacing={2} direction="row" style={{textDecoration:"none", marginBottom:"1rem", marginTop:"5rem"}}>
             <Link to="/home" style={{textDecoration:"none"}}>
                   
                   <Button  variant="text">
                       <img src={logo} className="App-logo" alt="logo" />
                   </Button>
               </Link>
            </Stack>
            <Stack spacing={2} direction="row">
              
              
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    Projects     
                    </BootstrapButton> 
                    
                </Link>
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>
              
            
                <Link to="/news" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    News
                    </BootstrapButton> 
                
                </Link>

                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>

                <Link to="/about" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    About
                    </BootstrapButton> 
                
                </Link>                   
                
                <Link to="/projects" style={{textDecoration:"none"}}>
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
           
        </div>
    )
};