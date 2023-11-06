export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a
              href="https://github.com/dan-watkins"
              class="nav-link px-2 text-muted"
            >
              GitHub
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/daniel-watkins-08b41661/"
              class="nav-link px-2 text-muted"
            >
              LinkedIn
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://stackoverflow.com/"
              class="nav-link px-2 text-muted"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">&copy; Daniel Watkins {year}</p>
      </footer>
    </div>
  );
}
