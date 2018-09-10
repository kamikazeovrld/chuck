/**
 *
 * Scene
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mirror from 'components/Mirror';
import Desk from 'components/Desk';
import Vase from 'components/Vase';
import Cabinet from 'components/Cabinet';
import City from 'components/City';
import Categories from 'components/Categories';
import Loading from 'components/LoadingBar';

const Container = styled.div`
  @keyframes scene {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(-7deg);
    }
  }
  position: relative;
  display: inline-block;
  width: 800rem;
  height: 575rem;
  ${({animate}) => animate ? 'animation: scene 2s ease-in-out alternate infinite;': ''}
  transform-origin: 660rem 415rem;
`;

function Scene(props) {
  const {categories, currentCategory, themedCategories, loading, error, toggleAnimation, animate} = props
  const content = (<Categories
    themedCategories={themedCategories}
    currentCategory={currentCategory}
    loading={loading}
    error={error}
  />)
  return (
    <Container animate={animate}>
      <City onMouseEnter={() => toggleAnimation(true)} onMouseLeave={() => toggleAnimation(false)} />
      <Loading message={'some message'}><div /></Loading>
    </Container>
  );
}

Scene.propTypes = {
  toggleAnimation: PropTypes.func.isRequired,
  animate: PropTypes.bool.isRequired,
  loadCategories: PropTypes.func.isRequired,
  homepage: PropTypes.object.isRequired,
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Scene;
