function Bullet(playerX, playerY, speed){
    this.x = playerX;
    this.y = playerY;
    this.speed = speed;
}

Bullet.prototype.handleScreenCollision = function() {
    // 
    this.y = this.y + this.direction * this.speed;
    var screenTop = 0;
    var screenBottom = this.canvas.height;
  
    if (this.y > screenBottom) this.direction = -1;
    else if (this.y < screenTop) this.direction = 1;
  };
  