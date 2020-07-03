/**
 * Function is used to handle asynchronous loading of
 * external files in a blocking way
 */
function preload () {
    gameConfiguration = loadJSON(gameAssets.gameConfiguration)

    gameFont  = loadFont(gameAssets.gameFont)

    initialScreenImage  = loadImage(gameAssets.initialScreenImage)
    lifeImage  = loadImage(gameAssets.lifeImage)
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