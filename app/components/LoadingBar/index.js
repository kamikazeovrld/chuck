/**
 *
 * LoadingBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoadingBar = styled.div`
  @keyframes login-loading-bar {
    0% {
      left: -35%;
      right: 100%;
    }
    100%,60% {
      left: 100%;
      right: -90%;
    }
  }
  @keyframes login-loading-bar-short {
    0% {
      left: -200%;
      right: 100%;
    }
    100%,60% {
      left: 107%;
      right: -8%;
    }
  }
  background: #d7ccc8;
	position: absolute;
	bottom: 22px;
	right: 0;
	left: 0;
	z-index: 12;
	text-align: center;
    border-radius: 10px;
	> div {
    position: relative;
    height: 15px;
    border-radius: 10px;
    display: block;
    width: 100%;
    background-color: #d7ccc8;
    background-clip: padding-box;
    overflow: hidden;
    :after,:before {
    border-radius: 10px;
      content: '';
      background-color: #5e5350;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      will-change: left,right;
      animation: login-loading-bar 2.1s cubic-bezier(.65,.815,.735,.395) infinite
    }
    :after {
      animation: login-loading-bar-short 4.1s cubic-bezier(.165,.84,.44,1) infinite;
      animation-delay: 1.15s
    }
	}
`;

LoadingBar.propTypes = {};

export default LoadingBar;
