/**
 *
 * MainTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Container = styled.div`
  @-webkit-keyframes opacity {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes opacity {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  width: 800rem;
  margin: 50px 200px 20px 200px;
  color: white;
  font-size: 25px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 35px;
  line-height: 40px;
  color: #ecf0f1;
  position: relative;
  >div {
    font-weight: 600;
    overflow: hidden;
    padding: 0 40px;
    :after, :before {
      position: absolute;
      top: -40px;
      color: #16a085;
      font-size: 180px;
      line-height: 180px;
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  :before {
    content: '[';
    left: 0;
  }
  :after {
    content: ']';
    position: absolute;
    right: 0;
  }
}`;

function MainTitle(props) {
  if (!props.loading) {
    return null;
  }
  return (
    <Container>
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    </Container>
  );
}

MainTitle.propTypes = {
  loading: PropTypes.string,
};

export default MainTitle;
