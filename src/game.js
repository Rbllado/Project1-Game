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
  this.explosionSound = new Audio("../sounds/Grenade.wav");
  this.shotSound = new Audio("../sounds/shot.wav");
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
  this.player = new Player(this.canvas, 1000);

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
  console.log("Bullet");
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
    // We create random enemies into the game
    // if (this.score < 500) {
    //   if (Math.random() > 0.99) {
    //     var randomX = this.canvas.height * Math.random();
    //     var newEnemy = new Enemy(this.canvas, randomX, 2);
    //     this.enemies.push(newEnemy);
    //   }
    // } else if (this.score > 500) {
    //   if (Math.random() > 0.9) {
    //     var randomX = this.canvas.height * Math.random();
    //     var newEnemy = new Enemy(this.canvas, randomX, 20);
    //     this.enemies.push(newEnemy);
    //   }
    // }

    this.levels();

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
      item.explosion(200, 200, 40, 40);
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

Game.prototype.levels = function() {
  
  var randomX = 0;
  var newEnemy;
  // Is all time in the loop and crash the screen
  if (this.score < 1000) {
    if (Math.random() > 0.99) {
      var randomX = this.canvas.height * Math.random();
      var newEnemy = new Enemy(this.canvas, randomX, 2);
      this.enemies.push(newEnemy);
    }
  } else if (this.score < 3000) {
    if (Math.random() > 0.97) {
      var randomX = this.canvas.height * Math.random();
      var newEnemy = new Enemy(this.canvas, randomX, 4);
      this.enemies.push(newEnemy);
    }
  }else{
    if (Math.random() > 0.9) {
      var randomX = this.canvas.height * Math.random();
      var newEnemy = new Enemy(this.canvas, randomX, 10);
      this.enemies.push(newEnemy);
    }
  }
};

//Check collision with player
Game.prototype.checkCollisions = function() {
  this.enemies.forEach(function(enemy) {
    if (this.player.didCollide(enemy) || enemy.outScreen()) {
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
        this.explosionSound.pause();
        this.explosionSound.currentTime = 0;
        this.explosionSound.play();
        this.explosionSound.volume = 0.1;
        // enemy.explosion(enemy.x, enemy.y, enemy.size);

        // Move the enemy and the bullet off screen to the left
        enemy.y = this.canvas.height + enemy.size;
        bull.y = this.canvas.height + enemy.size;
      }
    }, this);
  }, this);
};

Game.prototype.updateGameStats = function() {
  this.score += 1;
  this.livesElement.innerHTML = this.player.lives;
  this.scoreElement.innerHTML = this.score;
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
