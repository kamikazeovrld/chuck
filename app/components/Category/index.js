/**
 *
 * Category
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import FullContainer from 'components/FullContainer';
import MainTitle from 'components/MainTitle';
import ChuckPuncher from 'components/ChuckPuncher';
import Joke from 'components/Joke';

const Container = styled(FullContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  ${props => {
    if (props.theme.sunset) {
      return `
          background-color: red;
          animation: sky-sunset 3s forwards;
          -o-animation: sky-sunset 3s forwards;
          -moz-animation: sky-sunset 3s forwards;
          -webkit-animation: sky-sunset 3s forwards;`;
    }
    return `  
        animation: sky-sunrise 3s forwards;
        -o-animation: sky-sunrise 3s forwards;
        -moz-animation: sky-sunrise 3s forwards;
        -webkit-animation: sky-sunrise 3s forwards;`;
  }}
  > .something {
    color: white;
    font-size: 40px;
    background-color: red;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 800rem;
  margin: 0rem 0;
  // align-items: flex-start;
  justify-content: center;
`;

const Button = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 0rem 0;
  text-align: center;
  font-size: 40px;
  z-index: 1;
`;


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: null,
    };
  }
  onAnimationStart = event => {
    console.log('onAnimationStart>', event);
    console.log('onAnimationStart>animationName>', event.animationName);
  }
  onAnimationEnd = event => {
    console.log('onAnimationEnd>', event);
    console.log('onAnimationEnd>animationName>', event.animationName);
    if (event.animationName === 'punch') {
      this.setState({ animation: 'shatter' });
    }
    if (event.animationName === 'shatter') {
      this.setState({ animation: null });
      this.props.loadCategory();
    }
  }
  onAnimationIteration = event => {
    console.log('onAnimationIteration>', event);
    console.log('onAnimationIteration>animationName>', event.animationName);
  }
  punch = () => {
    this.setState({ animation: 'punch' });
  }
  render() {
    return (
      <Container>
        <Helmet>
          <title>CategoryPage</title>
          <meta name="description" content="Description of CategoryPage" />
        </Helmet>
        <Wrapper>
          <ChuckPuncher
            onAnimationStart={this.onAnimationStart}
            onAnimationEnd={this.onAnimationEnd}
            onAnimationIteration={this.onAnimationIteration}
            animate={this.state.animation === 'punch'}
          />
          <Joke
            onAnimationStart={this.onAnimationStart}
            onAnimationEnd={this.onAnimationEnd}
            onAnimationIteration={this.onAnimationIteration}
            animate={this.state.animation === 'shatter'}
            category={this.props.category}
            next={this.punch}
          />
        </Wrapper>
      </Container>
    );
  }
}

Category.propTypes = {
  loadCategory: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Category;
