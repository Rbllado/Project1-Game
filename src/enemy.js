'use strict';

function Enemy(canvas, x, speed) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.size = 40;
  this.x = x;
  // Creo que no esta bien, le he puesto a groso modo.
  this.y = 20;
  this.speed = speed;
  this.img = new Image(); // Create new <img> element
  this.imgSrc = "../images/nave2Starwars.jpg"; // Set source path
 
}

Enemy.prototype.draw = function() {
  // this.ctx.fillStyle = '#FF6F27';
  // fillRect(x, y, width, height)
  // this.ctx.fillRect(this.x, this.y, this.size, this.size);

  this.img.src = this.imgSrc;
  
  // Render the image on the canvas
  this.ctx.drawImage(this.img,  this.x, this.y, this.size, this.size);
};

Enemy.prototype.updatePosition = function() {
  // Enemies are working well now.
  this.y = this.y + this.speed;
};

Enemy.prototype.isInsideScreen = function() {
  return this.y - this.size / 2 < this.canvas.height ;
};


Enemy.prototype.outScreen = function(){
  return (this.y  > this.canvas.height);
}

Enemy.prototype.explosion = function(x, y, size){
  console.log("Boom", Math.floor(x), y, size);
  var x = Math.floor(x);
  console.log(x);
  
  let img = new Image(); // Create new <img> element
  img.src = "../images/explosion.jpg"; // Set source path
  // Render the image on the canvas
  this.ctx.drawImage(img, x, y, size, size);
  console.log("image");
  
}
  
  