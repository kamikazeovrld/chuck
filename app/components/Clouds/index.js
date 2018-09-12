/**
 *
 * Clouds
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 50px 0;
  background: transparent;
  position: absolute;
  top: 50px;
  width: 800rem;
  // overflow: hidden;
`;

const Cloud = styled.div`
  width: 200px;
  height: 60px;
  background: #fff;
  border-radius: 200px;
  position: absolute;
  > div {
    color: black;
    font-size: 40px;
    text-align: center;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  :before,
  :after {
    content: '';
    position: absolute;
    background: #fff;
    width: 100px;
    height: 80px;
    position: absolute;
    top: -15px;
    left: 10px;
    border-radius: 100px;
    transform: rotate(30deg);
  }
  :after {
    width: 120px;
    height: 120px;
    top: -55px;
    left: auto;
    right: 15px;
  }
  @keyframes moveclouds {
    0% {
      margin-left: 500px;
    }
    100% {
      margin-left: -500px;
    }
  }
`;

const maxTime = 15;

const getSize = () => {
  const int = Math.floor(Math.random() * 50) + 50;
  return int/100;
}

const getXPosition = () => {
  return Math.floor(Math.random() * 1000) - 500;
}

const getYPosition = () => {
  return Math.floor(Math.random() * 200) - 100;
}

const getCloudStyles = (themedCategories) => {
  const clouds = [];
  for (let i = 0; i < themedCategories.length; i++) {
    const size = getSize();
    clouds.push(`
      left: ${getXPosition()}px;
      top: ${getYPosition()}px;
      transform: scale(${size});
      opacity: ${size}; /*opacity proportional to the size*/
      /*Speed will also be proportional to the size and opacity*/
      /*More the speed. Less the time in 's' = seconds*/
      animation: moveclouds ${size * maxTime}s linear infinite;
    `);
  }
  return clouds;
};

const Cloud1 = styled(Cloud)`
  animation: moveclouds 15s linear infinite;
`;

const Cloud2 = styled(Cloud)`
  left: 200px;
  transform: scale(0.6);
  opacity: 0.6; /*opacity proportional to the size*/
  /*Speed will also be proportional to the size and opacity*/
  /*More the speed. Less the time in 's' = seconds*/
  animation: moveclouds 12s linear infinite;
`;

/* eslint-disable react/prefer-stateless-function */
class Clouds extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clouds: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (!this.props.loading && prevProps.loading && this.props.themedCategories && this.props.themedCategories.length) {
      const clouds = getCloudStyles(this.props.themedCategories);
      this.setState({ clouds });
    }
  }
  render() {
    const clouds = this.state.clouds.map((cloud, index) => {
      const { title } = this.props.themedCategories[index];
      const CloudX = styled(Cloud)`
        ${cloud};
      `;
      return (
        <Link to={`/category/${title}`} key={`${title}`}>
          <CloudX>
            <div>{title}</div>
          </CloudX>
        </Link>
      );
    })
    return (
      <Container>
        {clouds}
      </Container>
    );
  }
}

Clouds.propTypes = {
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Clouds;
