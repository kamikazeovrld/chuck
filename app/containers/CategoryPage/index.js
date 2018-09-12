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
import makeSelectCategoryPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Category from '../../components/Category';

/* eslint-disable react/prefer-stateless-function */
export class CategoryPage extends React.Component {
  componentDidMount() {
    this.props.loadCategory();
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
