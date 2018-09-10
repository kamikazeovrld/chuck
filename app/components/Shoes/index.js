/**
 *
 * Shoes
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShoesComponent = styled.div`
  @keyframes shoes {
    0% {
      transform: rotateZ(-6deg);
    }
    100% {
      transform: rotateZ(-13deg);
    }
  }
  position: absolute;
  background: #643A12;
  top: 75rem;
  left: 490rem;
  width: 70rem;
  height: 35rem;
  border-top-left-radius: 40rem 33rem;
  transform: rotateZ(-6deg);
  transform-origin: top center;
  ${({animate}) => animate ? 'animation: shoes 2s ease-in-out alternate infinite;': ''}
`;

class Shoes extends Component {
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
      <ShoesComponent
        onAnimationIteration={this.onAnimationIteration}
        animate={this.state.animate}
      />
    );
  }
}

export default Shoes;
