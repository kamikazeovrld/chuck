/*
 *
 * CategoryPage actions
 *
 */

import { CHANGE_WIDTH, DEFAULT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * Dispatched when loading the category fails
 *
 * @param  {string} category The name of the category that was being fetched
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ERRORS_ERROR passing the error
 */
export function changeWidth(mq) {
  return {
    type: CHANGE_WIDTH,
    mq,
  };
}
