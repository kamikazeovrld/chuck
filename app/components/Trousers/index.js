/**
 *
 * Trousers
 *
 */

import styled from 'styled-components';

const Trousers = styled.div`
  position: absolute;
  background: #6F92CA;
  top: 34rem;
  left: 370rem;
  width: 190rem;
  height: 41rem;
  border-left: solid 14rem #2E4F96;
  border-right: solid 32rem #643A12;
  :before {
    content: '';
    position: absolute;
    top: 20rem;
    left: 2rem;
    width: 140rem;
    height: 2rem;
    border-top: dashed 2rem 	#2E4F96;
  }
`;

export default Trousers;
