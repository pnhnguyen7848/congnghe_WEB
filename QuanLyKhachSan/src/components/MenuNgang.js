import { Link } from 'react-router-dom';

export const MenuNgang = () => {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/news">News</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </>
    )
};