'use strict';

function Enemy(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.size = 20;
  this.x = x;
  // Creo que no esta bien, le he puesto a groso modo.
  this.y = 20;
  this.speed = speed;
}

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = '#FF6F27';
  // fillRect(x, y, width, height)
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Enemy.prototype.updatePosition = function() {
  // creo que ahora va para abajo los enemigos
  this.y = this.y + this.speed;
};

Enemy.prototype.isInsideScreen = function() {
  // if y plus half of its size is smaller then 0 return
  //Verificar que funciona esta condicion
  return this.y + this.size / 2 > 0;
};
