"use strict";

function Game() {
  this.canvas = null;
  this.ctx = null;
  this.enemies = [];
  this.bullets = [];

  this.player = null;
  this.gameIsOver = false;
  this.gameScreen = null;
  this.score = 0;
  this.explosionSound = new Audio("./sounds/Grenade.wav");
  this.shotSound = new Audio("./sounds/shot.wav");
  this.explosion = "./images/explosion.jpg";
  this.countLoop =0;
  this.timeInterval = null;
  // this.explosion.src = "../images/explosion.jpg"; // Set source path
}

var that = this;
var isDie = false;

Game.prototype.start = function() {
  // Save reference to canvas and its container. Create ctx
  this.canvasContainer = document.querySelector(".canvas-container");
  this.canvas = this.gameScreen.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");

  // Save reference to the score and lives elements

  this.livesElement = this.gameScreen.querySelector(".lives .value");
  this.scoreElement = this.gameScreen.querySelector(".score .value");

  // Set the canvas dimensions to match the parent `.canvas-container`

  this.containerWidth = this.canvasContainer.offsetWidth;
  this.containerHeight = this.canvasContainer.offsetHeight;
  this.canvas.setAttribute("width", this.containerWidth);
  this.canvas.setAttribute("height", this.containerHeight);

  // Create a new player for the current game
  this.player = new Player(this.canvas, 10);

  //Our player is moving left and right in the bottom of the canvas site.
  this.handleKeyDown = function(event) {
    if (event.key === "ArrowLeft") {
      this.player.setDirection("left");
    } else if (event.key === "ArrowRight") {
      this.player.setDirection("right");
    } else if (event.which === 32) {
      this.bullet();
      this.shotSound.pause();
      this.shotSound.currentTime = 0;
      this.shotSound.volume = 0.1;
      this.shotSound.play();
    }
  };

  // Any function provided to eventListener
  // is always called by window (this === window)!
  // So, we have to bind `this` to the `game` object,
  // to prevent it from pointing to the `window` object
  document.body.addEventListener("keydown", this.handleKeyDown.bind(this));

  // Start the canvas requestAnimationFrame loop
  this.startLoop();
};

// Function to create a bullets
Game.prototype.bullet = function() {
  var newBullet = new Bullet(
    this.canvas,
    this.player.x + this.player.size / 2,
    this.player.y,
    3
  );

  this.bullets.push(newBullet);
};

Game.prototype.startLoop = function() {
  var loop = function() {
    // 1. UPDATE THE STATE OF PLAYER

    //The enemies are going to come in diferent speeds and random depending the
    this.levels(this.player);

    // 2. Check if player had hit any enemy (check with enemy) // Check if bullet is collision with enemies
    this.checkCollisions();

    this.checkCollisionBullet();

    // 3. Check if players is going off the screen

    this.player.handleScreenCollision();

    // 4. Move existing enemies and bullets //5. Check if any enemy is going of the screen

    this.enemies = this.enemies.filter(function(enemy) {
      enemy.updatePosition();
      return enemy.isInsideScreen();
    });

    this.bullets = this.bullets.filter(function(tiro) {
      tiro.updatePosition();
      return tiro.isInsideScreen();
    });

    // 2. CLEAR THE CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 3. UPDATE THE CANVAS
    // Draw the player // Draw the enemies // Draw Bullet
    this.player.draw();

    this.bullets.forEach(function(bull) {
      bull.draw();
    });

    this.enemies.forEach(function(item) {
      item.draw();
    });

    // 4. TERMINATE LOOP IF GAME IS OVER
    if (!this.gameIsOver) {
      window.requestAnimationFrame(loop);
    }
    //  5. Update Game data/stats
    this.updateGameStats();
  }.bind(this);

  // As loop function will be continuously invoked by
  // the `window` object- `window.requestAnimationFrame(loop)`
  // we have to bind the function so that value of `this` is
  // pointing to the `game` object, like this:
  // var loop = (function(){}).bind(this);

  window.requestAnimationFrame(loop);
};

Game.prototype.levels = function(player) {
  var randomX = 0;
  var newEnemy;
  // Is all time in the loop and crash the screen
  if (this.score < 30) {
    if (Math.random() > 0.99) {
      var randomX = this.canvas.height * Math.random();
      var newEnemy = new Enemy(this.canvas, randomX, 2);
      this.enemies.push(newEnemy);
      player.speed = 5;
    }
  } else if (this.score < 60) {
    if (Math.random() > 0.97) {
      var randomX = this.canvas.height * Math.random();
      var newEnemy = new Enemy(this.canvas, randomX, 4);
      this.enemies.push(newEnemy);
      player.speed = 8;
    }
  } else {
    if (Math.random() > 0.95) {
      var randomX = this.canvas.height * Math.random();
      var newEnemy = new Enemy(this.canvas, randomX, 8);
      this.enemies.push(newEnemy);
      player.speed = 14;
    }
  }
};

//Check collision with player
Game.prototype.checkCollisions = function() {
  this.enemies.forEach(function(enemy) {
    if (this.player.didCollide(enemy) || enemy.outScreen()) {

      console.log("remove life");
      
      this.player.removeLife();
      // Move the enemy off screen to the left
      enemy.y = this.canvas.height + enemy.size;

      if (this.player.lives === 0) {
        this.gameOver();
      }
    }
  }, this);
};

// This one is checking if the bullet hits an enemy
Game.prototype.checkCollisionBullet = function() {
  this.bullets.forEach(function(bull) {
    this.enemies.forEach(function(enemy) {
      if (bull.didCollide(enemy)) {
        
        // this.ctx.drawImage(this.explosion, Math.floor(enemy.x), enemy.y, enemy.size, enemy.size);
        enemy.imgSrc = this.explosion;
        

        this.explosionSound.pause();
        this.explosionSound.currentTime = 0;
        this.explosionSound.play();
        this.explosionSound.volume = 0.1;

        // this.removeEnemy(enemy, bull);
          
        this.timeInterval = setTimeout(() => {
          this.removeEnemy(enemy, bull)
        }, 100);

        // Move the enemy and the bullet off screen to the left
      }
    }, this);
  }, this);
};

Game.prototype.removeEnemy = function(enemy, bull) {
  // enemy.y = this.canvas.height + enemy.size;
  bull.y = this.canvas.height + enemy.size;
  // enemy.y = 1 - this.canvas.height;
  // enemy.y = 1 - this.canvas.height;
  enemy.x = 0;
  enemy.y = 0 - this.canvas.height;
  enemy.speed = 0;
}; 


Game.prototype.gameOver = function() {
  this.gameIsOver = true;
  
  // Call the gameOver function from `main` to show the Game Over Screen
  this.onGameOverCallback();
};

Game.prototype.removeGameScreen = function() {
  this.gameScreen.remove();
};

Game.prototype.passGameOverCallback = function(callback) {
  this.onGameOverCallback = callback;
};

Game.prototype.updateGameStats = function() {
  this.countLoop ++;

  if(this.countLoop % 60 ===0){
    Math.floor(this.countLoop/60)
  }
  this.score = Math.floor(this.countLoop/60);
  this.livesElement.innerHTML = this.player.lives;
  this.scoreElement.innerHTML = this.score;
};

// Game.prototype.timeCheck(){

// this.countLoop ++;

// if(this.countLoop % 60 ===0){
//   this.score = Math.floor(this.countLoop/60);

//   //ñadir en el html
//   this.timerElement.innerHTML = this.score + " seconds";
// }
  
// }