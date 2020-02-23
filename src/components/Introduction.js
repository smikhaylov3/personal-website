import React, { Component, PropTypes } from 'react';
import '../styles/introduction.scss';
import '../styles/parallax.scss';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="introduction">
        <div className="introduction__content">
          <h2 className="introduction__greeting fadeInQuick">
            {personalInfo.greeting}
          </h2>
          <h2 className="introduction__subgreeting fadeInQuick">
            {personalInfo.subGreeting}
          </h2>
          <h2 className="introduction__miniIntro fadeInSlow">
            {personalInfo.miniIntro}
          </h2>
          
          <div className="introduction__tagline fadeInSlower">
            <b>Currently:</b> Software Developer at Elavon
          </div>
          <div className="introduction__icons">
            <a href={personalInfo.github}><i className="fa fa-github icon"></i></a>
            <a href={personalInfo.linkedIn}><i className="fa fa-linkedin-square icon"></i></a>
            <a href={personalInfo.resume}><i className="fa icon fa-file-pdf-o"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
