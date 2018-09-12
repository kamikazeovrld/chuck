/**
 *
 * Joke
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TweenMax } from 'gsap/TweenMax';
const tile = require('./tile.png');

const fontSize = 20;
const letterDimensions = {
  fontSize: 40,
  width: 24,
  height: 53,
};

const width = 300;
const speed = 1;

const Container = styled.div`
  overflow: hidden;
  float: left;
  border: 10px solid #333;
  border-radius: 8px;
  background-color: red;
`;

const JokeComponent = styled.div`
  position: relative;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  perspective: 800px;
  perspective-origin: 50% 50px;
`;

const LetterComponent = styled.div`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background: white;
  float: left;
  color: black;
  font-size: ${props => `${props.fontSize}px`};
  background: #ffffff url(${tile}) no-repeat right top;
`;

const PieceComponent = styled.div`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background: white;
  float: left;
  background: #ffffff url(${tile}) no-repeat right top;
`;

const ButtonComponent = styled.div`
  width: 200px;
  height: 50px;
  background: red;
  text-align: center;
  color: white;
  font-size: 40px;
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
      console.log('KKrow>', row);
      const padding = colCount - row.length;
      const paddingRight = Math.floor(padding / 2);
      const paddingLeft = padding - paddingRight;
      tiles = tiles.concat(getPieces(paddingLeft, width, height, `L${i}`));
      tiles = tiles.concat(getLetters(row, width, height, fontSize, `W${i}`));
      tiles = tiles.concat(getPieces(paddingRight, width, height, `R${i}`));
    } else {
      tiles = tiles.concat(getPieces(colCount, width, height, `F${i}`));
    }
    tiles.push('break');
  }
  return tiles;
}

function getLetters(row, width, height, fontSize, classPrefix = '') {
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
    });
  }
  return letters;
}

function getPieces(count, width, height, classPrefix = '') {
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
    });
  }
  return sections;
}

/* eslint-disable react/prefer-stateless-function */
class Joke extends React.PureComponent {
  constructor(props) {
    super(props);
    const text =
      'This is the joke text and we have 12345678901234567890123 it longer.';
    const letterSize = {
      fontSize,
      width: (fontSize / letterDimensions.fontSize) * letterDimensions.width,
      height: (fontSize / letterDimensions.fontSize) * letterDimensions.height,
    };
    const maxCharactersPerRow = Math.floor(width / letterSize.width);
    const rows = getRows(text, maxCharactersPerRow);
    const tiles = getTiles(rows, maxCharactersPerRow, letterSize.width, letterSize.height, letterSize.fontSize);

    console.log('rows>', rows);
    console.log('tiles>', tiles);

    this.state = {
      tiles,
      width: (maxCharactersPerRow + 2) * letterSize.width,
      height: (rows.length + 2) * letterSize.height,
    };
  }
  componentDidUpdate(preProps) {
    if (this.props.animate && !preProps.animate) {
      this.shatter();
    }
  }
  shatter = () => {
    this.state.tiles.map(section => {
      const { x, y, rotationX, rotationY, opacity, z, className } = section;
      const params = {
        x,
        y,
        z,
        rotationX,
        rotationY,
        opacity,
      };
      TweenMax.to(`.${className}`, speed, params);
      return 'nothing';
    });
  }
  render() {
    const tiles = this.state.tiles.map((tile, i) => {
      if (tile === 'break') {
        return <br key={`break${i}`} />;
      }
      const { className, width, height } = tile;
      if (tile.type === 'letter') {
        return (
          <LetterComponent
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
          width={width}
          height={height}
          className={className}
          key={className}
        />
      );
    });
    return (
      <Container>
        <JokeComponent width={this.state.width} height={this.state.height}><div>{tiles}</div></JokeComponent>
      </Container>
    );
  }
}

Joke.propTypes = {
  animate: PropTypes.bool.isRequired,
  onAnimationStart: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
  onAnimationIteration: PropTypes.func.isRequired,
};

export default Joke;
