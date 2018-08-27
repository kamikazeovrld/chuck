/**
 *
 * Trousers
 *
 */

import styled from 'styled-components';

const Trousers = styled.div`
  position: absolute;
  background: #ba85cb;
  top: 34rem;
  left: 370rem;
  width: 190rem;
  height: 41rem;
  border-left: solid 14rem #4d2957;
  border-right: solid 32rem #4e2c55;
  :before {
    content: '';
    position: absolute;
    top: 20rem;
    left: 2rem;
    width: 140rem;
    height: 2rem;
    border-top: dashed 2rem #a661bc;
  }
`;

export default Trousers;
