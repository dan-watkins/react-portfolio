export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-light-hover-color">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
