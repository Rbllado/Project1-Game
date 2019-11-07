# Battle Space

## Description

Shot play is a game where the are a player can move right and left at the bottom of the game. The enemies will come from the top of the screen in differents speeds. If the enemey cross the line of the player three times or crash with the player the game will be over. The player can shoot bullets to attack the enemies.

## MVP (DOM - CANVAS)

CANVAS, This is a game where the player can move player and shoot.

## Backlog

· Lives
· Speed Movement player
· Shooting bullet
· Bonus --> add object into the game.

## Data structure

### main.js

```javascript
buildSplashScreen(){
}

buildGameScreen(){
}

buildGameOverScreen(){
}
```
### game.js

```javascript
Game(){
  this.canvas;
}

Game.prototype.startLoop(){
}

Game.prototype.checkCollisions(){
}

Game.prototype.bullet(){
}

Game.prototype.inverse(){
}

Game.prototype.clearCanvas = function(){
}

Game.prototype.updateCanvas = function(){
}

Game.prototype.drawCanvas = function(){ 
}

Game.prototype.setGameOver = function(){
}
```
### Player.js

```javascript

player(){
  this.canvas;
  this.x;
  this.y;
  this.size;
  this.direction;
  this.speed;
}

player.prototype.draw{
}

Character.prototype.setDirection(){
}

Character.prototype.rush(){
}
```


## States y States Transitions
  - splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
  - starGame()
  - create new Game()
  - game.start()
  
  
  - gameOver()
  - buildGameOver()
  - addEventListener(startGame) 


  ## Task
  ```javascript
    Main - buildDom
    Main - buildSplashScreen
    Main - addEventListener
    Main - buildGameScreen
    Main - buildGameOverScreen
    Game - buildCanvas
    Game - clearCanvas
    Game - updateCanvas
    Game - drawCanvas
    Game - setGameOver
    Game - collision
    Game - addEventListener
    Player - bullet 
    Player - Speed
    Player- setDirection
    Player -  Inverse
    Enemy - draw
    Enemy - updatePosition
    Enemy - insideScreen
    Enermy - OutOfScreen
    ```

    ## Links
  
  ### Trello
  
  https://trello.com/b/3Mwm5Ewc/project1
  
  ###  Git
  URls for the project repo and deploy [Link Repo](https://github.com/Rbllado/Project1-Game) [link Deploy](https://rbllado.github.io/Project1-Game/) 

  ### Slides
  URls for the project presentation (slides) [Link Slides.com](https://docs.google.com/presentation/d/1RE1qeJk4JLlrR4Z3FKMXwW24MKivENJ31IjLCWa_jRM/edit#slide=id.p)