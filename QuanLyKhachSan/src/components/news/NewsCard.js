import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";

const StyleButton = styled(Button)({
    color: 'black',
});

const StyleCard = styled(Card)({
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 0,
    boxShadow: 'none'
  });

export default function NewsCard() {
  return (
    <StyleCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://dplusvn.com/wp-content/uploads/2020/01/hinh-anh-van-phong-cong-ty-ggroup-2.jpg"
        alt="green iguana"
      />
      <CardContent>
      <CardActions>
        <StyleButton size="small">Photoshooting | Piera House</StyleButton>
      </CardActions>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </StyleCard>
  );
}

