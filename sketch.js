var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blastImage

function preload() {
  backgroundImage = loadImage("assets/Track image 2.png");
  car1_img = loadAnimation("assets/Running/runningboy1.png","assets/Running/runningboy2.png","assets/Running/runningboy3.png","assets/Running/runningboy4.png");
  car2_img = loadAnimation("assets/Running2/runningboy1.png","assets/Running2/runningboy2.png","assets/Running2/runningboy3.png","assets/Running2/runningboy4.png");
  track = loadImage("assets/Track image 2.png");
 
  powerCoinImage = loadImage("assets/COIN IMAGE.png");
  obstacle1Image = loadImage("assets/HUDDLE IMAGE.png");
  obstacle2Image = loadImage("assets/HUDDLE IMAGE.png");
  lifeImage = loadImage("assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
