/**
 *
 * Chuck
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Hat from 'components/Hat';
import Face from '../../components/Face';
import Eye from '../../components/Eye';
import Hair from '../../components/Hair';
import Beard from '../../components/Beard';
import Shirt from '../../components/Shirt';
import Arm from '../../components/Arm';
import Trousers from '../../components/Trousers';
import Shoes from '../../components/Shoes';

const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 240rem;
  left: 140rem;
  transform: rotateZ(6deg);
`;

function Chuck() {
  return (
    <Container>
      <Hat />
      <Face />
      <Eye />
      <Hair />
      <Beard />
      <Shirt />
      <Arm />
      <Trousers />
      <Shoes />
    </Container>
  );
}

Chuck.propTypes = {};

export default Chuck;
