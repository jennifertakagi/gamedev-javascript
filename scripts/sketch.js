let scenarioImage, heroImage, dropletImage, trollImage, flyerDropletImage, gameOverImage
let scenario, hero
let gameSound, jumpSound, gameOverSound

const enemies = []

/**
 * Function is used to handle asynchronous loading of
 * external files in a blocking way
 */
function preload () {
  scenarioImage  = loadImage('images/scenario/florest.png')
  heroImage = loadImage('images/hero/running.png')
  dropletImage = loadImage('images/enemies/droplet.png')
  trollImage = loadImage('images/enemies/troll.png')
  flyerDropletImage = loadImage('images/enemies/flyer_droplet.png')
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
  hero = new Hero(heroImage, 110, 135, 0, 30, 220, 270, 4, 15)
  const droplet = new Enemy(dropletImage, 52, 52, width - 50, 30, 104, 100, 10, 200, 4, 27)
  const troll = new Enemy(trollImage, 200, 200, width * 2, 0, 400, 400, 10, 2000, 5, 28)
  const flyerDroplet = new Enemy(flyerDropletImage, 200, 150, width - 52, 200, 200, 150, 10, 2500, 3, 15)

  enemies.push(droplet, troll, flyerDroplet)

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

  enemies.forEach(enemy => {
    enemy.show()
    enemy.move()

    hero.isClashing(enemy) ? actionsGameOver() : false

  })
}

/**
 * Function with actions when game is over
 */
function actionsGameOver () {
  noLoop()
  image(gameOverImage, 100, height / 3, 400, 100)
  gameOverSound.play()
}
