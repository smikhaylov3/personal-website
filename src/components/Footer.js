import React, { Component } from 'react';
import '../styles/ProjectList.scss';
import '../styles/main.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer>
      	<div className="upper-container color-final-text">
	        <div className="increase-font">
	        	Thanks for stopping by.
	        </div>
	        <div className="increase-font">
	        	I'm glad you came.
	        </div>
	    </div>
      </footer>
    );
  }
}
