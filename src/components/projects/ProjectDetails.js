import React from 'react';

const ProjectDetails = props => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> Project Title - {id} </span>
          <p>
            Et velit labore omnis sunt accusantium accusantium similique quas est. Nisi ipsam qui
            qui non. Ut nihil mollitia aspernatur occaecati alias sint est omnis. Accusantium
            dignissimos voluptatem numquam. Aut atque alias ullam non assumenda qui aut.
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>18th October, 9pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
