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
  // Enemies are working well now.
  this.y = this.y + this.speed;
};

Enemy.prototype.isInsideScreen = function() {
  
  //It is not working well, start to say out in the first one outside  but if I type result to return it is not working.

  // var result = this.y - this.size/2 > this.canvas.height;
  // if(result){
  //   console.log("out");
  // }
  // if(!(this.y - this.size / 2 < this.canvas.height)){
    
  // }
  
  return this.y - this.size / 2 < this.canvas.height;
};



// Enemy.prototype.outScreen = function(){
//   if(!(this.y - this.size / 2 < this.canvas.height)){ 
//     console.log("out");
//     return true;
//   }else{
//     return false;
//   }
// }

Enemy.prototype.outScreen = function(){
  console.log("hola..");
    return !(this.y - this.size / 2 < this.canvas.height);
    
    }
  
  