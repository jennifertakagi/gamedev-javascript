/**
 * Class representing a game
 */
class Game {

    /**
     * Creates a game
     */
    constructor () {
        this.initialScreen
        this.scenario
        this.score
        this.hero
        this.actualEnemy = 0
    }

    /**
     * Sets up the game
     */
    setup () {
        this.scenario = new Scenario(scenarioImage, 3)
        this.score = new Score()
        this.hero = new Hero(heroImage, 110, 135, 0, 30, 220, 270, 4, 15)

        const droplet = new Enemy(dropletImage, 52, 52, width - 50, 30, 104, 100, 10, 100, 4, 27)
        const troll = new Enemy(trollImage, 200, 200, width * 2, 0, 400, 400, 15, 100, 5, 28)
        const flyerDroplet = new Enemy(flyerDropletImage, 80, 80, width - 52, 200, 200, 150, 10, 100, 3, 15)

        enemies.push(droplet, troll, flyerDroplet)
    }

    /**
     * Identifies the key pressed and the action
     */
    keyPressed (key) {
        if (key === 'ArrowUp') {
            this.hero.jump()
            jumpSound.play()
        }
    }

    /**
     * Draws the game
     */
    draw () {
        this.scenario.show()
        this.scenario.move()
    
        this.score.show()
    
        this.hero.show()
        this.hero.applyGravity()
    
        const enemy = enemies[this.actualEnemy]
        const isEnemyVisible = enemy.x < -enemy.characterWidth 
    
        enemy.show()
        enemy.move()
    
        if (isEnemyVisible) {
            this.actualEnemy = this.actualEnemy < enemies.length - 1  ? this.actualEnemy + 1 : 0
            enemy.speed = parseInt(random(10, 30))
        }
    
        this.hero.isClashing(enemy) ? actionsGameOver() : this.score.addScore()
    }
}