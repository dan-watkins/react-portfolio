import { useState, useEffect } from "react";
import API from "../utils/API";

export default function ProjectPage() {
  const [project, setProject] = useState([]);

  const getProject = async () => {
    const data = await API.getAllProjects();
    setProject(data);
  };

  useEffect(() => {
    getProject();
    console.log(project);
  }, []);

  return (
    <div>
      <h1>See Below</h1>
      <ul>
        {/* {project.map((project) => {
          <li key={project.index}>{project.id | project.name}</li>;
        })} */}
      </ul>
    </div>
  );
}
