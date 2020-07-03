/**
 * Class representing a initial screen
 */
class InitialScreen {

    /**
     * Creates a initial screen
     */
    constructor () {}

    /**
     * Draws the initial screen
     */
    draw () {
        this._setBackgroundImage()
        this._setText()
        this._setInitialButton()
    }

    /**
     * Sets the background image
     */
    _setBackgroundImage () {
        image(initialScreenImage, 0, 0, width, height)
    }

    /**
     * Sets the text
     */
    _setText () {
        textFont(gameFont)
        textAlign('center')
        textSize(50)
        text('Hipsta\'s', width / 2, height / 3)
        textSize(150)
        text('Adventures', width / 2, height / 5 * 3)
    }

    /**
     * Sets the initial button
     */
    _setInitialButton () {
        managerButton.y = height / 7 * 5
        managerButton.draw()
    }
}