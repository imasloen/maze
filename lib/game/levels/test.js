ig.module( 'game.levels.test' )
.requires( 'impact.image','game.entities.player','game.entities.snake','game.entities.velvet','game.entities.bat' )
.defines(function(){
LevelTest=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 48,
			"y": 16
		},
		{
			"type": "EntitySnake",
			"x": 112,
			"y": 80
		},
		{
			"type": "EntityVelvet",
			"x": 112,
			"y": 16
		},
		{
			"type": "EntitySnake",
			"x": 144,
			"y": 48
		},
		{
			"type": "EntityBat",
			"x": 80,
			"y": 112
		},
		{
			"type": "EntityBat",
			"x": 64,
			"y": 32
		}
	],
	"layer": [
		{
			"name": "floor",
			"width": 15,
			"height": 10,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/environment/tiles_prison.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,4,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,4,1,1,1,1,1,1],
				[1,1,1,3,3,1,1,1,4,1,1,1,1,1,1],
				[1,1,1,3,3,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "collision",
			"width": 15,
			"height": 10,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,1,1,0,0,0,1,1,0,0,0,0,0,0],
				[0,1,0,0,1,0,1,0,0,1,0,0,0,0,0],
				[1,0,0,1,0,1,0,1,0,0,1,0,0,0,0],
				[1,0,0,1,0,0,0,1,0,0,1,0,0,0,0],
				[0,1,0,0,0,1,0,0,0,1,0,0,0,0,0],
				[0,0,1,0,0,1,1,0,1,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
				[0,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "walls",
			"width": 15,
			"height": 10,
			"linkWithCollision": true,
			"visible": true,
			"tilesetName": "media/environment/tiles_prison.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,85,81,0,0,0,81,85,0,0,0,0,0,0],
				[0,81,0,0,81,0,81,0,0,81,0,0,0,0,0],
				[81,0,0,81,0,81,0,81,0,0,81,0,0,0,0],
				[85,0,0,81,0,57,0,81,0,0,85,0,0,0,0],
				[0,81,0,0,0,81,0,0,0,81,0,0,0,0,0],
				[0,0,81,0,0,81,81,0,81,0,0,0,0,0,0],
				[0,0,0,81,0,0,0,81,0,0,0,0,0,0,0],
				[0,0,0,0,81,0,81,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,85,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "ceiling",
			"width": 15,
			"height": 10,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/environment/tiles_prison.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,50,49,49,49,50,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49]
			]
		},
		{
			"name": "light",
			"width": 15,
			"height": 10,
			"linkWithCollision": false,
			"visible": false,
			"tilesetName": "media/environment/lights-64.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1895,1895,1895,1895,1895,2158,1910,1910,1910,1910,1910,0,0,0,0],
				[1895,1638,1638,1638,1895,2158,1910,1654,1654,1654,1910,0,0,0,0],
				[1895,1638,1447,1638,1895,2158,1910,1654,1462,1654,1910,0,0,0,0],
				[1895,1638,1638,1638,1895,2158,1910,1654,1654,1654,1910,0,0,0,0],
				[1895,1895,1895,1898,1898,1902,1906,1906,1910,1910,1910,0,0,0,0],
				[0,0,2155,1902,1646,1646,1646,1902,2155,0,0,0,0,0,0],
				[0,0,0,1902,1646,1455,1646,1902,0,0,0,0,0,0,0],
				[0,0,0,1902,1646,1646,1646,1902,0,0,0,0,0,0,0],
				[0,0,0,1902,1902,1902,1902,1902,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelTestResources=[new ig.Image('media/environment/tiles_prison.png'), new ig.Image('media/environment/tiles_prison.png'), new ig.Image('media/environment/tiles_prison.png'), new ig.Image('media/environment/lights-64.png')];
});