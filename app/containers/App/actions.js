/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_ERROR, LOAD_CATEGORY, LOAD_CATEGORY_SUCCESS, LOAD_CATEGORY_ERROR } from './constants';

/**
 * Load the joke categories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CATEGORIES
 */
export function loadCategories() {
  return {
    type: LOAD_CATEGORIES,
  };
}

/**
 * Dispatched when the categories are loaded by the request saga
 *
 * @param  {array} categories The list of categories
 *
 * @return {object}      An action object with a type of LOAD_CATEGORIES_SUCCESS passing the categories fetched from the network
 */
export function categoriesLoaded(categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories,
  };
}

/**
 * Dispatched when loading the categories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ERRORS_ERROR passing the error
 */
export function categoriesLoadingError(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    error,
  };
}

///////////////

/**
 * Load the jokes from the category, this action starts the request saga
 *
 * @param {string} category The category name for the category of jokes to be loaded
 *
 * @return {object} An action object with a type of LOAD_CATEGORY
 */
export function loadCategory(category) {
  return {
    type: LOAD_CATEGORY,
    category,
  };
}

/**
 * Dispatched when the jokes for a specific category are loaded by the request saga
 *
 * @param  {string} category The name of the category that was fetched
 * @param  {array} jokes The list of jokes in a category
 *
 * @return {object}      An action object with a type of LOAD_CATEGORY_SUCCESS passing the category and jokes fetched from the network
 */
export function categoryLoaded(category, jokes) {
  return {
    type: LOAD_CATEGORY_SUCCESS,
    category,
    jokes,
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
export function categoryLoadingError(category, error) {
  return {
    type: LOAD_CATEGORY_ERROR,
    category,
    error,
  };
}
