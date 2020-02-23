
import React, { Component } from 'react';

export default class SocialListing extends Component {
  render() {
    const { title, description, name, date, url } = this.props;
    return (
      <div className="project-entry">
        <div>
          <a href={`${url}`} className="links-no-decorate">
            <div>
              {title}
            </div>
            <div className="project-date">
              {description}
            </div>
            <hr className="fancy-line"></hr>
          </a>
        </div>
      </div>
    );
  }
}
