import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Header() {
  return (
    <Navbar
      links={[
        <Link className="nav-link text-light" to="/home">
          Daniel Watkins
        </Link>,
        <Link className="nav-link text-light" to="/about">
          About Me
        </Link>,
        <Link className="nav-link text-light" to="/project/:id">
          Portfolio
        </Link>,
        <Link className="nav-link text-light" to="/contact">
          Contact Me
        </Link>,
        <Link className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
