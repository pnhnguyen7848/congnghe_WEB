import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import * as React from 'react';

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

export const ProjectNavbar = () => {
    return (
        <div class="App-header App-header-projects">
            <Stack spacing={2} direction="row">
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    ALL    
                    </BootstrapButton> 
                    
                </Link>
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>
              
            
                <Link to="/news" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    INTERRIOR DESIGN
                    </BootstrapButton> 
                
                </Link>

                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>

                <Link to="/about" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    PRODUCT DESIGN
                    </BootstrapButton> 
                
                </Link>                   
                
                <Link to="/projects" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" style={{marginLeft:"-25px",marginRight:"-25px"}}>
                     |  
                    </BootstrapButton> 
                </Link>

                <Link to="/contact" style={{textDecoration:"none"}}>
                    <BootstrapButton variant="contained" >
                    BIG SCALE
                    </BootstrapButton> 
                </Link>   

            </Stack>
           
        </div>
    )
};
