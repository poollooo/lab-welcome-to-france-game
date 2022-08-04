const gridLine = document.querySelector('.grid')

let cellArray = [];

for (let i = 0; i <= 100; i++) {
  let elementToAppend = document.createElement("div")
  elementToAppend.classList.add('cell')
  elementToAppend.dataset.index = i
  gridLine.append(elementToAppend)
  cellArray.push(elementToAppend.dataset.index)
}

class GameBoard {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.element = null
    this.cells = this._createCells()
  }
  _createCells() {
    gridLine
  }
}

const board = new GameBoard(10, 10)

function fisherYatesShuffle(arr) {
  for (let i = arr.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = arr[j]
    arr[j] = arr[i - 1]
    arr[i - 1] = temp
  }
}

function getRandomSelection(n, array) {
  const cloned = Array.from(array)
  fisherYatesShuffle(cloned)
  const selected = cloned.slice(0, n)
  return selected
}

const inventory = {
  element: null,
  add() {
    // iteration 3
  },
  clear() {
    // iteration 3 (reset behaviour)
  },
}

class Collectible {
  constructor(className) {
    this.className = className
    this.cell = null
    this.isCollected = false
  }
  hide() {
    // reset behaviour
  }
  collect() {
    // iteration 4
  }
  display() {
    // iteration 2
  }
}

const collectibles = [
  'carte-vitale',
  'titre-de-sejour',
  'sim-card',
  'compte-bancaire',
  'apartment',
  'job',
].map((c) => new Collectible(c))

function distributeCollectibles() {
  let positionsArray = getRandomSelection(6, cellArray)

  cellArray.forEach((cell) => {
    for (let position in positionsArray) {
      if (cell === positionsArray[position]) {
        let divToUpdate = document.querySelector(`[data-index="${positionsArray[position]}"]`)
        divToUpdate.classList.add(collectibles[position].className)
      }
    }
  })
}

function getRandomUnoccupiedCell() {
  let randomPlayerPosition = Math.floor(Math.random() * 100)
  return randomPlayerPosition
}

const player = {
  className: 'player',
  cell: getRandomUnoccupiedCell(),
  show() {
    // iteration 3
    let divToUpdate = document.querySelector(`[data-index="${this.cell}"]`)
    divToUpdate.classList.add(this.className)
  },
  hide() {
    // iteration 3
    let divToUpdate = document.querySelector(`[data-index="${this.cell}"]`)
    divToUpdate.classList.remove('player')
  },
  move(direction) {
    // let divToUpdate = document.querySelector(`[data-index="${this.cell}"]`)
    divToRemove = document.querySelector(`[data-index="${this.cell}"]`)
    if (this.cell >= 10 && this.cell <= 89) {
      console.log(this.cell)
      switch (direction) {
        case 'up':

          this.hide()
          this.cell -= 10;
          this.show()
          // console.log('up')
          // console.log('player position', this.cell)
          break
        case 'down':
          this.hide()
          this.cell += 10;
          this.show()
          // console.log('down')
          // console.log('player position', this.cell)
          break
        case 'left':
          this.hide()
          this.cell -= 1;
          this.show()
          // console.log('left')
          // console.log('player position', this.cell)
          break
        case 'right':
          this.hide()
          this.cell += 1;
          this.show()
          // console.log('right')
          // console.log('player position', this.cell)
          break
      }
    }
    else if (this.cell >= 0 && this.cell <= 9) {
      if (this.cell >= 1) {
        switch (direction) {
          case 'down':
            divDown = document.querySelector(`[data-index="${this.cell + 10}"]`)
            divToRemove.classList.remove('player')
            divDown.classList.add('player')
            this.cell += 10;
            // console.log('down')
            // console.log('player position', this.cell)
            break
          case 'left':
            divLeft = document.querySelector(`[data-index="${this.cell - 1}"]`)
            divToRemove.classList.remove('player')
            divLeft.classList.add('player')
            this.cell -= 1;
            // console.log('left')
            // console.log('player position', this.cell)
            break
          case 'right':
            divRight = document.querySelector(`[data-index="${this.cell + 1}"]`)
            divToRemove.classList.remove('player')
            divRight.classList.add('player')
            this.cell += 1;
            // console.log('right')
            // console.log('player position', this.cell)
            break
        }
      } else {
        switch (direction) {
          case 'down':
            divDown = document.querySelector(`[data-index="${this.cell + 10}"]`)
            divToRemove.classList.remove('player')
            divDown.classList.add('player')
            this.cell += 10;
            // console.log('down')
            // console.log('player position', this.cell)
            break
          case 'right':
            divRight = document.querySelector(`[data-index="${this.cell + 1}"]`)
            divToRemove.classList.remove('player')
            divRight.classList.add('player')
            this.cell += 1;
            // console.log('right')
            // console.log('player position', this.cell)
            break
        }
      }
    } else if (this.cell >= 90 && this.cell <= 99) {
      if (this.cell <= 98) {
        switch (direction) {
          case 'up':
            divUp = document.querySelector(`[data-index="${this.cell - 10}"]`)
            divToRemove.classList.remove('player')
            divUp.classList.add('player')
            this.cell -= 10;
            // console.log('up')
            // console.log('player position', this.cell)
            break
          case 'left':
            divLeft = document.querySelector(`[data-index="${this.cell - 1}"]`)
            divToRemove.classList.remove('player')
            divLeft.classList.add('player')
            this.cell -= 1;
            // console.log('left')
            // console.log('player position', this.cell)
            break
          case 'right':
            divRight = document.querySelector(`[data-index="${this.cell + 1}"]`)
            divToRemove.classList.remove('player')
            divRight.classList.add('player')
            this.cell += 1;
            // console.log('right')
            // console.log('player position', this.cell)
            break
        }
      } else {
        switch (direction) {
          case 'up':
            divUp = document.querySelector(`[data-index="${this.cell - 10}"]`)
            divToRemove.classList.remove('player')
            divUp.classList.add('player')
            this.cell -= 10;
            // console.log('up')
            // console.log('player position', this.cell)
            break
          case 'left':
            divLeft = document.querySelector(`[data-index="${this.cell - 1}"]`)
            divToRemove.classList.remove('player')
            divLeft.classList.add('player')
            this.cell -= 1;
            // console.log('left')
            // console.log('player position', this.cell)
            break
        }
      }
    }
  }
  ,
  canMove(direction) {
    // hint for iteration 3: make move behaviour conditional
  },
  _detectCollisions() {
    // iteration 4
    // how do we detect collisions with items
    // when do we call this?
  },
}

const game = {
  isStarted: false,
  isWon: false,
  isLost: false,
  // iteration 5
  winAudio: null,
  win() {
    // iteration 4
  },
  start() {
    distributeCollectibles();
    // iteration 3

    // iteration 4
    // reset the inventory
    // iteration 5
    // reset the music
  },
}
player.show();

const startButton = document.querySelector('button#start')
startButton.addEventListener('click', () => {
  if (!game.isStarted) {
    game.isStarted = true
    game.start()
    player.move()
  }
})


document.addEventListener('keydown', (event) => {
  if (!game.isStarted) {
    return
  }

  switch (event.code) {
    case 'ArrowUp':
      player.move('up')
      break
    case 'ArrowDown':
      player.move('down')
      break
    case 'ArrowLeft':
      player.move('left')
      break
    case 'ArrowRight':
      player.move('right')
      break
  }
})
