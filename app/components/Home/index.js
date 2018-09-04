/**
 *
 * Home
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Wrapper from 'components/Wrapper';

const Container = styled.div`
  background-color: transparent;
`;

import messages from './messages';
import PropTypes from 'prop-types';

function Home(props) {
  return (
    <Container>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Wrapper {...props} />
    </Container>
  );
}

Home.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  homepage: PropTypes.object.isRequired,
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Home;
