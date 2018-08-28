/**
 *
 * Shoes
 *
 */

import styled from 'styled-components';

const Shoes = styled.div`
  @keyframes shoes {
    0% {
      transform: rotateZ(-6deg);
    }
    100% {
      transform: rotateZ(-13deg);
    }
  }
  position: absolute;
  background: #643A12;
  top: 75rem;
  left: 490rem;
  width: 70rem;
  height: 35rem;
  border-top-left-radius: 40rem 33rem;
  transform: rotateZ(-6deg);
  transform-origin: top center;
  animation: shoes 2s ease-in-out alternate infinite;
`;

export default Shoes;
