/**
 *
 * Face
 *
 */

import styled from 'styled-components';

const Face = styled.div`
  position: absolute;
  top: 25rem;
  left: 90rem;
  width: 36rem;
  height: 92rem;
  border-style: solid;
  border-color: #ffccbc #ffccbc transparent transparent;
  border-width: 79rem 36rem 13rem 0;
  :before,:after {
    content: '';
    position: absolute;
  }
  :before {
    background: #ffccbc;
    top: -79rem;
    left: 36rem;
    width: 16rem;
    height: 92rem;
    border-bottom-right-radius: 14rem;
  }
  :after {
    background: #ffccbc;
    top: -92rem;
    left: 8rem;
    width: 26rem;
    height: 13rem;
    border-radius: 13rem 13rem 0 0;
  }
`;

export default Face;
