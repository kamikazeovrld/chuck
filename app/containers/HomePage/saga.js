/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CATEGORIES } from 'containers/App/constants';
import { categoriesLoaded, categoriesError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectCurrentCategory } from 'containers/HomePage/selectors';

/**
 * Categories request/response handler
 */
export function* getCategories() {
  // Get list of all categories
  const requestURL = `https://api.chucknorris.io/jokes/categories`;

  try {
    // Call our request helper (see 'utils/request')
    const categories = yield call(request, requestURL);
    yield put(categoriesLoaded(categories));
  } catch (err) {
    yield put(categoriesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_CATEGORIES, getCategories);
}
