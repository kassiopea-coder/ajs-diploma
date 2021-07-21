import GamePlay from './GamePlay';
import themes from './themes';
import GameState from './GameState';
import Team from './Team';


export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.level = 1;
  }

  init() {

    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
   
    //draw board and characters
    //this.gamePlay.drawUi(themes[this.state.level % 4]);
    this.gamePlay.drawUi(themes[this.level]);
    


  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
