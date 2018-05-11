const MemoryGame = {}
const gameBoard = document.getElementById('gameBoard')

MemoryGame.numOfCards = 12

MemoryGame.start = () => {
  MemoryGame.newGame()
  MemoryGame.generateCards()
  MemoryGame.randomizeCards()
}
MemoryGame.newGame = () => {
  gameBoard.innerHTML = ''
}

MemoryGame.generateCards = () => {
  MemoryGame.cards = []
  for (let i = 0; i < MemoryGame.numOfCards; i++) {
    MemoryGame.newCard = document.createElement('div')
    MemoryGame.newCard.className = 'card yankees' + (Math.floor((i + 2) / 2))
    MemoryGame.cards.push(MemoryGame.newCard)
  }
}
MemoryGame.randomizeCards = () => {
  MemoryGame.shuffledCards = []
  for (let i = 0; i < MemoryGame.numOfCards; i++) {
    MemoryGame.shuffledCards[i] = MemoryGame.cards.splice(Math.random() * MemoryGame.cards.length, 1)
    gameBoard.appendChild(MemoryGame.shuffledCards[i][0])
    MemoryGame.shuffledCards[i][0].addEventListener('click', MemoryGame.flipCard)
  }
}
