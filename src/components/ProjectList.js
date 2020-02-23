// DEPRECATED BECAUSE WE ARE ACTUALLY RENDERING THIS DIRECTLY IN PROJECTLISTCONTAINER



import React, { Component, PropTypes } from 'react';
import '../styles/ProjectList.scss';
import ProjectListing from './projectListComponents/ProjectListing'
import ListHeader from './projectListComponents/ListHeader'




export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {

    const projectEntries = projects.map((project, index) => {
      return <Project key={index} project={project} />;
    });

    const { project, projectLinks } = this.props;
    return (
      <div className="upper-container" style={{background: project.background_color}}>
        <div className="inner-container align-text-left">
            <ListHeader text="Recent Projects" />
            <ProjectListing title={project.title} />
            <ProjectListing title={project.title} />
            <ProjectListing title={project.title} />
            <ProjectListing title={project.title} />
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  // projectLinks: PropTypes.object.isRequired
};
