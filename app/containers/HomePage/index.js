/**
 *
 * HomePage
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
  makeSelectThemedCategories,
  makeSelectCategories,
  makeSelectLoading,
  makeSelectError,
  makeSelectCurrentCategory,
} from 'containers/App/selectors';
import { loadCategories } from 'containers/App/actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Home from '../../components/Home';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }
  render() {
    console.log('Homepage>props>', this.props);
    const theme = {
      sunset: this.props.loading,
    };
    return (
      <ThemeProvider theme={theme}>
        <Home {...this.props} />
      </ThemeProvider>
    );
  }
}

HomePage.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  homepage: PropTypes.object.isRequired,
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  loadingStart: PropTypes.number,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
  themedCategories: makeSelectThemedCategories(),
  categories: makeSelectCategories(),
  currentCategory: makeSelectCurrentCategory(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadCategories: () => dispatch(loadCategories()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
