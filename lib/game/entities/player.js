ig.module(
	'game.entities.player'
)
.requires(
	//'impact.entity'
	'plugins.twopointfive.entity'
)
.defines(function(){

EntityPlayer = tpf.Entity.extend({
	
	size: {x:15, y:15},
	collides: ig.Entity.COLLIDES.PASSIVE,

	type: ig.Entity.TYPE.A,
	
	animSheet: new ig.AnimationSheet( 'media/sprites/bat.png', 15, 15 ),

	framesToMove: 0,
	framesToRotate: 0,

	angle: (90).toRad(),
	turnSpeed: (360).toRad(),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		this.addAnim( 'idle', .2, [0,1,2,3] );

		this.internalAngle = this.angle;
		ig.game.player = this;
	},

	ready: function() {
		var cx = this.pos.x + this.size.x/2,
			cy = this.pos.y + this.size.y/2;
		ig.system.camera.position[0] = cx;
		ig.system.camera.position[2] = cy;
	},

    update: function() {
				
		this.parent();

		if (playerRotating) {
			this.angle += this.turnDir * this.turnSpeed * ig.system.tick;
			this.framesToRotate -= 1;

			if (this.framesToRotate <= 0) {
				this.angle = Math.round(this.angle / (90).toRad()) * (90).toRad();
				this.angle = this.angle % (360).toRad();
				playerRotating = false;
			}
		}
		else if (playerMoving) {
			this.framesToMove -= 1;

			if (this.framesToMove <= 0) {
				this.vel.x = 0;
				this.vel.y = 0;
				this.pos.x = Math.round(this.pos.x / 16) * 16;
				this.pos.y = Math.round(this.pos.y / 16) * 16;
				playerMoving = false;
			}
		}
		else {
			if( ig.input.state('up') ) {
				
				var angleMod = (this.angle / (90).toRad()) % 4;
				if (angleMod < 0) { angleMod += 4; }

				switch(angleMod) {
					case 0:
						this.vel.y = -64; break;
					case 1:
						this.vel.x = -64; break;
					case 2:
						this.vel.y = 64; break;
					case 3:
						this.vel.x = 64; break;
				}

				this.framesToMove = 15;
				playerMoving = true;
			}
			else if( ig.input.state('down') ) {

				var angleMod = (this.angle / (90).toRad()) % 4;
				if (angleMod < 0) { angleMod += 4; }

				switch(angleMod) {
					case 0:
						this.vel.y = 64; break;
					case 1:
						this.vel.x = 64; break;
					case 2:
						this.vel.y = -64; break;
					case 3:
						this.vel.x = -64; break;
				}

				this.framesToMove = 15;
				playerMoving = true;
			}
			else if( ig.input.state('left') ) {
				// this.vel.x = -64;
				// this.framesToMove = 30;
				// playerMoving = true;
				this.turnDir = 1;
				this.framesToRotate = 15;
				playerRotating = true;
			}
			else if( ig.input.state('right') ) {
				// this.vel.x = 64;
				// this.framesToMove = 30;
				// playerMoving = true;
				this.turnDir = -1;
				this.framesToRotate = 15;
				playerRotating = true;
			}
		}

		var cx = this.pos.x + this.size.x/2,
			cy = this.pos.y + this.size.y/2;
		ig.system.camera.setRotation(0, 0, this.angle);
		ig.system.camera.setPosition( cx, cy, 0 );
	}
});

});