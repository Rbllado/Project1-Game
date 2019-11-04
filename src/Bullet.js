function Bullet(canvas, playerX, playerY, speed) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.x = playerX;
  this.size = 5;
  this.y = playerY;
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
