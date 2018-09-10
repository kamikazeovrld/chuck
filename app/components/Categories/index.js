/**
 *
 * Categories
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import IconImage from './icon.png';

const Container = styled.div`
  position: absolute;
  top: 575rem;
  width: 800rem;
  border-bottom: none;
  color: white;
  margin-bottom: 100rem;
`;

const ItemContainer = styled.div`
  display: block;
  float: left;
  width: 33.3333333333%;
`;

const ItemInnerContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const Item = styled.div`
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: 1rem;
  bottom: 1rem;
`;

const Icon = styled.div`
  width: 100%;
  height: 80%;
  background: ${props => `${props.bg} url(${props.icon}) no-repeat center center`};
  background-size: contain;
  color: white;
  font-size: 40rem;
`;

const Title = styled.div`
  width: 100%;
  height: 20%;
  background: ${props => props.bg};
  display: table;
  color: white;
  font-size: 25rem;
  text-align: center;
`;

const TitleText = styled.div`
  display: table-cell;
  vertical-align: middle;
  color: #546e7a;
  font-size: 25rem;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
class Categories extends React.PureComponent {
  render() {
    const categories = this.props.themedCategories.map((category, index) => {
      const {image, title, primaryColor, secondaryColor} = category;
      return (
        <ItemContainer key={title}>
          <ItemInnerContainer>
            <Item><Icon bg={primaryColor} icon={image ? image : IconImage} /><Title bg={secondaryColor}><TitleText>{title}</TitleText></Title></Item>
          </ItemInnerContainer>
        </ItemContainer>
      );
    })
    return (
      <Container>
        <FormattedMessage {...messages.header} />
        <div>{categories}</div>
      </Container>
    );
  }
}

Categories.propTypes = {
  themedCategories: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  currentCategory: PropTypes.string,
  loading: PropTypes.string,
  error: PropTypes.string,
};

export default Categories;
