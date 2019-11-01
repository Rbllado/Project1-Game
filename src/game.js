const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const img = document.createElement('img');

window.addEventListener('load', () => {
  canvas.height = window.innerHeight - 2;
  canvas.width = window.innerWidth - 2;
  canvas.style.position = 'absolute'; // Removes the unwanted overflow scroll - canvas bug

  img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
  img.onload = function() {
    updateCanvas();
  };
});

let ghost = {
  x: 25,
  y: 25,
  moveUp: function() {
    this.y -= 4;
  },
  moveDown: function() {
    this.y += 4;
  },
  moveLeft: function() {
    this.x -= 4;
  },
  moveRight: function() {
    this.x += 4;
  },
};

document.addEventListener('keydown', function(e) {
  console.log(e);
  
  switch (e.keyCode) {
    case 38: // Up
      ghost.moveUp(); //  Updates the position of the ghost
      console.log('up');
      break;

    case 40: // Down
      ghost.moveDown(); //  Updates the position of the ghost
      console.log('down');
      break;

    case 37: // Left
      ghost.moveLeft(); //  Updates the position of the ghost
      console.log('left');
      break;

    case 39: // Right
      ghost.moveRight(); //  Updates the position of the ghost
      console.log('right');
      break;
    case 32: //space boton
      ghost.x = 25;
      ghost.y = 25;
      break;

    default:
      break;
  }

  updateCanvas();
});

function updateCanvas() {
  console.log('IN LOOP')
  
  // clear the canvas before new (update) rendering
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'white';
  context.font = '18px serif';
  
  
  // fillText( text, posX, posY, maxWidth)
  context.fillText('Ghost x: ' + ghost.x, canvas.width - 100, 40);
  context.fillText('Ghost y: ' + ghost.y, canvas.width - 100, 60);

  // then draw the new ghost
  draw(ghost);
}

function draw(ghost) {
  context.drawImage(img, ghost.x, ghost.y, 50, 50);
}

// Initial rendering of the ghost and the score
