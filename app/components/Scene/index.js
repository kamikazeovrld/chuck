/**
 *
 * Scene
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mirror from 'components/Mirror';
import Desk from 'components/Desk';
import Vase from 'components/Vase';
import Cabinet from 'components/Cabinet';
import City from 'components/City';

const Container = styled.div`
  @keyframes scene {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(-7deg);
    }
  }
  position: relative;
  display: inline-block;
  width: 800rem;
  height: 415rem;
  border-bottom: solid 10rem #905d9b;
  animation: scene 2s ease-in-out alternate infinite;
  transform-origin: 660rem 415rem;
`;

function Scene() {
  return (
    <Container>
      <City />
    </Container>
  );
}

Scene.propTypes = {};

export default Scene;
