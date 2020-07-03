let game, gameScreens, managerButton, initialScreen
let actualScreen = 'initialScreen'
let initialScreenImage, scenarioImage, heroImage, dropletImage, trollImage, flyerDropletImage, gameOverImage
let gameSound, jumpSound, gameOverSound

const enemies = []

const gameAssets = {
  gameFont: 'assets/general/game-font.otf',
  initialScreenImage: 'assets/general/initial-screen.png',
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
