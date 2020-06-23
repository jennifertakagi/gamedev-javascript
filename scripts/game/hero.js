/**
 * Class representing a hero
 */
class Hero extends Character {

    /**
     * Creates a hero
     * @param {string} image - the character's image
     * @param {number} characterWidth - the character's width
     * @param {number} characterHeight - the character's height
     * @param {number} x - the character's position on x
     * @param {number} widthSprite - the sprite's width
     * @param {number} heightSprite - the sprite's height
     * @param {number} spritePerRow - the sprites per row
     * @param {number} spriteLength - the sprite's length (total sprite)
     */
    constructor (image, characterWidth, characterHeight, x, widthSprite, heightSprite, spritePerRow, spriteLength) {
        super(image, characterWidth, characterHeight, x, widthSprite, heightSprite, spritePerRow, spriteLength)
        
        this.yInitial = height - characterHeight
        this.y = this.yInitial
        this.numberJump = 0
        this.limitJumps = 2
        this.jumpSpeed = 0
        this.gravity = 3
    }

    /**
     * Jumps the hero
     */
    jump () {
        if (this.numberJump < this.limitJumps) {
            this.jumpSpeed = -30
            this.numberJump++
        }
    }

    /**
     * Applies gravity on the hero
     */
    applyGravity () {
        this.y = this.y + this.jumpSpeed
        this.jumpSpeed = this.jumpSpeed + this.gravity

        if (this.y > this.yInitial) {
            this.y = this.yInitial
            this.numberJump = 0
        }
    }

    /**
     * Verifies if hero is clashing with enemy
     * @returns {boolean} is clashing
     */
    isClashing () {
        const accurancy = 0.7

        return collideRectRect(
            this.x,
            this.y,
            this.characterWidth * accurancy,
            this.characterHeight * accurancy,
            enemy.x,
            enemy.y,
            enemy.characterWidth * accurancy,
            enemy.characterHeight * accurancy
        )
    }
}