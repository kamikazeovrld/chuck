/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_CATEGORY } from 'containers/App/constants';
import { categoryLoaded, categoryLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Categories request/response handler
 */
export function* getCategory({ category }) {
  // Get list of all categories
  const requestURL = `https://api.chucknorris.io/jokes/random?category=${category}`;

  try {
    // Call our request helper (see 'utils/request')
    const joke = yield call(request, requestURL);
    yield put(categoryLoaded(category, joke));
  } catch (err) {
    yield put(categoryLoadingError(category, err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* categoryData() {
  yield takeLatest(LOAD_CATEGORY, getCategory);
}
