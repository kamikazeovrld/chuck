/**
 *
 * Wrapper
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 800rem;
  margin: 0rem 0;
`;

class Wrapper extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}

Wrapper.propTypes = {
};

Wrapper.defaultProps = {
};

export default Wrapper;
