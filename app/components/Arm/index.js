/**
 *
 * Arm
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArmComponent = styled.div`
  @keyframes arm-top {
    0% {
      transform: rotateZ(10deg);
    }
    100% {
      transform: rotateZ(38deg);
    }
  }
  @keyframes arm-bottom {
    0% {
      transform: rotateZ(15deg);
    }
    100% {
      transform: rotateZ(-12deg);
    }
  }
  @keyframes hand {
    0% {
      transform: rotateZ(-15deg);
    }
    100% {
      right: -28rem;
      bottom: -46rem;
      transform: rotateZ(-52deg);
    }
  }
  position: absolute;
  background: #699be5;
  top: 30rem;
  left: 250rem;
  width: 75rem;
  height: 36rem;
  border-radius: 18rem;
  transform: rotateZ(10deg);
  transform-origin: left center;
  ${({animate}) => animate ? 'animation: arm-top 2s ease-in-out alternate infinite;': ''}
  :before, :after {
    content: "";
    position: absolute;
  }
  :before {
    background: #699be5;
    top: 0;
    right: -10rem;
    width: 36rem;
    height: 90rem;
    border-top-left-radius: 18rem 50rem;
    border-top-right-radius: 18rem 50rem;
    border-bottom-left-radius: 18rem;
    border-bottom-right-radius: 18rem;
    transform: rotateZ(15deg);
    transform-origin: top center;
    box-shadow: 0 10rem 0 0 #c2c8d8;
    ${({animate}) => animate ? 'animation: arm-bottom 2s ease-in-out alternate infinite;': ''}
    
  }
  :after {
    background: #c2c8d8;
    z-index: -1;
    right: 10rem;
    bottom: -60rem;
    width: 75rem;
    height: 20rem;
    border-top-left-radius: 40rem 16rem;
    border-bottom-right-radius: 10rem;
    transform: rotateZ(-15deg);
    transform-origin: right center;
    ${({animate}) => animate ? 'animation: hand 2s ease-in-out alternate infinite;': ''}
  }
`;

class Arm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false,
    };
  }
  componentDidMount() {
    if (this.props.loading) {
      this.setState({animate: true})
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.loading && this.props.loading) {
      this.setState({animate: true});
    }
  }
  onAnimationIteration = event => {
    console.log(event);
    console.log(event.elapsedTime);
    console.log(event.animationName);
    console.log(event.eventPhase);
    if (!this.props.loading && this.state.animate && !(event.elapsedTime % 4)) {
      this.setState({ animate: false });
    }
  }
  render() {
    return (
      <ArmComponent
        onAnimationIteration={this.onAnimationIteration}
        animate={this.state.animate}
      />
    );
  }
}

export default Arm;
