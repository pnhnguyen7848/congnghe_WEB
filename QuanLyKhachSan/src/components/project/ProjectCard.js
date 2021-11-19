import * as React from 'react';
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';

const StyleCard = styled(Card)({
  width: 345,
  marginTop: 8,
  marginBottom: 8,
  maxHeight: 200,
  border: 'none',
  borderRadius: 'none',

});

export default function ProjectCard() {

  return (
    <StyleCard>
      <CardMedia
        tittle="Room"
        component="img"
        height="200"
        image="https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg"
        alt="Paella dish"
      />
      <Link>Button</Link>
    </StyleCard>
  );
}
