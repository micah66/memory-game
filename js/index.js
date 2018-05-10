const MemoryGame = {}
const gameBoard = document.getElementById('gameBoard')

MemoryGame.numOfCards = 12

MemoryGame.start = () => {
  MemoryGame.newGame()
  MemoryGame.generateCards()
}
MemoryGame.newGame = () => {
  gameBoard.innerHTML = ''
}

MemoryGame.generateCards = () => {
  MemoryGame.cards = []
  for (let i = 0; i < MemoryGame.numOfCards; i++) {
    const newCard = document.createElement('div')
    gameBoard.appendChild(newCard)
    newCard.className = 'card'
    MemoryGame.cards.push(newCard)
  }
}
