/**
 * Class representing a scenario
 */
class Scenario {

    /**
     * Creates a scenario
     * @param {string} image - the image value
     * @param {number} speed - the speed value
     */
    constructor (image, speed) {
      this.image = image
      this.speed = speed
      this.x1 = 0
      this.x2 = width
    }
  
    /**
     * Shows the scenario
     */
    show () {
      image(this.image, this.x1, 0, width, height)
      image(this.image, this.x2, 0, width, height)
    }
  
    /**
     * Moves the scenario
     */
    move () {
      this.x1 = this.x1 - this.speed
      this.x2 = this.x2 - this.speed
      
      if (this.x1 < -width) {
        this.x1 = width
      }
  
      if (this.x2 < -width) {
        this.x2 = width
      }
    }
}