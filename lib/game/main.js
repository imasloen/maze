ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'plugins.twopointfive.game',

	'game.entities.player',

	'game.hud',

	'game.levels.test'
)
.defines(function(){

playerMoving = false;
playerRotating = false;
messageX = 0;
messageY = 0;
showMessage = "Test";

MyGame = tpf.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	hud: null,
	
	
	init: function() {
		// Initialize your game here; bind keys etc.

		this.hud = new MyHud( 240*4, 160*4 );

		// Bind keys
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );

		this.loadLevel( LevelTest );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		// Add your own drawing code here
		// var x = ig.system.width/2,
		// 	y = ig.system.height/2;
		
		//this.font.draw(showMessage, x, y, ig.Font.ALIGN.CENTER );
	},

	drawHud: function() {
		ig.system.renderer.hudFreelook = false;
		if( this.player ) {
			ig.game.hud.draw(this.player);
		}
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
//ig.main( '#canvas', MyGame, 60, 240, 160, 4 );

ig.main( '#canvas', MyGame, 60, 240*4, 160*4, 1, tpf.Loader );

});
