import { projectLinks } from '../data/projectLinks';

export default function projects(state = projectLinks.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}
