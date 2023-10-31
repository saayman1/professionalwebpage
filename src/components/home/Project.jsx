import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ heading, username, length, specificRepos }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const dummyProjectsArr = new Array(length).fill(dummyProject);

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    try {
      // Getting all repos
      const response = await axios.get(allReposAPI);

      // Filter out specified repos
      const filteredRepos = response.data.filter(
        (repo) => !specificRepos.includes(repo.name)
      );

      // Slicing to the length
      const slicedRepos = filteredRepos.slice(0, length);

      // Setting projectsArray
      setProjectsArray(slicedRepos);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specificRepos]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
