/**
 * Class representing a manager button
 */
class ManagerButton {

    /**
     * Creates a manager button
     */
    constructor (text, x, y) {
        this.text = text
        this.x = x
        this.y = y

        this.button = createButton(this.text)

        this.button.mousePressed(() => this._changeScreen())
        this.button.addClass('initial-button')
    }

    /**
     * Draws the manager button
     */
    draw () {
        this.button.position(this.x, this.y)
        this.button.textCenter('horizontal')
    }

    /**
     * Changes screen
     */
    _changeScreen () {
        this.button.remove()
        actualScreen = 'game'
    }
}