/**
 * Class representing a character
 */
class Character {

    /**
     * Creates a character
     * @param {string} image - the image value
     */
    constructor (image) {
        this.image = image
        this.characterHeight = 135
        this.positionCharacter = height - this.characterHeight
        this.frameCharacterWidth = 220
        this.frameCharacterHeight = 270
        this.framesLength = 15
        this.currentFrame = 0
        this.currentPosition = 0
        this.rowFrame = 0
    }
    
    /**
     * Gets the frame coordinates according to parameters
     * @param {number} positionFrame - position frame required
     * @param {array} frameCoordinates - list with coordinates 
     */
    getFrameCoordinates (positionFrame) {
        return [(positionFrame - this.rowFrame ) * this.frameCharacterWidth, this.frameCharacterHeight * this.currentPosition]
    }

    /**
     * Shows the character
     */
    show () {
        const frameCoordinates = this.getFrameCoordinates(this.currentFrame)

        image(this.image, 0, this.positionCharacter, 110, this.characterHeight, frameCoordinates[0], frameCoordinates[1], 220, 270)

        this.animate()
    }

    /**
     * Animates the character
     */
    animate () {
        this.currentFrame++

        if (this.currentFrame % 4 === 0) {
            this.rowFrame = this.currentFrame 
            this.currentPosition++
        }

        if (this.currentFrame >= this.framesLength) {
            this.currentFrame = 0
            this.currentPosition = 0
            this.rowFrame = 0
        }
    }
}