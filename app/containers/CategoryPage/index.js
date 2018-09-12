/**
 *
 * CategoryPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { ThemeProvider } from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectCurrentCategory,
  makeSelectCategory,
} from 'containers/App/selectors';
import { loadCategory } from 'containers/App/actions';
import { changeWidth } from './actions';
import makeSelectCategoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { mqs } from './constants';

import Category from '../../components/Category';

/* eslint-disable react/prefer-stateless-function */
export class CategoryPage extends React.Component {
  componentDidMount() {
    this.props.loadCategory();
    let mq = null;
    for (let i = 0; i < mqs.length; i += 1) {
      if (!mq && mqs[i].matches) {
        mq = mqs[i];
        console.log('mediaWatcher>init>set>mq', mqs[i]);
      }
      mqs[i].addListener(this.WidthChange);
    }
    if (mq) {
      console.log('CategoryPage>componentDidMount>mq', mq);
      const { matches, media } = mq;
      this.props.changeWidth({ matches, media });
    }
  }
  WidthChange = mq => {
    const { matches, media } = mq;
    this.props.changeWidth({ matches, media });
  }
  render() {
    const theme = {
      sunset: this.props.loading,
      wrapper: this.props.categoryPage.theme.wrapper,
    };
    return (
      <ThemeProvider theme={theme}>
        <Category {...this.props} />
      </ThemeProvider>
    );
  }
}

CategoryPage.propTypes = {
  changeWidth: PropTypes.func.isRequired,
  loadCategory: PropTypes.func.isRequired,
  categoryPage: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = (state, props) => createStructuredSelector({
  categoryPage: makeSelectCategoryPage(),
  category: makeSelectCategory(props.match.params.category),
  currentCategory: makeSelectCurrentCategory(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
})(state, props);

function mapDispatchToProps(dispatch, props) {
  return {
    changeWidth: width => dispatch(changeWidth(width)),
    loadCategory: () => dispatch(loadCategory(props.match.params.category)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'categoryPage', reducer });
const withSaga = injectSaga({ key: 'categoryPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CategoryPage);
