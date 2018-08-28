/**
 *
 * Hat
 *
 */

import styled from 'styled-components';

const Hat = styled.div`
  position: absolute;
  background: #8B6231;
  width: 55rem;
  height: 100rem;
  border-top-left-radius: 55rem 25rem;
  border-bottom-left-radius: 55rem 30rem;
  :before {
    content: "";
    position: absolute;
    background: #643A12;
    top: -38rem;
    left: 35rem;
    width: 55rem;
    height: 190rem;
    border-top-left-radius: 55rem 50rem;
    border-bottom-left-radius: 55rem 140rem;
}
`;

export default Hat;
