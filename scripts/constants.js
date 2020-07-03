let game
let gameConfiguration
let gameScreens
let managerButton
let initialScreen
let actualScreen = 'initialScreen'
let initialScreenImage
let lifeImage
let scenarioImage
let heroImage
let dropletImage
let trollImage
let flyerDropletImage
let gameOverImage
let gameSound
let jumpSound
let gameOverSound

const enemies = []

const gameAssets = {
  gameConfiguration: 'game-configs.json',
  gameFont: 'assets/general/game-font.otf',
  initialScreenImage: 'assets/general/initial-screen.png',
  lifeImage: 'assets/general/life-heart.png',
  scenarioImage: 'assets/scenario/florest.png',
  heroImage: 'assets/hero/running.png',
  dropletImage: 'assets/enemies/droplet.png',
  trollImage: 'assets/enemies/troll.png',
  flyerDropletImage: 'assets/enemies/flyer_droplet.png',
  gameOverImage: 'assets/general/game-over.png',
  gameSound: 'assets/sounds/soundtrack.mp3',
  jumpSound: 'assets/sounds/jump_sound.wav',
  gameOverSound: 'assets/sounds/game_over_sound.wav'
}
