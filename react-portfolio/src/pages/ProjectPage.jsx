import { useState } from "react";
import API from "../utils/API";

const ProjectContainer = () => {
  API.getAllProjects().then((res) => {
    console.log(res);
  });
};

export default function ProjectPage() {
  ProjectContainer();
  return (
    <div>
      <h1>See Below</h1>
      <p>My Projects!</p>
    </div>
  );
}
