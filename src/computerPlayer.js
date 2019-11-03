'use strict';

function computerPlayer(canvas, lives) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.lives = lives;
  this.size = 150;
//   this.x = 50; --> Random
//   this.y = canvas.height / 2; --> random
  this.direction = 0;
  this.speed = 3;
}

Player.prototype.setDirection = function(direction) {
  // +1 down  -1 up
  //   if (direction === 'up') this.direction = -1;
  //   else if (direction === 'down') this.direction = 1;
    

    // Move Random for the Computer player

};

computerPlayer.prototype.handleScreenCollision = function() {
  this.y = this.y + this.direction * this.speed;
  var screenTop = 0;
  var screenBottom = this.canvas.height;

  if (this.y > screenBottom) this.direction = -1;
  else if (this.y < screenTop) this.direction = 1;
};

Player.prototype.removeLife = function() {
  this.lives -= 1;
};

computerPlayer.prototype.draw = function() {
  this.ctx.fillStyle = '#66D3FA';
  // fillRect(x, y, width, height)
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

computerPlayer.prototype.bullet = function(){}
