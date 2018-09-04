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
  border-bottom: solid 10rem #905d9b;
  animation: scene 2s ease-in-out alternate infinite;
  transform-origin: 660rem 415rem;
`;

function Scene(props) {
  const {categories, currentCategory, themedCategories, loading, error} = props
  return (
    <Container>
      <City />
      <Categories
        themedCategories={themedCategories}
        currentCategory={currentCategory}
        loading={loading}
        error={error}
      />
    </Container>
  );
}

Scene.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  homepage: PropTypes.object.isRequired,
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Scene;
