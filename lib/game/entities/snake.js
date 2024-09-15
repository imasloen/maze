ig.module(
	'game.entities.snake'
)
.requires(
	//'impact.entity'
	'plugins.twopointfive.entity'
)
.defines(function(){

EntitySnake = tpf.Entity.extend({
	
	size: {x:15, y:15},
	collides: ig.Entity.COLLIDES.PASSIVE,

	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	
	animSheet: new ig.AnimationSheet( 'media/sprites/snake.png', 12, 15 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', .2, [0,1,2,3] );
	},

    update: function() {

		this.parent();
	},

	check: function( other ) {

		// if( other instanceof EntityPlayer ) {
		// 	messageX = this.pos.x + 8;
		// 	messageY = this.pos.y - 8;
		// 	showMessage = "Howdy!";
		// }
	}
});

});