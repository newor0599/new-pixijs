class main extends Phaser.Scene
{
	// Load before game start
	preload ()
	{
		this.load.image("player","assets/player.png");
	}
	
	// Create entity
	create ()
	{
		const ww=window.innerWidth;
		const wh=window.innerHeight;
		this.add.image(ww/2,wh/2,"player").setScale(.3)
	}
	update()
	{
		var cursors = this.input.keyboard.createCursorKeys();
		if (cursors.up.isDown){

			console.log("Hello")
		}
	}
}

// Config
const config = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	scene: main,
};

const game = new Phaser.Game(config);
