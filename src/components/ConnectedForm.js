import React from 'react';
import '../styles/main.scss';
export default class ContactForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
             <ul>
                <li>
                    <label htmlFor="name">Enter your name: </label>
                </li>
                 <li>
                    <input id="name" name="name" type="text" />
                </li>
                <li>
                    <label htmlFor="email">Enter your email: </label>
                </li>
                <li>
                    <input id="email" name="email" type="email" />
                </li>
                <li>
                    <label htmlFor="contactDate">Enter when you would like to meet: </label>
                </li>
                <li>
                    <input id="contactDate" name="contactDate" type="text" />
                 </li>
                 <li> 
                    <button className="button-submit">Send data!</button>
                </li>
            </ul>
        </form>
      );
    }
  }
