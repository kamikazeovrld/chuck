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
} from 'containers/App/selectors';
import { loadCategories } from 'containers/App/actions';
import makeSelectCategoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Category from '../../components/Category';

/* eslint-disable react/prefer-stateless-function */
export class CategoryPage extends React.Component {
  componentDidMount() {
    // this.props.loadCategories();
  }
  render() {
    console.log('Categorypage>props>', this.props);
    const theme = {
      sunset: this.props.loading,
    };
    return (
      <ThemeProvider theme={theme}>
        <Category {...this.props} />
      </ThemeProvider>
    );
  }
}

CategoryPage.propTypes = {
  categoryPage: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  categoryPage: makeSelectCategoryPage(),
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

const withReducer = injectReducer({ key: 'categoryPage', reducer });
const withSaga = injectSaga({ key: 'categoryPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CategoryPage);
