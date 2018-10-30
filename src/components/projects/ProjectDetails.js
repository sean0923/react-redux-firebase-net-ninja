import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetails = props => {
  const { id } = props.match.params;
  const { project } = props;

  if (project) {
    const { title, content, authorFirstName, authorLastName } = project;

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {title} - {id}
            </span>
            <p>{content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by The {authorFirstName} {authorLastName}
            </div>
            <div>18th October, 9pm</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>Loading...</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log('state: ', state);
  const { projects } = state.firestore.data;
  const { id } = ownProps.match.params;

  const project = projects ? projects[id] : null;

  return { project };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }, { collection: 'users' }])
)(ProjectDetails);
