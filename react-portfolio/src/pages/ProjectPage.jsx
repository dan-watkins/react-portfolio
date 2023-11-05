import { useState, useEffect } from "react";
import CardContainer from "../components/UI/Card";
import API from "../utils/API";

export default function ProjectPage() {
  const [project, setProject] = useState({});

  useEffect(() => {
    const getProject = async () => {
      const data = await API.getAllProjects();
      const list = data.data;
      setProject(list);
      console.log(project);
    };

    getProject();
  }, []);

  return (
    <>
      <CardContainer project={project[0]}></CardContainer>
      <CardContainer project={project[1]}></CardContainer>
      <CardContainer project={project[2]}></CardContainer>
      <CardContainer project={project[3]}></CardContainer>
      <CardContainer project={project[4]}></CardContainer>
      <CardContainer project={project[5]}></CardContainer>
    </>
  );
}
