/*
 *
 * CategoryPage constants
 *
 */

export const DEFAULT_ACTION = 'app/CategoryPage/DEFAULT_ACTION';
export const CHANGE_WIDTH = 'app/CategoryPage/CHANGE_WIDTH';

export const mqs = [
  window.matchMedia('(min-width: 800px)'),
  window.matchMedia('(min-width: 675px)'),
  window.matchMedia('(min-width: 575px)'),
  window.matchMedia('(min-width: 475px)'),
  window.matchMedia('(min-width: 375px)'),
];

export const themes = {
  '800': {
    minWidth: 675,
    joke: {
      fontSize: 20,
      maxWidth: 300,
    },
    wrapper: {
      width: 800,
    },
  },
  '675': {
    minWidth: 675,
    joke: {
      fontSize: 20,
      maxWidth: 300,
    },
    wrapper: {
      width: 675,
    },
  },
  '575': {
    minWidth: 575,
    joke: {
      fontSize: 15,
      maxWidth: 200,
    },
    wrapper: {
      width: 575,
    },
  },
  '475': {
    minWidth: 475,
    joke: {
      fontSize: 15,
      maxWidth: 150,
    },
    wrapper: {
      width: 475,
    },
  },
  '375': {
    minWidth: 375,
    joke: {
      fontSize: 10,
      maxWidth: 150,
    },
    wrapper: {
      width: 375,
    },
  },
}
