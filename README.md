# Shot Play

## Description

Shot play is a game where the are two players into the game. One player will be Computer Player and the other one is going to be the user. The computer player can move in four directions and the movement is random. This computer player is shooting in 4 directions as well. The user is driving the player and can be moved in four directions. User player can shoot a bullet in one direction.

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
    ComputerPlayer - updatePosition
    ComputerPlayer - isInsideScreen
    ComputerPlayer - ???? bullet also?
    ```

    ## Links
  
  ### Trello
  
  https://trello.com/b/3Mwm5Ewc/project1
  
  ###  Git
  URls for the project repo and deploy Link Repo Link Deploy

  ### Slides
  URls for the project presentation (slides) Link Slides.com 