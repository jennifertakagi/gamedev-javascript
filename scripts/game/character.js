/**
 * Class representing a character
 */
class Character {

    /**
     * Creates a character
     * @param {string} image - the character's image
     * @param {number} characterWidth - the character's width
     * @param {number} characterHeight - the character's height
     * @param {number} x - the character's position on x
     * @param {number} widthSprite - the sprite's width
     * @param {number} heightSprite - the sprite's height
     * @param {number} spritePerRow - the sprites per row
     * @param {number} spriteLength - the sprite's length (total sprite)
     */
    constructor (image, characterWidth, characterHeight, x, variationY, widthSprite, heightSprite, spritePerRow, spriteLength) {
        this.image = image
        this.characterWidth = characterWidth
        this.characterHeight = characterHeight
        this.x = x
        this.variationY = variationY
        this.y = height - this.characterHeight - this.variationY
        this.widthSprite = widthSprite
        this.heightSprite = heightSprite
        this.spritePerRow = spritePerRow
        this.spriteLength = spriteLength

        this.currentFrame = 0
        this.currentRowPosition = 0
        this.rowFrame = 0
    }

    /**
     * Gets the frame coordinates according to parameters
     * @param {number} positionFrame - position frame required
     * @returns {array} frameCoordinates - list with coordinates 
     */
    getFrameCoordinates (positionFrame) {
        return [(positionFrame - this.rowFrame ) * this.widthSprite, this.heightSprite * this.currentRowPosition]
    }

    /**
     * Shows the character
     */
    show () {
        const frameCoordinates = this.getFrameCoordinates(this.currentFrame)

        image(this.image, this.x, this.y, this.characterWidth, this.characterHeight,
            frameCoordinates[0], frameCoordinates[1], this.widthSprite, this.heightSprite)

        this.animate()
    }

    /**
     * Animates the character
     */
    animate () {
        this.currentFrame++

        if (this.currentFrame % this.spritePerRow === 0) {
            this.rowFrame = this.currentFrame 
            this.currentRowPosition++
        }

        if (this.currentFrame >= this.spriteLength) {
            this.currentFrame = 0
            this.currentRowPosition = 0
            this.rowFrame = 0
        }
    }
}