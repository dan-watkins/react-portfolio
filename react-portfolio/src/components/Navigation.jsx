import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import AboutPage from '../pages/AboutPage';

export default function Navigation() {
    return (
        <Navbar
          links={[
            <Link className="nav-link text-light" to="/">
              Home
            </Link>,
            <Link className="nav-link text-light" to="/about">
              About Me
            </Link>,
            <Link className="nav-link text-light" to="/project/:id">
            Projects
          </Link>,
          <Link className="nav-link text-light" to="/contact">
          Contact Me
        </Link>,
          ]}
        />
      );
    }