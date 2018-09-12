/**
 *
 * Joke
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TweenMax } from 'gsap/TweenMax';
import uuid from 'uuid/v4';
const tile = require('./tile.png');

const letterDimensions = {
  fontSize: 40,
  width: 24,
  height: 53,
};

const speed = 1;

const Container = styled.div`
  position: relative;
  > div:nth-child(1) {
    overflow: hidden;
    float: left;
    background-color: transparent;
  }
`;

const JokeComponent = styled.div`
  position: relative;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  perspective: 800px;
  perspective-origin: 50% 50px;
`;

const LetterComponent = styled.div`
  ${props => `${props.border}`}
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background: white;
  float: left;
  color: black;
  font-size: ${props => `${props.fontSize}px`};
  background: #ffffff url(${tile}) no-repeat right top;
`;

const PieceComponent = styled.div`
  ${props => `${props.border}`}
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background: white;
  float: left;
  background: #ffffff url(${tile}) no-repeat right top;
`;

const ButtonComponent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
  border-radius: 5px;
  background: white;
  text-align: center;
  color: dark-grey;
  font-size: 18px;
`;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRows(text, maxCharactersPerRow) {
  const rows = [[]];
  let words = text.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    let currentRow = rows[rows.length - 1];
    if (!currentRow.length) {
      if (word.length <= maxCharactersPerRow) {
        currentRow = currentRow.concat(word.split(''));
        currentRow.push(' ');
        rows[rows.length - 1] = currentRow;
      } else {
        const subStr = `${word.substr(0, maxCharactersPerRow - 1)}-`;
        const remainder = word.substr(maxCharactersPerRow - 1);
        const newWords = words.slice(0, i).concat([subStr, remainder, ...words.slice(i + 1)]);
        words = newWords;
        i -= 1;
      }
    } else {
      const remainingCharacters = maxCharactersPerRow - currentRow.length;
      if (word.length <= remainingCharacters) {
        currentRow = currentRow.concat(word.split(''));
        currentRow.push(' ');
        rows[rows.length - 1] = currentRow;
      } else {
        i -= 1;
        rows.push([]);
      }
    }
  }
  return rows;
}

function getTiles(rows, maxCharactersPerRow, width, height, fontSize) {
  let tiles = [];
  const colCount = maxCharactersPerRow + 2;
  const rowCount = rows.length + 2;

  for (let i = 0; i < rowCount; i += 1) {
    if (rows[i - 1]) {
      const row = rows[i - 1];
      const padding = colCount - row.length;
      const paddingRight = Math.floor(padding / 2);
      const paddingLeft = padding - paddingRight;
      tiles = tiles.concat(getPieces(paddingLeft, width, height, `${uuid()}${i}`, 'left'));
      tiles = tiles.concat(getLetters(row, width, height, fontSize, `${uuid()}${i}`));
      tiles = tiles.concat(getPieces(paddingRight, width, height, `${uuid()}${i}`, 'right'));
    } else {
      if (i === 0) {
        tiles = tiles.concat(getPieces(colCount, width, height, `${uuid()}${i}`, 'top'));
      } else if (i === rowCount - 1) {
        tiles = tiles.concat(getPieces(colCount, width, height, `${uuid()}${i}`, 'bottom'));
      } else {
        tiles = tiles.concat(getPieces(colCount, width, height, `${uuid()}${i}`, 'sides'));
      }
    }
    tiles.push('break');
  }
  return tiles;
}

function getLetters(row, width, height, fontSize, classPrefix = '', side = null) {
  const letters = [];
  for (let j = 0; j < row.length; j += 1) {
    letters.push({
      type: 'letter',
      width,
      height,
      fontSize,
      x: getRandomArbitrary(-250, 250),
      y: getRandomArbitrary(-250, 250),
      z: getRandomArbitrary(-500, 500),
      rotationY: getRandomArbitrary(-720, 720),
      rotationX: getRandomArbitrary(-720, 720),
      className: `letter${classPrefix}${j}`,
      letter: row[j],
      opacity: 0,
      border: '',
    });
  }
  return letters;
}

function getPieces(count, width, height, classPrefix = '', side = null) {
  const sections = [];
  for (let i = 0; i < count; i += 1) {
    sections.push({
      type: 'piece',
      width,
      height,
      x: getRandomArbitrary(-250, 250),
      y: getRandomArbitrary(-250, 250),
      z: getRandomArbitrary(-500, 500),
      rotationY: getRandomArbitrary(-720, 720),
      rotationX: getRandomArbitrary(-720, 720),
      className: `piece${classPrefix}${i}`,
      opacity: 0,
      border: getBorder(i, count, side),
    });
  }
  return sections;
}

function getBorder(position, count, side) {
  if (!side) {
    return '';
  }
  if (side === 'top') {
    if (position === 0) {
      return `
      border-top: 5px solid #333;
      border-left: 5px solid #333;
      border-radius: 4px 0 0 0;
    `;
    }
    if (position === count - 1) {
      return `
      border-top: 5px solid #333;
      border-right: 5px solid #333;
      border-radius: 0 4px 0 0;
    `;
    }
    return `
      border-top: 5px solid #333;
      border-radius: 0;
    `;
  }
  if (side === 'bottom') {
    if (position === 0) {
      return `
      border-bottom: 5px solid #333;
      border-left: 5px solid #333;
      border-radius: 0 0 0 4px;
    `;
    }
    if (position === count - 1) {
      return `
      border-bottom: 5px solid #333;
      border-right: 5px solid #333;
      border-radius: 0 0 4px 0;
    `;
    }
    return `
      border-bottom: 5px solid #333;
      border-radius: 0;
    `;
  }
  if (side === 'sides' || side === 'left') {
    if (position === 0) {
      return `
      border-left: 5px solid #333;
      border-radius: 0;
    `;
    }
  }
  if (side === 'sides' || side === 'right') {
    if (position === count - 1) {
      return `
      border-right: 5px solid #333;
      border-radius: 0;
    `;
    }
  }
  return '';
}

function getState(text, width, fontSize) {
  const letterSize = {
    fontSize,
    width: (fontSize / letterDimensions.fontSize) * letterDimensions.width,
    height: (fontSize / letterDimensions.fontSize) * letterDimensions.height,
  };
  const maxCharactersPerRow = Math.floor(width / letterSize.width);
  const rows = text ? getRows(text, maxCharactersPerRow) : [];
  const tiles = text
    ? getTiles(rows, maxCharactersPerRow, letterSize.width, letterSize.height, letterSize.fontSize)
    : [];

  return {
    tiles,
    width: (maxCharactersPerRow + 2) * letterSize.width,
    height: (rows.length + 2) * letterSize.height,
  };
}

function getText(category) {
  let text = 'No joke loaded :(';
  if (category) {
    if (category.joke) {
      text = category.joke.value;
    } else if (category.error) {
      text = category.error;
    } else if (category.loading) {
      text = category.loading;
    }
  }
  return text;
}

/* eslint-disable react/prefer-stateless-function */
class Joke extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('props of joke>', props)
    this.state = getState(null, props.theme.joke.maxWidth, props.theme.joke.fontSize );
  }
  componentDidMount() {
    const text = getText(this.props.category);
    this.setState(getState(text, this.props.theme.joke.maxWidth, this.props.theme.joke.fontSize ));
  }
  componentDidUpdate(preProps) {
    const { animate, category } = this.props;
    if (animate && !preProps.animate) {
      this.shatter();
    }
    if (category && (!preProps.category || preProps.category.loading !== category.loading || preProps.category.error !== category.error)) {
      const text = getText(this.props.category);
      this.setState(getState(text, this.props.theme.joke.maxWidth, this.props.theme.joke.fontSize ));
    }
  }
  shatter = () => {
    for (let i = 0; i < this.state.tiles.length - 1; i += 1) {
      const { x, y, rotationX, rotationY, opacity, z, className } = this.state.tiles[i];
      const params = {
        x,
        y,
        z,
        rotationX,
        rotationY,
        opacity,
      };
      TweenMax.to(`.${className}`, speed, params);
    }
    const i = this.state.tiles.length - 1
    if (this.state.tiles[i]) {
      const { x, y, rotationX, rotationY, opacity, z, className } = this.state.tiles[i];
      const params = {
        x,
        y,
        z,
        rotationX,
        rotationY,
        opacity,
        onComplete: () =>
          this.props.onAnimationEnd({ animationName: 'shatter' }),
      };
      TweenMax.to(`.${className}`, speed, params);
    }
  }
  render() {
    const tiles = this.state.tiles.map((tile, i) => {
      if (tile === 'break') {
        return <br key={`break${i}`} />;
      }
      const { className, width, height, border } = tile;
      if (tile.type === 'letter') {
        return (
          <LetterComponent
            border={border}
            width={width}
            height={height}
            fontSize={tile.fontSize}
            className={className}
            key={className}
          >{tile.letter}</LetterComponent>
        );
      }
      return (
        <PieceComponent
          border={border}
          width={width}
          height={height}
          className={className}
          key={className}
        />
      );
    });
    return (
      <Container>
        <div>
          <JokeComponent width={this.state.width} height={this.state.height}><div>{tiles}</div></JokeComponent>
        </div>
        <ButtonComponent onClick={this.props.next}>Next Joke >></ButtonComponent>
      </Container>
    );
  }
}

Joke.propTypes = {
  theme: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  animate: PropTypes.bool.isRequired,
  next: PropTypes.func.isRequired,
  onAnimationStart: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
  onAnimationIteration: PropTypes.func.isRequired,
};

export default Joke;
