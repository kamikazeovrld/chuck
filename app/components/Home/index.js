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
import FullContainer from 'components/FullContainer';
import MainTitle from 'components/MainTitle';

import Wrapper from 'components/Wrapper';

const Container = styled(FullContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  ${props => {
    if (props.theme.sunset) {
      return `
        background-color: red;
        animation: sky-sunset 3s forwards;
        -o-animation: sky-sunset 3s forwards;
        -moz-animation: sky-sunset 3s forwards;
        -webkit-animation: sky-sunset 3s forwards;`;
    }
    return `  
      animation: sky-sunrise 3s forwards;
      -o-animation: sky-sunrise 3s forwards;
      -moz-animation: sky-sunrise 3s forwards;
      -webkit-animation: sky-sunrise 3s forwards;`;
  }}`;

import messages from './messages';
import PropTypes from 'prop-types';

function Home(props) {
  return (
    <Container sunset={true}>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <MainTitle />
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
