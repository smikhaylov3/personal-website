

import React, { Component } from 'react';

export default class ProjectListing extends Component {
  render() {
    const { title, description, name, date } = this.props;
    return (
      <div className="project-entry">
        <div>
          <div>
            {title}
          </div>
          <div className="project-date">
            {date}
          </div>
          <hr className="fancy-line"></hr>
        </div>
      </div>
    );
  }
}
