import * as React from 'react';
import { Link } from '@mui/material';

export default function ProjectCard() {
  return (
    <Link class="about-picture" href="#">
      <img src="https://noithatmyhouse.com/wp-content/uploads/2019/06/dien-tich-phong-khach-san-tieu-chuan_2.jpg" alt="activities1" />
      <p class="picture-tittle">
        Team Working
      </p>
    </Link>
  );
}
