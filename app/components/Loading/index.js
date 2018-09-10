/**
 *
 * Loading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const total = 200;
const width = 30;
const height = 30;
const time = 10;

function posOrNeg() {
 return Math.random() * 2 - 1;
}

function random(limit = 100) {
  return Math.floor(Math.random() * limit);
}

function getDivs() {
  let styles = '';
  for (let i = 1; i <= total; i += 1) {
    const style = `
      @keyframes anim${i} {
        30% {
          transform: translate3d(0,0,0);
        }
        50% {
          transform: translate3d(${random(155) * posOrNeg()}vh, ${random(155) * posOrNeg()}vw, ${random(2000) * posOrNeg()}px);
          opacity: 0;
        }
        70% {
          transform: translate3d(0,0,0);
        }
      }
      :nth-child(${i}){
        left: ${(i / 2 - 1)*(800/100)}rem;
        top: 50%;
        margin-top: -${height / 2}px;
        animation: anim${i} ${time}s infinite alternate;
        animation-delay: -${(i * time) / total}s;
        background: hsla(${i * 1.5}, 100%, 50%, 1);
      }
    `;
    styles += style;
  }
  return styles;
}

const Container = styled.div`
  height: 300px;
  perspective: 600px;
  transform-style: preserve-3d;
  > div {
    width: ${width}px;
    height: ${height}px;
    background: blue;
    position: absolute;
    ${getDivs()}
  }
`;

function Loading() {
  const divs = [];
  for (let i = 0; i < total; i += 1) {
    divs.push(<div key={i} />);
  }
  return (
    <Container>
      {divs}
    </Container>
  );
}

Loading.propTypes = {};

export default Loading;
