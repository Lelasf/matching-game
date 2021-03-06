import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import ScoreBoard from './src/objects/ScoreBoard/index.js'
import BoardGame from './src/objects/BoardGame'
import ModalWrapper from './src/objects/ModalWrapper'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforeend',
  `
    ${ScoreBoard()}
    ${BoardGame()}
    ${ModalWrapper()}
  `
)
