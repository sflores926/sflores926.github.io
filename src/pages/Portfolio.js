import React from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { projects } from "../projects";


export default function Portfolio() {
  return (
    <CardColumns className="row">
        {/* <div className=""> */}
          {projects.map((project) => (
            <Card
              href={project.link}
              key={project.image}
              className="col-4 p-4">
              {/* <div className=""> */}
                <Card.Img
                  alt="gallery"
                  className=""
                  src={project.image}
                  variant='top'
                />
                <Card.Body className="text-center ">
                  <h4 className=" ">
                    {project.title}
                  </h4>
                  <p className=" ">
                    {project.subtitle}
                  </p>
                  <p className="">{project.description}</p>
                </Card.Body>
              {/* </div> */}
            </Card>
          ))}
        {/* </div> */}
    </CardColumns>
  );
}
