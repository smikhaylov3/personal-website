import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BenchmarkActions from '../actions/BenchmarkActions';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Hills from '../components/Hills';
import Sun from '../components/Sun';
import ProjectsContainer from './ProjectsContainer';
import ProjectListContainer from './ProjectListContainer';
import SocialLinkContainer from './SocialLinkContainer';
import { startTime } from '../index';
import '../styles/parallax.scss';
// import '../styles/main.scss';
import '../styles/introduction.scss';
import '../styles/responsiveCol.scss';
import ListHeader from '../components/projectListComponents/ListHeader';
import Particles from 'react-particles-js';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
  }

  render() {
    const { projects, benchmark, personalInfo, projectLinks, socialLinks } = this.props;

    return (
      <div className="main-app-container parallax">
        <div className="parallax-group">
          <div className="parallax-layer parallax__layer--base">
            <Introduction personalInfo={personalInfo} />
          </div>
          <div className="parallax-layer parallax__layer--back-1">
            <Sun />
          </div>
          <div className="parallax-layer parallax__layer--back-2">
            <Hills />
          </div>
        </div>

        <div>
          <Particles className="particleBg"
              
              
              params={{
                particles: {
                  type: "polygon",
                  shape: {
                    polygon: {
                      nb_sides: 5
                    }
                  },
                  number: {
                    value: 45,
                    density: {
                      enable: true,
                      value_area: 800
                    } 
                  },
                  stroke: {
                    width: 1,
                    color: "#000000"
                  },
                  size: {
                    value: 5,
                    random: true
                  },
                  line_linked: {
                    enable: false
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    bubble: {
                      distance: 250,
                      size: 0,
                      duration: 2,
                      opacity: 0
                      
                    },
                    repulse: {
                      distance: 400,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                }
              }}
              style={{
                width: '100%',
                backgroundColor: "black",
                backgroundImage: 'url(https://www.pngkit.com/png/full/58-588127_lunar-clipart-png-transparent-cartoon-moon-transparent-background.png)',
                backgroundSize: "20%",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat"
              }}
            ></Particles>


            <div style={{background: "red"}} >
              <div className="flex-grid-halves">
                <div className="col">
                  <ProjectListContainer />
                </div>
                <div className="col">
                  <SocialLinkContainer />
                </div>
              </div>
            </div>

          <div className="increase-font">
            <div className="upper-container" style={{background: "red"}}>
              <div className="inner-container align-text-left flex-container word-wrap">
                  <ListHeader text="Say hello" />
                  <div>
                  Tell me about yourself, or what you do. Or ask me programming questions,
                  questions about Atlanta or learn Russian from me.
                  </div>
                  
                  <div className="one-line-space separate-bottom">
                  I'm always happy to chat!
                  </div>
                  <div className="button">
                    <a href = "mailto:luongt@me.com?subject = Feedback&body = Message"> 
                      Email Me
                    </a>
                  </div>
              </div>
            </div>
          </div>

        </div>



      
        <div className="main-app-container footer-container">
          <div className="parallax__shortGroup">
            <div className="parallax-layer parallax__layer--base">
              <div>
                <div className="introduction">
                  <div className="introduction__content">
                    <h2 className="introduction__name">
                      {'Please come back later for more content. '}
                    </h2>
                    <div className="introduction__tagline">
                      {'The site will expand as my knowledge of web programming grows!'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-layer parallax__layer--back-1">
              <Sun />
            </div>
          </div>
        </div>
        <div className="increase-font">
          <Footer />
        </div>
      </div>
    );
  }
}




App.propTypes = {
  projects: PropTypes.array.isRequired,
  
  benchmark: PropTypes.number.isRequired,
  personalInfo: PropTypes.object.isRequired,
  projectLinks: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    projects: state.projects,
    benchmark: state.benchmark,
    personalInfo: state.personalInfo,
    projectLinks: state.projectLinks,
    socialLinks: state.socialLinks
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
    actions: bindActionCreators(BenchmarkActions, dispatch)
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
