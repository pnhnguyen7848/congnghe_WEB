import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NewsCard from '../components/news/NewsCard';

const StyleBox = styled(Box)({
  padding: '1.5em',
  // backgroundColor: '#cfe8fc',
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn'
});

const StyleNews = styled(NewsCard)({
  "&:hover": {
    color: 'red'
  },
});

export default function NewsList() {
  return (
    <React.Fragment>
      <Container width="200">
        <StyleBox >
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
          <StyleNews />
        </StyleBox>
      </Container>
    </React.Fragment>
  );
}
