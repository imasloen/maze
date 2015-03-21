var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
	floor = new Image(),
	player = new Image(),
	walls = new Image();
	
canvas.height = 25*5;
canvas.width = 25*5;

var maze = 
	[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	 [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
	 [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
	 [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	 [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
	 [0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0],
	 [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
	 [0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0],
	 [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	 [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var px = 3, py = 10;
var xoff = 0, yoff = 0;

var currentInput = null;
var nextInput = null;

floor.src = 'images/floor-00.png';
player.src = 'player.png';
walls.src = 'images/wallset.png';

function animate(time) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  if (currentInput === null && nextInput !== null) {
    currentInput = nextInput;
    nextInput = null;
  }
  
  if (currentInput !== null && currentInput()) {
    currentInput = null;
  }
  
  for (var y = 0; y < 7; y++) {
    for (var x = 0; x < 7; x++) {
      var posx = px+x-3, posy = py+y-3;
      if (maze[posy][posx] === 1) {
        var wallIndex = 0;
        if (maze[posy-1][posx] === 1) wallIndex += 1;
        if (maze[posy][posx+1] === 1) wallIndex += 2;
        if (maze[posy+1][posx] === 1) wallIndex += 4;
        if (maze[posy][posx-1] === 1) wallIndex += 8;
        context.drawImage(walls, wallIndex*walls.height, 0, walls.height, walls.height, 
          (x-1)*walls.height + xoff, (y-1)*walls.height + yoff, walls.height, walls.height);
      }
      else context.drawImage(floor, (x-1)*floor.width + xoff, (y-1)*floor.height + yoff);
    }
  }
  
  context.drawImage(player, 2*player.width, 2*player.height);
  
  window.requestNextAnimationFrame(animate);
}

function checkKey(e) {
  switch (e.keyCode) {
    case 37:
      // left
      nextInput = function () {
        if (maze[py][px-1] === 0) {
          xoff+=5;
          if (xoff < 25) return false;
          xoff = 0;
          px--;
        }
        return true;
      }
      break;
    case 38:
      // up
      nextInput = function () {
        if (maze[py-1][px] === 0) {
          yoff+=5;
          if (yoff < 25) return false;
          yoff = 0;
          py--;
        }
        return true;
      }
      break;
    case 39:
      // right
      nextInput = function () {
        if (maze[py][px+1] === 0) {
          xoff-=5;
          if (xoff > -25) return false;
          xoff = 0;
          px++;
        }
        return true;
      }
      break;
    case 40:
      // down
      nextInput = function () {
        if (maze[py+1][px] === 0) {
          yoff-=5;
          if (yoff > -25) return false;
          yoff = 0;
          py++;
        }
        return true;
      }
      break;
  }
}

window.onkeydown = checkKey
window.requestNextAnimationFrame(animate);



