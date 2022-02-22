import PlayerName from '../../components/PlayerName'
import PlayerScore from '../../components/PlayerScore'
import VsPlayer from '../../components/VsPlayer'
import ArrowDown from '../../components/ArrowDown'
import './style.css'

function ScoreBoard() {
  let score1 = 0
  let score2 = 0

  return /*html*/ `
    <header class='score-board'>
    ${ArrowDown(1)}
    ${PlayerName('Player1')}
    ${PlayerScore(score1)}
    ${VsPlayer()}
    ${PlayerScore(score2)}
    ${PlayerName('Player2')}
    </header>
  `
}

export default ScoreBoard
