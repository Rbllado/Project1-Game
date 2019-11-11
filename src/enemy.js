"use strict";

class Enemy {
  constructor(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 40;
    this.x = x;
    // Creo que no esta bien, le he puesto a groso modo.
    this.y = 20;
    this.speed = speed;
    this.img = new Image(); // Create new <img> element
    this.imgSrc = "../images/nave2Starwars.jpg"; // Set source path
  }

  draw() {
    this.img.src = this.imgSrc;
    // Render the image on the canvas
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  updatePosition() {
    this.y = this.y + this.speed;
  }

  isInsideScreen() {
    return this.y - this.size / 2 < this.canvas.height;
  }

  outScreen() {
    return this.y > this.canvas.height;
  }

  explosion(x, y, size) {
    let img = new Image(); // Create new <img> element
    img.src = "../images/explosion.jpg"; // Set source path
    // Render the image on the canvas
    this.ctx.drawImage(img, x, y, size, size);
  }
}
