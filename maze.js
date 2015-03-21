var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
	floor = new Image(),
	player = new Image(),
	walls = new Image();
	
canvas.height = 25*7;
canvas.width = 25*7;

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

floor.src = 'images/floor-00.png';
player.src = 'player.png';
walls.src = 'images/wallset.png';

function animate(time) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  for (var y = 0; y < 7; y++) {
    for (var x = 0; x < 7; x++) {
      var posx = px+x-3, posy = py+y-3;
      if (maze[posy][posx] === 1) {
        var wallIndex = 0;
        if (maze[posy-1][posx] === 1) wallIndex += 1;
        if (maze[posy][posx+1] === 1) wallIndex += 2;
        if (maze[posy+1][posx] === 1) wallIndex += 4;
        if (maze[posy][posx-1] === 1) wallIndex += 8;
        context.drawImage(walls, wallIndex*walls.height, 0, walls.height, walls.height, x*walls.height, y*walls.height, walls.height, walls.height);
      }
      else context.drawImage(floor, x*floor.width, y*floor.height);
    }
  }
  
  context.drawImage(player, 3*player.width, 3*player.height);
  
  window.requestNextAnimationFrame(animate);
}

function checkKey(e) {
  switch (e.keyCode) {
    case 37:
      // left
      if (maze[py][px-1] === 0) px--;
      break;
    case 38:
      // up
      if (maze[py-1][px] === 0) py--;
      break;
    case 39:
      // right
      if (maze[py][px+1] === 0) px++;
      break;
    case 40:
      // down
      if (maze[py+1][px] === 0) py++;
      break;
  }
}

window.onkeydown = checkKey
window.requestNextAnimationFrame(animate);



