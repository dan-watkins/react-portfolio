import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Header() {
  const location = useLocation();

  const activeLink = (path) => location.pathname === path;

  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link" style={{ color: "white" }}>
          Daniel Watkins
        </Link>,
        <Link
          key={2}
          className="nav-link"
          to="/about"
          style={{ color: activeLink("/about") ? "lightsteelblue" : "white" }}
        >
          About Me
        </Link>,
        <Link
          key={3}
          className="nav-link"
          to="/portfolio"
          style={{
            color: activeLink("/portfolio") ? "lightsteelblue" : "white",
          }}
        >
          Portfolio
        </Link>,
        <Link
          key={4}
          className="nav-link"
          to="/contact"
          style={{ color: activeLink("/contact") ? "lightsteelblue" : "white" }}
        >
          Contact Me
        </Link>,
        <Link
          key={5}
          className="nav-link"
          to="/resume"
          style={{ color: activeLink("/resume") ? "lightsteelblue" : "white" }}
        >
          Resume
        </Link>,
      ]}
    />
  );
}
