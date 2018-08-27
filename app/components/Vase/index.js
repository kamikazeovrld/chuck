/**
 *
 * Vase
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  background: #905d9b;
  top: 275rem;
  left: 420rem;
  width: 126rem;
  height: 126rem;
  border-top-left-radius: 63rem 50rem;
  border-top-right-radius: 63rem 50rem;
  border-bottom-left-radius: 40rem 76rem;
  border-bottom-right-radius: 40rem 76rem;
  :before, :after {
    content: '';
    position: absolute;
    background: #905d9b;
  }
  :before {
    top: -8rem;
    left: 49rem;
    width: 28rem;
    height: 16rem;
  }
  :after {
    top: -20rem;
    left: 43rem;
    width: 40rem;
    height: 10rem;
    border-radius: 5rem;
  }
  > div {
    position: absolute;
    :before {
      content: "";
      position: absolute;
      background: red;
      border-radius: 50%;
    }
  }
  
  div:nth-child(1) {
    top: -210rem;
    left: 3rem;
    width: 60rem;
    height: 190rem;
    border-top: solid 2rem #905d9b;
    border-right: solid 4rem #905d9b;
    border-top-right-radius: 60rem 190rem;
    :before {
      top: 10rem;
      left: 5rem;
      width: 8rem;
      height: 8rem;
      box-shadow: 10rem 16rem 0 2rem #905d9b, 24rem -5rem 0 -1rem #905d9b, 19rem 36rem 0 0 #905d9b, 36rem 12rem 0 1rem #905d9b, 24rem 56rem 0 1rem #905d9b, 40rem 34rem 0 1rem #905d9b, 29rem 74rem 0 -1rem #905d9b;
    }
  }
  div:nth-child(2) {
    top: -160rem;
    left: 64rem;
    width: 30rem;
    height: 140rem;
    border-top: solid 2rem #905d9b;
    border-left: solid 6rem #905d9b;
    border-top-left-radius: 30rem 140rem;
    :before {
    top: 5rem;
    left: 0;
    width: 8rem;
    height: 8rem;
    box-shadow: 18rem 12rem 0 2rem #905d9b, -6rem 18rem 0 0 #905d9b, 12rem 32rem 0 0 #905d9b, -8rem 36rem 0 -1rem #905d9b, 8rem 48rem 0 0 #905d9b, 8rem 68rem 0 2rem #905d9b, 4rem 88rem 0 -1rem #905d9b;
  }
`;

function Vase() {
  return (
    <Container>
      <div />
      <div />
    </Container>
  );
}

Vase.propTypes = {};

export default Vase;
