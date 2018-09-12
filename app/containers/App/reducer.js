/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
  LOAD_CATEGORY,
  LOAD_CATEGORY_SUCCESS,
  LOAD_CATEGORY_ERROR,
  CLEAR_LOADING,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loadingStart: null,
  loading: null,
  error: null,
  currentCategory: null,
  categories: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return state.merge({
        loadingStart: Date.now(),
        loading: 'Loading categories...',
        error: null,
        categories: {},
      });
    case LOAD_CATEGORY:
      return state
        .merge({
          loading: 'Loading joke...',
          error: null,
          categories: {},
        })
        .setIn(['categories', action.category], {
          id: action.category,
          loading: 'Loading joke...',
          error: null,
          joke: null,
        });
    case LOAD_CATEGORIES_SUCCESS: {
      const categories = action.categories.reduce(
        (acc, actionName) => ({
          ...acc,
          [actionName]: {
            id: actionName,
            loading: null,
            error: null,
            joke: null,
          },
        }),
        {}
      );
      return state.merge({
        error: null,
        categories,
      });
    }
    case LOAD_CATEGORY_SUCCESS: {
      return state
        .merge({
          error: null,
          loading: null,
        })
        .setIn(['categories', action.category], {
          id: action.category,
          loading: null,
          error: null,
          joke: action.joke,
        });
    }
    case LOAD_CATEGORIES_ERROR:
      return state.merge({
        error: action.error,
      });
    case LOAD_CATEGORY_ERROR:
      return state
        .merge({
          loading: null,
          error: action.error,
        })
        .setIn(['categories', action.category], {
          id: action.category,
          loading: null,
          error: action.error,
          joke: null,
        });
    case CLEAR_LOADING:
      return state.merge({
        loadingStart: null,
        loading: null,
      });
    default:
      return state;
  }
}

export default appReducer;
