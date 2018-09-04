/**
 *
 * Wrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Scene from 'components/Scene';
import Chuck from 'components/Chuck';

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 800rem;
  margin: 0rem 0;
`;

function Wrapper(props) {
  return (
    <Container>
      <Scene {...props} />
      <Chuck />
    </Container>
  );
}

Wrapper.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  homepage: PropTypes.object.isRequired,
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Wrapper;
