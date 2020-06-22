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
      this.matrix = [
        [0, 0],
        [220, 0],
        [440, 0],
        [660, 0],
        [0, 270],
        [220, 270],
        [440, 270],
        [660, 270],
        [0, 540],
        [220, 540],
        [440, 540],
        [660, 540],
        [0, 810],
        [220, 810],
        [440, 810],
        [660, 810]
      ]
      this.currentFrame = 0
    }
  
    /**
     * Shows the character
     */
    show () {
        const xCoordinate = this.matrix[this.currentFrame][0]
        const yCoordinate = this.matrix[this.currentFrame][1]

        image(
            this.image, 
            0, 
            height - this.characterHeight, 
            110, 
            this.characterHeight, 
            xCoordinate, 
            yCoordinate, 
            220, 
            270
        )

        this.animate()
    }

    /**
     * Animates the character
     */
    animate () {
        this.currentFrame++

        if (this.currentFrame >= this.matrix.length -1) {
            this.currentFrame = 0
        }
    }
}