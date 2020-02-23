import React, { Component } from 'react';

export default class ListHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="list-header">
        <div>{text}</div>
      </div>
    );
  }
}
