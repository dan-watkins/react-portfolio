export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="home" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="about" class="nav-link px-2 text-muted">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a href="project/:id" class="nav-link px-2 text-muted">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a href="contact" class="nav-link px-2 text-muted">
              Contact Me
            </a>
          </li>
          <li class="nav-item">
            <a href="resume" class="nav-link px-2 text-muted">
              Resume
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">&copy; Daniel Watkins {year}</p>
      </footer>
    </div>
  );
}
