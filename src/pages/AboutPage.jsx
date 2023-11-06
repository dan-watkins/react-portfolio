import { Figure } from "react-bootstrap";
import "../App.css";

export default function AboutPage() {
  return (
    <Figure className="figure-border">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://lh3.googleusercontent.com/pw/ADCreHf1cPTNanYVXwkz3nMxHjPnymquwjVuiLp2xqW0TiZde3DtQ5CaHdWI1zjRtrobNenwGcZXdkcmOGzf32fXqSWBIemX4g_eTeQvwhOTrhoLun5pE3Na9k06WaEVUg30PMvxeLKApgaBdrjEso0Uuc1h=w511-h909-s-no-gm?authuser=0"
      />
      <Figure.Caption className="figure-text">
        A student of technology taking a dive into the waters of Development.
        While still fairly new to the space I've dabbled from basic HTML, CSS,
        and JavaScript to now React, NodeJS, MongoDB, and many other
        technologies leading to what you see here today. Take a peek at what
        I've done so far under Portfolio, and feel free to reach out to me via
        the "Contact Me" section.
      </Figure.Caption>
    </Figure>
  );
}
