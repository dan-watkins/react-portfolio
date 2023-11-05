import { useState, useEffect } from "react";
import CardContainer from "../components/UI/Card";
import API from "../utils/API";

export default function ProjectPage() {
  const [project, setProject] = useState([]);

  const getProject = async () => {
    const data = await API.getAllProjects();
    setProject(data);
    console.log(project);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <CardContainer project={project}></CardContainer>
    </>
  );
}
