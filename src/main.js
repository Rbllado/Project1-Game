// console.log("hola");


// // Checkear si va a ser con getElementById o querySelector
// var btnPlayer1 = document.getElementById('btn-player1')
// var btnPlayer2 = document.getElementById('btn-player2')
// var btnPlayer3 = document.getElementById('btn-player3')
// var btnPlayer4 = document.getElementById('btn-player4')

// btnPlayer1.onclick = function(){
//     // Aqui va a cargar la pagina web del juego con el jugador seleccionado
//     console.log("Boton 1 apretado");   
    
// }

// btnPlayer2.onclick = function(){
//     // Aqui va a cargar la pagina web del juego con el jugador seleccionado
//     console.log("Boton 2 apretado");   
// }

// btnPlayer3.onclick = function(){
//     // Aqui va a cargar la pagina web del juego con el jugador seleccionado
//     console.log("Boton 3 apretado");   
// }

// btnPlayer4.onclick = function(){
//     // Aqui va a cargar la pagina web del juego con el jugador seleccionado
//     console.log("Boton 4 apretado");
// }


// // button.onclick = function(){
//     //     console.log("Add a button");

//     // }

'use strict';

function buildDom(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.children[0];
}

function main() {
  var game; // instance of the Game
  var splashScreen; // Start Screen
  var gameOverScreen; // Game Over Screen

  // -- splash screen

  function createSplashScreen() {
    splashScreen = buildDom(`

    <main class="container">
        <section class="title">
            <h2>Project Game</h2>
        </section>
        <section class="player-class">
            <div class="players" id="player1">
                <img src="./images/brucelee.jpg" alt="Image Player"></img>
                <h4>Bruce</h4>
                <button id="btn-player1">Select</button>
            </div>

            <!-- <div class="players">
                <img src="" alt="Image Player"></img>
                <h4>Name</h4>
                <button id="btn-player2">Select</button>
            </div>

            <div class="players">
                <img src="" alt="Image Player"></img>
                <h4>Name</h4>
                <button id="btn-player3">Select</button>
            </div>

            <div class="players">
                <img src="" alt="Image Player"></img>
                <h4>Name</h4>
                <button id="btn-player4">Select</button>
            </div> -->

        </section>
    </main>
  `);

    document.body.appendChild(splashScreen);

    var startButton = splashScreen.querySelector('#btn-player1');
    startButton.addEventListener('click', function() {
      startGame();
    });
  }

  function removeSplashScreen() {
    splashScreen.remove();
  }



  // -- game screen

  function createGameScreen() {
    var gameScreen = buildDom(`
    <main class="game container">
      <header>
        <div class="lives">
          <span class="label">Lives:</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
        </div>
      </header>
      <div class="canvas-container">
        <canvas></canvas>
      </div>
    </main>
  `);

    document.body.appendChild(gameScreen);
    return gameScreen;
  }

  function removeGameScreen() {
    game.removeGameScreen();
  }

  // -- game over screen

  function createGameOverScreen(score) {
    gameOverScreen = buildDom(`
      <main>
        <h1>Game over</h1>
        <p>Your score: <span></span></p>
        <button>Restart</button>
    </main>
    `);

    var button = gameOverScreen.querySelector('button');
    button.addEventListener('click', startGame);

    var span = gameOverScreen.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverScreen);
  }

  function removeGameOverScreen() {
    if (gameOverScreen) {
      gameOverScreen.remove();
    }
  }



  // -- Setting the game state

  function startGame() {
    removeSplashScreen();
    // later we need to add clearing of the gameOverScreen
    removeGameOverScreen();

    game = new Game();
    game.gameScreen = createGameScreen();

    game.start();
    // End the game
    game.passGameOverCallback(function() {
      gameOver(game.score);
    });
  }

  function gameOver(score) {
    removeGameScreen();
    createGameOverScreen(score);
  }

  // -- initialize Splash screen on initial start

  createSplashScreen();
}

window.addEventListener('load', main);