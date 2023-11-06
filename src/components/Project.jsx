import { useState } from "react";

function List(props) {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    full_name: "",
  });
}

export default function Project() {
  return <div className="projects"></div>;
}
