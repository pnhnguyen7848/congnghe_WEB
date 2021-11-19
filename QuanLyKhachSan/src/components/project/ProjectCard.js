import * as React from 'react';
import { Link } from '@mui/material';

export default function ProjectCard({ project, ...rest }) {
  return (
    <Link class="about-picture" href={project.url}>
      <img src={project.image} alt="activities1" />
      <p class="picture-tittle">
        {project.title}
      </p>
    </Link>
  );
}
