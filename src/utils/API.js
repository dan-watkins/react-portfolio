import axios from "axios";

const getAllProjects = async () =>
  axios.get(`https://api.github.com/users/dan-watkins/repos`);

const getSingleProject = async (id) =>
  axios.get(`https://api.github.com/repos/dan-watkins/${id}`);

export default { getAllProjects, getSingleProject };
