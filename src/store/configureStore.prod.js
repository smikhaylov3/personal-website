import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// Takes in a reducer and the initial state
// compose combines the middlewere with the redux store
const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
