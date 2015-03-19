var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
	wall = new Image(),
	player = new Image();

var maze = 
	[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	 [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
	 [1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
	 [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
	 [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
	 [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
	 [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
	 [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
	 [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
	 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

var px = 1, py = 8;
	
wall.src = 'wall.png';
player.src = 'player.png';

function animate(time) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  for (var y = 0; y < maze.length; y++) {
    for (var x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) context.drawImage(wall, x*wall.width, y*wall.height);
    }
  }
  
  context.drawImage(player, px*player.width, py*player.height);
  
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



