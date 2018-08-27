/**
 *
 * Mirror
 *
 */

import styled from 'styled-components';

const Mirror = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 130rem;
  width: 180rem;
  height: 180rem;
  border: solid 22rem #905d9b;
  border-radius: 5rem;
  #scene .mirror:before, #scene .mirror:after {
    content: "";
    position: absolute;
    background: #905d9b;
    width: 2rem;
    transform: rotateZ(45deg);
    border-radius: 2rem;
  }
  #scene .mirror:before {
    top: 5rem;
    left: 35rem;
    height: 50rem;
    box-shadow: 95rem 10rem 0 0 #905d9b, 105rem 5rem 0 0 #905d9b;
  }
  #scene .mirror:after {
    top: 15rem;
    left: 55rem;
    height: 100rem;
    box-shadow: 10rem 10rem 0 0 #905d9b;
  }`


export default Mirror;
