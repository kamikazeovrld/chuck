/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, CHANGE_WIDTH } from './constants';

export const initialState = fromJS({
  theme: {
    minWidth: 675,
    joke: {
      fontSize: 20,
      maxWidth: 300,
    },
  },
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
    case CHANGE_WIDTH:
      return updateTheme(state, action);
  }
}

function updateTheme(state, { minWidth }) {
  return state;
}

export default homePageReducer;
