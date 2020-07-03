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
    constructor (image, characterWidth, characterHeight, x, variationY, widthSprite, heightSprite, spritePerRow, spriteLength) {
        super(image, characterWidth, characterHeight, x, variationY, widthSprite, heightSprite, spritePerRow, spriteLength)
        
        this.variationY = variationY
        this.yInitial = height - characterHeight - variationY
        this.y = this.yInitial
        this.numberJump = 0
        this.limitJumps = 2
        this.jumpSpeed = 0
        this.gravity = 6
        this.heightJump = -50
        this.invencible = false
    }

    /**
     * Jumps the hero
     */
    jump () {
        if (this.numberJump < this.limitJumps) {
            this.jumpSpeed = this.heightJump
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
     * Verifies if hero is invencible
     */
    becameInvencible () {
        this.invencible = true

        setTimeout(() => {
            this.invencible = false
        }, 1000)
    }

    /**
     * Verifies if hero is clashing with enemy
     * @returns {boolean} is clashing
     */
    isClashing (enemy) {
        if (this.invencible) {
            return
        }

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