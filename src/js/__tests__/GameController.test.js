import GameController from '../GameController';
import GamePlay from '../GamePlay';
import Swordsman from '../Characters/Swordsman';
import PositionedCharacter from '../PositionedCharacter';
// import Daemon from '../Characters/Daemon';

test('template literals', () => {
  const gamePlay = new GamePlay();
  const container = document.createElement('div');
  container.outerHTML = '<div id="game-container"></div>';
  gamePlay.bindToDOM(container);

  const gameCtrl = new GameController(gamePlay, {});
  gameCtrl.init();

  gameCtrl.playerTeam.add(new PositionedCharacter(new Swordsman(5), 9));
  gameCtrl.onCellEnter(9);
  expect(gamePlay.cells[9].title).toBe('🎖5 ⚔40 🛡10 ❤50');

  gameCtrl.onCellEnter(8);
  expect(gamePlay.cells[8].title).toBe('');
});
