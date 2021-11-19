import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProjectCard from '../components/project/ProjectCard';
import { ProjectNavbar } from '../components/project/ProjectNavbar';

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

const StyleProjects = styled(ProjectCard)({
  "&:hover": {
    color: 'red'
  },
});

export default function ProjectList() {
  return (
    <React.Fragment>
      <ProjectNavbar></ProjectNavbar>
      <Container width="200">
        <StyleBox >
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
          <StyleProjects />
        </StyleBox>
      </Container>
    </React.Fragment>
  );
}
