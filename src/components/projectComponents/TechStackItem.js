import React, { Component, PropTypes } from 'react';
import { iconsData } from '../../data/techStackIcons';
import '../../styles/project.scss';

export default class TechStackItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { tech } = this.props;

    if (iconsData[tech]) {
      return (
        <li className="tech-icon-wrapper">
          {tech}
          <img className="tech-icon" src={iconsData[tech]} />
        </li>
      );
    } else {
      return (
        <li className="tech-icon-wrapper">
          {tech}
          <img className="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png" />
        </li>
      );
    }
  }
}

TechStackItem.propTypes = {
  tech: PropTypes.string.isRequired
};
