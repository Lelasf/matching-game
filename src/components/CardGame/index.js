import './style.css'

function CardGame(icon = 'logo-alura', alt = 'Logo da Alura') {
  return /*html*/ `
  <article class='card-game'>
    <img src="src/images/${icon}.svg" alt="${alt}">
  </article>
  `
}

export default CardGame
