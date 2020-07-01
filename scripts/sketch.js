let scenarioImage, heroImage, dropletImage, trollImage, flyerDropletImage, gameOverImage
let scenario, score, hero
let gameSound, jumpSound, gameOverSound

const enemies = []

const gameAssets = {
  scenarioImage: 'images/scenario/florest.png',
  heroImage: 'images/hero/running.png',
  dropletImage: 'images/enemies/droplet.png',
  trollImage: 'images/enemies/troll.png',
  flyerDropletImage: 'images/enemies/flyer_droplet.png',
  gameOverImage: 'images/assets/game-over.png',
  gameSound: 'sounds/soundtrack.mp3',
  jumpSound: 'sounds/jump_sound.wav',
  gameOverSound: 'sounds/game_over_sound.wav'
}

/**
 * Function is used to handle asynchronous loading of
 * external files in a blocking way
 */
function preload () {
  scenarioImage  = loadImage(gameAssets.scenarioImage)
  heroImage = loadImage(gameAssets.heroImage)
  dropletImage = loadImage(gameAssets.dropletImage)
  trollImage = loadImage(gameAssets.trollImage)
  flyerDropletImage = loadImage(gameAssets.flyerDropletImage)
  gameOverImage = loadImage(gameAssets.gameOverImage)

  gameSound = loadSound(gameAssets.gameSound)
  jumpSound = loadSound(gameAssets.jumpSound)
  gameOverSound = loadSound(gameAssets.gameOverSound)
}

/**
 * Function is called once when the program starts
 */
function setup () {
  createCanvas(windowWidth, windowHeight)

  scenario = new Scenario(scenarioImage, 3)
  score = new Score()
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

  score.show()

  hero.show()
  hero.applyGravity()

  enemies.forEach(enemy => {
    enemy.show()
    enemy.move()

    hero.isClashing(enemy) ? actionsGameOver() : score.addScore()
  })
}

/**
 * Function with actions when game is over
 */
function actionsGameOver () {
  noLoop()
  image(gameOverImage, width / 2 - 200, height / 3, 400, 100)
  gameOverSound.play()
}
