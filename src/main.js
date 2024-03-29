"use strict";

function buildDom(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}


function main() {
  var game; // instance of the Game
  var splashScreen; // Start Screen
  var gameOverScreen; // Game Over Screen

  var introductionSound = new Audio("../sounds/StarWars.mp3");


  // -- splash screen

  function createSplashScreen() {

    splashScreen = buildDom(`

    <main class="container1">
      <section class="title">
        <h2>Battle Space</h2>
      </section>
        <section class="player-class">
            <div class="players" id="player1">
                <img src="./images/DarthVader.jpg" alt="Image Player"></img>
                <h4>Darth Vader</h4>
                <button id="btn-player1">Select</button>
            </div>
            <audio id = "intro" src="../sounds/StarWars.mp3" preload="auto" autoplay loop></audio>

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


    var startButton = splashScreen.querySelector("#btn-player1");
    startButton.addEventListener("click", function() {
      introductionSound.pause();
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
      <main class ="game-over">
        
        <h2 class = "title-over">Your score: <span></span></h2>
        <button class = "btn-over">Restart</button>
    </main>
    `);

    var button = gameOverScreen.querySelector("button");
    button.addEventListener("click", startGame);

    var span = gameOverScreen.querySelector("span");
    span.innerText = score;

    document.body.appendChild(gameOverScreen);
  }

  function removeGameOverScreen() {
    if (gameOverScreen) {
      gameOverScreen.remove();
    }
  }

  // -- Setting the game state

  function playSound() {
    setTimeout(function(){
      introductionSound.play()
    },1000);
  }

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

window.addEventListener("load", main);
