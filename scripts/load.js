/**
 * Function is used to handle asynchronous loading of
 * external files in a blocking way
 */
function preload () {
    gameFont  = loadFont(gameAssets.gameFont)

    initialScreenImage  = loadImage(gameAssets.initialScreenImage)
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