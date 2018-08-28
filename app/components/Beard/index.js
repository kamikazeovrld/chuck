/**
 *
 * Beard
 *
 */

import styled from 'styled-components';

const Beard = styled.div`
  position: absolute;
  background: #EE5C28;
  top: 2rem;
  left: 142rem;
  width: 75rem;
  height: 100rem;
  border-radius: 0 50rem 50rem 0;
  :before, :after {
    content: '';
    position: absolute;
    background: #c2c8d8;
  }
  :before {
    top: 35rem;
    left: 70rem;
    width: 17rem;
    height: 32rem;
    z-index: -1;
  }
  :after {
    top: 66rem;
    left: 10rem;
    width: 14rem;
    height: 34rem;
    border-top-right-radius: 14rem;
  }
`;
export default Beard;
