/**
 *
 * Shirt
 *
 */

import styled from 'styled-components';

const Shirt = styled.div`
    position: absolute;
    background: #9C430A;
    top: -5rem;
    left: 235rem;
    width: 47rem;
    height: 120rem;
    border-radius: 60rem 0 0 60rem;
    box-shadow: inset -6rem 0 0 0 #603668, inset -8rem 0 0 0 #864b92, inset -12rem 0 0 0 #9C430A, inset -14rem 0 0 0 #864b92, inset -18rem 0 0 0 #603668, inset -20rem 0 0 0 #864b92;
    :before, :after {
      content: "";
      position: absolute;
    }
    :before {
      top: 0;
      left: 47rem;
      width: 88rem;
      height: 120rem;
      border-style: solid;
      border-color: transparent transparent transparent #9C430A;
      border-width: 39rem 0 39rem 88rem;
    }
    :after {
      background: #699BE5;
      z-index: -1;
      top: 36rem;
      left: -10rem;
      width: 15rem;
      height: 45rem;
      border-radius: 8rem 0 0 8rem;
    }
`;

export default Shirt;
