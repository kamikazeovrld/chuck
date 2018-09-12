/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CATEGORIES } from 'containers/App/constants';
import {
  categoriesLoaded,
  categoriesLoadingError,
  clearLoading,
} from 'containers/App/actions';
import { makeSelectLoadingStart } from 'containers/App/selectors';

import request from 'utils/request';

const TIMEOUT = 5000;

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
    yield call(removeLoadingMessage);
  } catch (err) {
    yield put(categoriesLoadingError(err));
    yield call(removeLoadingMessage);
  }
}

function* removeLoadingMessage() {
  const loadingStart = yield select(makeSelectLoadingStart());
  const result = yield call(timeout, loadingStart);
  yield put(clearLoading());
}

function timeout(loadingStart) {
  return new Promise((resolve) => {
    const finishTime = loadingStart + TIMEOUT;
    if (Date.now() > finishTime) {
      resolve(true);
    } else {
      const waitTime = finishTime - Date.now();
      const t = setTimeout(() => {
        resolve(true);
        clearTimeout(t);
      }, waitTime);
    }
  });
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* categoriesData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_CATEGORIES, getCategories);
}
