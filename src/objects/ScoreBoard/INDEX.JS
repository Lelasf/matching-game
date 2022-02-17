import PlayerName from '../../components/PlayerName'
import GamePoints from '../../components/GamePoints'
import GameArrow from '../../components/GameArrow'
import './style.css'

function ScoreBoard() {
  return /*html*/ `
    <header class='score-board'>
      ${GameArrow()}
      ${GamePoints()}
      ${GamePoints()}
      ${PlayerName('Player1')}
      ${PlayerName('Player2')}
    </header>
  `
}

export default ScoreBoard
