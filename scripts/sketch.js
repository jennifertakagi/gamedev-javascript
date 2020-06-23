let scenarioImage, heroImage, enemyImage, gameOverImage
let scenario, hero, enemy
let gameSound, jumpSound, gameOverSound

/**
 * Function is used to handle asynchronous loading of
 * external files in a blocking way
 */
function preload () {
  scenarioImage  = loadImage('images/scenario/florest.png')
  heroImage = loadImage('images/hero/running.png')
  enemyImage = loadImage('images/enemies/droplet.png')
  gameOverImage = loadImage('images/assets/game-over.png')

  gameSound = loadSound('sounds/soundtrack.mp3')
  jumpSound = loadSound('sounds/jump_sound.wav')
  gameOverSound = loadSound('sounds/game_over_sound.wav')
}

/**
 * Function is called once when the program starts
 */
function setup () {
  createCanvas(windowWidth, windowHeight)

  scenario = new Scenario(scenarioImage, 3)
  hero = new Hero(heroImage, 110, 135, 0, 220, 270, 4, 15)
  enemy = new Enemy(enemyImage, 52, 52, width - 50, 104, 100, 4, 27)

  frameRate(40)

  gameSound.loop()
}

/**
 * Function is called once every time a key is pressed
 */
function keyPressed () {
  if (key === 'ArrowUp') {
    hero.jump()
    jumpSound.play()
  }
}

/**
 * Function continuously executePs the lines of code contained
 * inside its block until the program is stopped
 */
function draw () {
  scenario.show()
  scenario.move()

  hero.show()
  hero.applyGravity()

  enemy.show()
  enemy.move()

  hero.isClashing(enemy) ? actionsGameOver() : false
}

/**
 * Function with actions when game is over
 */
function actionsGameOver () {
  noLoop()
  image(gameOverImage, 100, height / 3, 400, 100)
  gameOverSound.play()
}
