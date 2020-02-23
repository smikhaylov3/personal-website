import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import ProjectList from '../components/ProjectList';
import '../styles/ProjectList.scss';
import ProjectListing from '../components/projectListComponents/ProjectListing'
import ListHeader from '../components/projectListComponents/ListHeader'
// import '../styles/parallax.scss';
// import '../styles/main.scss';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {

  render() {
    const { projects, projectLinks } = this.props;
    const projectEntries = projectLinks.map((project, index) => {
      return <ProjectListing key={index} 
                             title={project.title}
                             description={project.description}
                             date={project.date} />;
    });

    
    return (
      <div className="upper-container" style={{background: "white"}}>
        <div className="inner-container align-text-left">
            <ListHeader text="Recent Projects" />
            {projectEntries}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
  projectLinks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    projects: state.projects,
    projectLinks: state.projectLinks
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
