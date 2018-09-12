/**
 *
 * Scene
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mirror from 'components/Mirror';
import Desk from 'components/Desk';
import Vase from 'components/Vase';
import Cabinet from 'components/Cabinet';
import City from 'components/City';
import Categories from 'components/Categories';
import Loading from 'components/LoadingBar';
import Clouds from 'components/Clouds';

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

class Scene extends Component {
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
    if (!this.props.loading && this.state.animate && !(event.elapsedTime % 4)) {
      this.setState({ animate: false });
    }
  }
  render() {
    const { currentCategory, themedCategories, loading, error } = this.props
    const oldcontent = loading ? (
      <Loading message={loading}>
        <div />
      </Loading>
    ) : (
      <Categories
        themedCategories={themedCategories}
        currentCategory={currentCategory}
        loading={loading}
        error={error}
      />
    );
    const content = loading ? (
      <Loading message={loading}>
        <div />
      </Loading>
    ) : null;
    return (
      <Container
        onAnimationIteration={this.onAnimationIteration}
        animate={this.state.animate}
      >
        <Clouds
          themedCategories={themedCategories}
          currentCategory={currentCategory}
          loading={loading}
          error={error}
        />
        <City />
        {content}
      </Container>
    );
  }
}

Scene.propTypes = {
  homepage: PropTypes.object.isRequired,
  themedCategories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Scene;
