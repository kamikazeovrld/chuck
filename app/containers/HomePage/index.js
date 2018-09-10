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
  makeSelectLoadingStart,
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
    const { loading, loadingStart } = this.props;
    let showLoading = false;

    console.log('Homepage>loadingStart>', loadingStart);
    console.log('Homepage>now>', Date.now());
    console.log('Homepage>offset>', loadingStart + 5000);
    console.log('Homepage>result>', loadingStart + 5000 > Date.now());
    // todo
    // if (loading || loadingStart + 500 < Date.now()) {
    if (loadingStart + 5000 > Date.now()) {
      showLoading = true;
    }
    const theme = {
      sunset: showLoading,
    };
    return (
      <ThemeProvider theme={theme}>
        <Home {...this.props} showLoading={showLoading} />
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
  loadingStart: makeSelectLoadingStart(),
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
