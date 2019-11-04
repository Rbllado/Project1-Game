function Bullet(canvas, playerX, playerY, speed) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.x = playerX;
  this.y = playerY;
  this.size = 10;
  this.speed = speed;
}

Bullet.prototype.handleScreenCollision = function() {
  this.y = this.y + this.direction * this.speed;
  var screenTop = 0;
  var screenBottom = this.canvas.height;

  if (this.y > screenBottom) this.direction = -1;
  else if (this.y < screenTop) this.direction = 1;
};

Bullet.prototype.draw = function(){
    this.ctx.fillStyle = "#FF6F27";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Bullet.prototype.updatePosition = function() {
  // Enemies are working well now.
  this.y = this.y - this.speed;
};

Bullet.prototype.isInsideScreen = function() {
  return this.y - this.size / 2 < this.canvas.height;
};

Bullet.prototype.didCollide = function(enemy) {
  //check the collision with the computerPlayer

  var playerLeft = this.x;
  var playerRight = this.x + this.size;
  var playerTop = this.y;
  var playerBottom = this.y + this.size;

  var enemyLeft = enemy.x;
  var enemyRight = enemy.x + enemy.size;
  var enemyTop = enemy.y;
  var enemyBottom = enemy.y + enemy.size;

  var crossRight = enemyLeft <= playerRight && enemyLeft >= playerLeft;
  var crossLeft = enemyRight >= playerLeft && enemyRight <= playerRight;
  var crossTop = enemyBottom >= playerTop && enemyBottom <= playerBottom;
  var crossBottom = enemyTop <= playerBottom && enemyTop >= playerTop;

  if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
    return true;
  }
  return false;
};
