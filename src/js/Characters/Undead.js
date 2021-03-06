import Character from './Character';

export default class Bowman extends Character {
  constructor(level, type = 'undead') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    this.stepRadius = 4;
    this.attackRadius = 1;
  }
}
