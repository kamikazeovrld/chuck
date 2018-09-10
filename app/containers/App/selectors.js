/**
 * The global state selectors
 */

const theme = {
  green: {
    primaryColor: '#B9F6CA',
    secondaryColor: '#1EE8B6',
  },
  yellow: {
    primaryColor: '#FFFF8D',
    secondaryColor: '#FFEB3C',
  },
  red: {
    primaryColor: '#FF8A80',
    secondaryColor: '#FF5253',
  },
  blue: {
    primaryColor: '#84FEFF',
    secondaryColor: '#03A9F5',
  },
  purple: {
    primaryColor: '#B388FE',
    secondaryColor: '#7E57C2',
  },
  grey: {
    primaryColor: '#F5F5F5',
    secondaryColor: '#999999',
  },
}

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectCurrentCategory = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentCategory'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectLoadingStart = () =>
  createSelector(selectGlobal, globalState => globalState.get('loadingStart'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectCategories = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('categories'),
  );

const makeSelectThemedCategories = () =>
  createSelector(makeSelectCategories(), categories => {
    console.log('categories>', categories);
    console.log('categories>', categories.toArray());
    const themeList = Object.keys(theme);
    return categories.toArray().map((category, index) => {
      const themeIndex = index % themeList.length;
      const categoryTheme = theme[themeList[themeIndex]]
      return {
        image: category.get('image'),
        title: category.get('id'),
        ...categoryTheme,
      };
    });
  });

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectCurrentCategory,
  makeSelectLoading,
  makeSelectLoadingStart,
  makeSelectError,
  makeSelectCategories,
  makeSelectThemedCategories,
  makeSelectLocation,
};
