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

function Home() {
  return (
    <Container>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Wrapper />
    </Container>
  );
}

Home.propTypes = {};

export default Home;
