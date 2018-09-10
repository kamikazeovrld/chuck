/**
 *
 * Wrapper
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Scene from 'components/Scene';
import Chuck from 'components/Chuck';

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 800rem;
  margin: 0rem 0;
`;

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Scene
          {...this.props}
          onAnimationIteration={this.onAnimationIteration}
          toggleAnimation={this.toggleAnimation}
        />
        <Chuck {...this.props} />
      </Container>
    );
  }
}

Wrapper.propTypes = {
  animate: PropTypes.bool,
  loadCategories: PropTypes.func.isRequired,
  homepage: PropTypes.object.isRequired,
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

Wrapper.defaultProps = {
  animate: false,
};

export default Wrapper;
