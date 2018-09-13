/**
 *
 * Category
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FullContainer from 'components/FullContainer';
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
  width: ${props => props.theme.wrapper.width}rem;
  margin: 0rem 0;
  // align-items: flex-start;
  justify-content: center;
`;

const Fab = styled.div`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 6px 10px 0 #666;
  transition: all 0.1s ease-in-out;
  font-size: 50px;
  color: white;
  text-align: center;
  line-height: 70px;
  position: fixed;
  left: 50px;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
  }
`;

const FabIcon = styled.svg`
  enable-background: new 0 0 460.298 460.297;
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
          <title>Joke</title>
          <meta name="description" content="View joke details" />
        </Helmet>

        <Link to={`/`}>
          <Fab>
            <FabIcon
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 460.298 460.297"
            >
              <g>
                <path
                  d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041    c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629    c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939    z"
                  fill="#ec5d32"
                />
                <path
                  d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816    c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245    c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136    c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998    L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125    c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"
                  fill="#ec5d32"
                />
              </g>
            </FabIcon>
          </Fab>
        </Link>
        <Wrapper>
          <ChuckPuncher
            onAnimationStart={this.onAnimationStart}
            onAnimationEnd={this.onAnimationEnd}
            onAnimationIteration={this.onAnimationIteration}
            animate={this.state.animation === 'punch'}
          />
          <Joke
            theme={this.props.categoryPage.theme}
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
  categoryPage: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Category;
