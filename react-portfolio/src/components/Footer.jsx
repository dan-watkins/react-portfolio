export default function Footer() {
  const year = new Date().getFullYear();

  return <footer>{`Copyright @ Dan Watkins ${year}`}</footer>;
}
