function Bullet(canvas, playerX, playerY, speed) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.x = playerX;
  this.y = playerY;
  this.size = 30;
  this.speed = speed;
}

Bullet.prototype.handleScreenCollision = function() {
  this.y = this.y + this.direction * this.speed;
  var screenTop = 0;
  var screenBottom = this.canvas.height;

  if (this.y > screenBottom) this.direction = -1;
  else if (this.y < screenTop) this.direction = 1;
};

Bullet.prototype.draw = function() {
  // this.ctx.fillStyle = "#blue";
  // this.ctx.fillRect(this.x, this.y, this.size, this.size);

  let img = new Image(); // Create new <img> element
  img.src = "./images/sword2.png"; // Set source path
  
  // Render the image on the canvas
  this.ctx.drawImage(img, this.x, this.y, this.size, this.size);
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

  var yShot = enemy.x < this.x && this.x < enemy.x + enemy.size;
  var xShot = enemy.y < this.y && enemy.y + enemy.size > this.y;

  var test = this.x  < enemy.x && this.x +this.size > enemy.x;
  var test2 = this.y < enemy.y && this.y + this.size > enemy.y;
  
  return (xShot && yShot) || (test && test2);

};
