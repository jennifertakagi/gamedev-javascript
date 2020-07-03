/**
 * Class representing a life
 */
class Life {

    /**
     * Creates a life
     */
    constructor (total, initial) {
        this.total = total
        this.initial = initial
        this.lifes = this.initial

        this.width = 25
        this.height = 25
        this.xInitial = 20
        this.y = 20
    }

    /**
     * Shows the life
     */
    show () {
        for (let i = 0; i < this.lifes; i++) {
            const margin = i * 10
            const position = this.xInitial * (i + 1)

            image(lifeImage, position + margin, this.y, this.width, this.height)
        }
    }

    /**
     * Gains the life
     */
    gainLife () {
        if (this.lifes <= this.total) {
            this.lifes++
        }
    }

    /**
     * Lose the life
     */
    loseLife () {
        this.lifes--
    }
}