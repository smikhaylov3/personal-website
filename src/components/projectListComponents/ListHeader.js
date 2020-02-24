import React, { Component } from 'react';
import '../../styles/ProjectList.scss'

export default class ListHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="list-header-email">
        <div className="color-email-page">{text}</div>
      </div>
    );
  }
}
