let imageScenario
let imageCharacter
let scenario
let character
let gameSound

/**
 * Function is used to handle asynchronous loading of
 * external files in a blocking way
 */
function preload () {
  imageScenario = loadImage('images/scenario/florest.png')
  imageCharacter = loadImage('images/character/running.png')
  gameSound = loadSound('sounds/soundtrack.mp3')
}

/**
 * Function is called once when the program starts
 */
function setup () {
  createCanvas(windowWidth, windowHeight)
  scenario = new Scenario(imageScenario, 3)
  character = new Character(imageCharacter)
  frameRate(40)
  gameSound.loop()
}

/**
 * Function continuously executePs the lines of code contained
 * inside its block until the program is stopped
 */
function draw () {
  scenario.show()
  scenario.move()

  character.show()
}
