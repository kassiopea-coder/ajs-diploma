import Character from './Characters/Character';


export default class PositionedCharacter {
  constructor(character, position) {
    if (!(character instanceof Character)) {
      throw new Error('character must be instance of Character or its children');
    }

    if (typeof position !== 'number') {
      throw new Error('position must be a number');
    }

    this.character = character;
    this.position = position;
  }
}

// calc possible steps based on current position and step radius
/*get stepCells() {
  const boardSize = 8;
  const stepsArray = [this.position];
  const positionLine = this.position % boardSize;

  // moving around within the board, chosing only horizontals, verticals and diagonals
  for (let i = 1; i <= this.character.stepRadius; i += 1) {
    const top = this.position - boardSize * i;
    const topRight = this.position - boardSize * i + i;
    const right = this.position + 1 * i;
    const bottomRight = this.position + boardSize * i + i;
    const bottom = this.position + boardSize * i;
    const bottomLeft = this.position + boardSize * i - i;
    const left = this.position - 1 * i;
    const topLeft = this.position - boardSize * i - i;

  }


}*/
