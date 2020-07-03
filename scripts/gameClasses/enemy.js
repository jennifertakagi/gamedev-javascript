/**
 * Class representing a enemy
 */
class Enemy extends Character {

    /**
     * Creates a enemy
     * @param {string} image - the character's image
     * @param {number} characterWidth - the character's width
     * @param {number} characterHeight - the character's height
     * @param {number} x - the character's position on x
     * @param {number} widthSprite - the sprite's width
     * @param {number} heightSprite - the sprite's height
     * @param {number} spritePerRow - the sprites per row
     * @param {number} spriteLength - the sprite's length (total sprite)
     */
    constructor (image, characterWidth, characterHeight, x, variationY, widthSprite, heightSprite, speed, delay, spritePerRow, spriteLength) {
        super(image, characterWidth, characterHeight, x, variationY, widthSprite, heightSprite, spritePerRow, spriteLength)

        this.speed = speed
        this.delay = delay
        this.x = width + this.delay
    }

    /**
     * Moves the enemy
     */
    move () {
        this.x = this.x < -this.characterWidth - this.delay ? width : this.x - this.speed
    }
}