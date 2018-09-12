/*
 *
 * CategoryPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, CHANGE_WIDTH, themes, mqs } from './constants';

export const initialState = fromJS({
  theme: {
    minWidth: 675,
    joke: {
      fontSize: 20,
      maxWidth: 300,
    },
    wrapper: {
      width: 675,
    },
  },
});

function categoryPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_WIDTH:
      return updateTheme(state, action);
    default:
      return state;
  }
}

function getWidth(media) {
  const regex = /\(min-width[^ ]*\ ([0-9]*)[^\)]\w+/g;
  const result = regex.exec(media);
  if (!result[1] || isNaN(result[1])) {
    console.log('getWidth>returnnull');
    return null;
  }
  const width = parseInt(result[1]);
  console.log('getWidth>width>', width);
  return width;
}

function updateTheme(state, { mq }) {
  console.log('updateTheme>mq', mq);
  const { matches, media } = mq;
  const width = getWidth(media);
  console.log('updateTheme>width>', width);
  if (matches) {
    console.log('updateTheme>matches');
    console.log('updateTheme>theme>', themes[width]);
    return state.merge({ theme: themes[width] });
  } else {
    console.log('updateTheme>does not match');
    let i = 0;
    for (i = 0; i < mqs.length; i += 1) {
      const { media } = mqs[i];
      const widthi = getWidth(media);
      if (width === widthi) {
        break;
      }
    }
    if (i < mqs.length - 1) {
      const { media } = mqs[i + 1];
      const width = getWidth(media);
      return state.merge({ theme: themes[width] });
    }
  }
  console.log('updateTheme>returnState1');
  return state;
}

export default categoryPageReducer;
