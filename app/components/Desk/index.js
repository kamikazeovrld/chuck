/**
 *
 * Desk
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  background: #905d9b;
  top: 260rem;
  left: 58rem;
  width: 330rem;
  height: 110rem;
  border: solid 20rem #905d9b;
  box-shadow: inset 0 0 0 4rem #9c6da4;
  :before, :after {
    content: '';
    position: absolute;
    background: #905d9b;
  }
  :before {
    top: -42rem;
    left: -33rem;
    width: 356rem;
    height: 18rem;
    border-radius: 9rem;
  }
  :after {
    top: 94rem;
    left: -9rem;
    width: 18rem;
    height: 28rem;
    border-radius: 0 0 9rem 9rem;
    box-shadow: 290rem 0 0 0 #905d9b;
  }
  > div {
    position: absolute;
    background: #905d9b;
  }
  div:nth-child(1) {
    top: -91rem;
    left: -10rem;
    width: 36rem;
    height: 45rem;
    :before {
      content: "";
      position: absolute;
      background: #905d9b;
      top: -24rem;
      left: 10rem;
      width: 16rem;
      height: 20rem;
    }
  }
  div:nth-child(2) {
    top: -66rem;
    left: 205rem;
    width: 36rem;
    height: 20rem;
  }
  div:nth-child(3) {
    top: -91rem;
    left: 255rem;
    width: 34rem;
    height: 45rem;
  }
`;

function Desk() {
  return (
    <Container>
      <div />
      <div />
      <div />
    </Container>
      );
}

Desk.propTypes = {};

export default Desk;
