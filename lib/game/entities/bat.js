ig.module(
	'game.entities.bat'
)
.requires(
	//'impact.entity'
	'plugins.twopointfive.entity'
)
.defines(function(){

EntityBat = tpf.Entity.extend({
	
	size: {x:15, y:15},
	collides: ig.Entity.COLLIDES.PASSIVE,

	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	
	animSheet: new ig.AnimationSheet( 'media/sprites/bat.png', 15, 15 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.pos.z += 10;
		this.addAnim( 'idle', .2, [0,1,2,3] );
	},

    update: function() {

		this.parent();
	},

	check: function( other ) {
	}
});

});