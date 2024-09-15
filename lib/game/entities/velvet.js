ig.module(
	'game.entities.velvet'
)
.requires(
	//'impact.entity'
	'plugins.twopointfive.entity'
)
.defines(function(){

EntityVelvet = tpf.Entity.extend({
	
	size: {x:15, y:15},
	collides: ig.Entity.COLLIDES.PASSIVE,

	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	
	animSheet: new ig.AnimationSheet( 'media/sprites/velsquare.png', 64, 64 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', 1, [0] );
	},

    update: function() {

		this.parent();
	},

	check: function( other ) {
	}
});

});