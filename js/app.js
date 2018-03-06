// Enemies our player must avoid
var Enemy = function(x, y, speed) {
// The x and y direction aswell as the speed of the enimies is defined
    this.sprite = 'images/enemy-bug.png';
// Image of the enemy is added
    this.x = x;
    this.y = y;
    this.speed = speed;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// The x directoin of the enemy  is defined by multiplying the speed with dt
    this.x += this.speed * dt;
// The game runs at the same speed for all computers.
// The position of the enemy is reset once it reaches the end of the canvas
    if (this.x > 550) {
        this.x = -100;
// The speed of the enemy is then randomized
        this.speed = 100 + Math.floor(Math.random() * 250);
    };
// Checks for collion between player and enemies
    if (player.x < this.x + 70 &&
        player.x + 40 > this.x &&
        player.y < this.y + 25 &&
        35 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
    };
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// All enermies are placed in an array
var allEnemies = [];
// Location of the 3 Enemies on the canvas
var enemyLocation = [63, 147, 230];
// Each enemy that is locatated on the Y axis from 0 the speed on the x axis is 250
enemyLocation.forEach(function (yPostion) {
    enemy = new Enemy(0, yPostion, 250);
    allEnemies.push(enemy);
});
// Player class is created which has an update(), render() and a handleInput() method.
var Player = function (x, y){
// Variables for the player to move along x and y axis
    this.x = x;
    this.y = y;
// The player character is defined
    this.character = 'images/char-boy.png';
};
// The starting location of the player is at x=200, y=400
var player = new Player (200,400);

Player.prototype.update = function(dt) {

};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.character), this.x, this.y);
};
// User can use the arrow keys to dictate the players directions
Player.prototype.handleInput = function(keyPress){
// User can move left on x axis by 100
  if (keyPress == 'left' && this.x > 0){
      this.x -= 100;
  };
// User can move right on x axis by 100, user also can not go of the game tiles at the right side
  if (keyPress == 'right' && this.x < 400){
      this.x += 100;
  };
// User can move up on y axis by 90
  if (keyPress == 'up' && this.y > 0){
      this.y -= 90;
  };
// User can move down on y axis by 90, user also can not go of the game tiles at the bottom
  if (keyPress == 'down' && this.y < 400){
      this.y += 90;
  };
// Once user reaches the top of the page, player gets reset to x=200 y=400 after some time delay
  if (this.y < 0) {
        setTimeout(() => {
            this.x = 200;
            this.y = 400;
        }, 1000);
      };
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
