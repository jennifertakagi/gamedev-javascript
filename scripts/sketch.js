/**
 * Function is called once when the program starts
 */
function setup () {
  createCanvas(windowWidth, windowHeight)
  frameRate(40)
  gameSound.loop()

  game = new Game()
  game.setup()

  managerButton = new ManagerButton('Start', width / 2, height / 2)
  initialScreen = new InitialScreen()

  gameScreens = {
    game,
    initialScreen
  }
}

/**
 * Function is called once every time a key is pressed
 */
function keyPressed () {
  game.keyPressed(key)
}

/**
 * Function continuously executePs the lines of code contained
 * inside its block until the program is stopped
 */
function draw () {
  gameScreens[actualScreen].draw()
}

/**
 * Function with actions when game is over
 * @params {Object} that
 */
function actionsGameOver (that) {
  that.life.loseLife()
  that.hero.becameInvencible()

  if (that.life.lifes <= 0) {
    image(gameOverImage, width / 2 - 200, height / 3, 400, 100)
    gameOverSound.play()
    noLoop()
  }
}
