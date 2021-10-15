import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NewsItem from "../components/NewsItem";

const News = ({ projects }) => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center g-5">
          {projects.map((project) => (
            <NewsItem project={project} key={project.id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default News;
