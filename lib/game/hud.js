ig.module(
	'game.hud'
)
.requires(
	'plugins.twopointfive.hud'
)
.defines(function(){

MyHud = tpf.Hud.extend({

	font: new tpf.Font( 'media/04b03.font.png' ),

	init: function( width, height, showControls ) {
		this.parent(width, height);
	},

	draw: function( player ) {
		this.prepare();

		// var x = this.width/2,
		// 	y = this.height/2;
		
		//this.font.draw(showMessage, x, y, ig.Font.ALIGN.CENTER );
		//this.showMessage("TEST MESSAGE", 1);

		// Draw the current message (showMessage(text)) and the damage indicator
		this.drawDefault();
	}
});


});