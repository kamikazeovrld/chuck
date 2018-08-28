/**
 *
 * Wrapper
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Scene from 'components/Scene';
import Chuck from 'components/Chuck';

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 800rem;
  margin: 0rem 0;
`;

function Wrapper() {
  return (
    <Container>
      <Scene />
      <Chuck />
    </Container>
  );
}

Wrapper.propTypes = {};

export default Wrapper;
