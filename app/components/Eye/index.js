/**
 *
 * Eye
 *
 */

import styled from 'styled-components';

const Eye = styled.div`
    @keyframes eye {
      0% {
        transform: scale(1, 1);
      }
      3% {
        transform: scale(0.2, 1);
      }
      6% {
        transform: scale(1, 1);
      }
      9% {
        transform: scale(0.2, 1);
      }
      12% {
        transform: scale(1, 1);
      }
    }
    position: absolute;
    background: #482d4f;
    top: 75rem;
    left: 100rem;
    width: 12rem;
    height: 12rem;
    border-radius: 12rem;
    animation: eye 4s 1s linear infinite;
`;

export default Eye;
