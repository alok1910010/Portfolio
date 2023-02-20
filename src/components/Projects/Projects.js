import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="shop.com - clone"
              description="This is a E-commerce website which sells clothes,beauty,health and nutrition, shoes, electronics etc."
              ghLink="https://github.com"
              demoLink="https://"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="IKEA.com - clone"
              description="This is a E-commerce website which sellsfurniture, kitchen appliances, decoration,home accessories."
              ghLink="https://github.com"
              demoLink="https://"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
