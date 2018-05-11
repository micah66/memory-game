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
  if (MemoryGame.winOverlay) {
    document.body.removeChild(MemoryGame.winOverlay)
  }
}

MemoryGame.generateCards = () => {
  MemoryGame.cards = []
  for (let i = 0; i < MemoryGame.numOfCards; i++) {
    MemoryGame.newCard = document.createElement('div')
    MemoryGame.newCard.className = 'yankees' + (Math.floor((i + 2) / 2)) + ' card'
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
MemoryGame.selectedCards = []
MemoryGame.flipCard = (e) => {
  e.target.classList.add('flipped')
  e.target.classList.remove('card')
  MemoryGame.selectedCards.push(e.target)
  if (MemoryGame.selectedCards.length > 1) {
    if (MemoryGame.selectedCards[0].className === MemoryGame.selectedCards[1].className) {
      MemoryGame.selectedCards[0].classList.add('match')
      MemoryGame.selectedCards[0].classList.remove('flipped')
      MemoryGame.selectedCards[1].classList.add('match')
      MemoryGame.selectedCards[1].classList.remove('flipped')
      MemoryGame.selectedCards = []
    } else {
      for (let i = 0; i < gameBoard.children.length; i++) {
        gameBoard.children[i].classList.add('disabled')
      }
      setTimeout(() => {
        MemoryGame.selectedCards[0].classList.add('card')
        MemoryGame.selectedCards[0].classList.remove('flipped')
        MemoryGame.selectedCards[1].classList.add('card')
        MemoryGame.selectedCards[1].classList.remove('flipped')
        MemoryGame.selectedCards = []
        for (let i = 0; i < gameBoard.children.length; i++) {
          gameBoard.children[i].classList.remove('disabled')
        }
      }, 1000)
    }
  }
  const matches = document.getElementsByClassName('match')
  if (matches.length === MemoryGame.numOfCards) {
    MemoryGame.winOverlay = document.createElement('div')
    MemoryGame.winOverlay.id = 'winOverlay'
    MemoryGame.winOverlay.innerHTML = 'Congratulations, You win!'
    const newGameBtn = document.createElement('button')
    newGameBtn.innerHTML = 'New Game'
    newGameBtn.className = 'btn'
    MemoryGame.winOverlay.appendChild(newGameBtn)
    document.body.appendChild(MemoryGame.winOverlay)
    newGameBtn.addEventListener('click', MemoryGame.start)
  }
}
