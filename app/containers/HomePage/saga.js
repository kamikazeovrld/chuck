/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CATEGORIES } from 'containers/App/constants';
import { categoriesLoaded, categoriesLoadingError, clearLoading } from 'containers/App/actions';
import { makeSelectLoadingStart } from 'containers/App/selectors';

import request from 'utils/request';
import { makeSelectCurrentCategory } from 'containers/HomePage/selectors';

const TIMEOUT = 10000;

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
    console.log('err', err);
    yield put(categoriesLoadingError(err));
    yield call(removeLoadingMessage);
  }
}

function* removeLoadingMessage() {
  console.log('removeLoadingMessage>Start');
  const loadingStart = yield select(makeSelectLoadingStart());
  console.log('removeLoadingMessage>loadingStart', loadingStart);

  const result = yield call(timeout, loadingStart);
  console.log('removeLoadingMessage>result', result);
  yield put(clearLoading());
}

function timeout(loadingStart) {
  console.log('removeLoadingMessage>timeout>Start timeout');
  return new Promise((resolve, reject) => {
    console.log('removeLoadingMessage>promise');
    const finishTime = loadingStart + TIMEOUT;
    if (Date.now() > finishTime) {
      console.log('removeLoadingMessage>timeout>IT"s ready');
      resolve(true);
    } else {
      const waitTime = finishTime - Date.now();
      const t = setTimeout(() => {
        console.log('removeLoadingMessage>timeout>WE Waited');
        resolve(true);
        clearTimeout(t);
      }, waitTime);
    }
  });
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
