/**
 *
 * Categories
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
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
  color: #546E7A;
  font-size: 25rem;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
class Categories extends React.PureComponent {
  render() {
    return (
      <Container>
        <FormattedMessage {...messages.header} />
        <div>
          <ItemContainer>
            <ItemInnerContainer>
              <Item><Icon bg="#B9F6CA" icon={IconImage} /><Title bg="#1EE8B6"><TitleText>Title</TitleText></Title></Item>
            </ItemInnerContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemInnerContainer>
              <Item><Icon bg="#FFFF8D" icon={IconImage} /><Title bg="#FFEB3C"><TitleText>Title</TitleText></Title></Item>
            </ItemInnerContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemInnerContainer>
              <Item><Icon bg="#FF8A80" icon={IconImage} /><Title bg="#FF5253"><TitleText>Title</TitleText></Title></Item>
            </ItemInnerContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemInnerContainer>
              <Item><Icon bg="#84FEFF" icon={IconImage} /><Title bg="#03A9F5"><TitleText>Title</TitleText></Title></Item>
            </ItemInnerContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemInnerContainer>
              <Item><Icon bg="#B388FE" icon={IconImage} /><Title bg="#7E57C2"><TitleText>Title</TitleText></Title></Item>
            </ItemInnerContainer>
          </ItemContainer>
          <ItemContainer>
            <ItemInnerContainer>
              <Item><Icon bg="#F5F5F5" icon={IconImage} /><Title bg="#999999"><TitleText>Title</TitleText></Title></Item>
            </ItemInnerContainer>
          </ItemContainer>
        </div>
      </Container>
    );
  }
}

Categories.propTypes = {};

export default Categories;
