// Initialize the Phaser Game object and set default game window size
const game = new Phaser.Game(850, 320, Phaser.CANVAS, '', {
  preload: preload,
  create: create,
  update: update })

// Declare shared variables at the top so all methods can access them
let cursors
let player
var jumpCount
var map;
var layer;
var tileset;
var dash;
var time = 0;
var direction = 1;
var cooldown = 0;

function preload () {
  // Load & Define our game assets
  /*game.load.image('sky', 'sky.png')
  game.load.image('ground', 'platform.png')
  game.load.image('diamond', 'diamond.png')*/
  game.load.tilemap('map', 'testmap2.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tileset', 'tileset.png', 16, 16);
  game.load.spritesheet('runner', 'adventurer-v1.5-Sheet.png', 50, 37)

  //game.load.spritesheet('runner', 'run.png', 55.5, 76)
}

function create () {
    //  We're going to be using physics, so enable the Arcade Physics system
  game.stage.backgroundColor = '#7EC0EE';
  game.physics.startSystem(Phaser.Physics.ARCADE)
  map = game.add.tilemap('map', 16, 16);
  map.addTilesetImage('tileset', 'tileset');
  layer = map.createLayer('Tile Layer 1');
  map.setCollisionBetween(27,29);
  layer.resizeWorld();
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.pageAlignHorizontally = true;
  this.scale.setScreenSize( true );
  
    // The player and its settings
  player = game.add.sprite(32, game.world.height - 150, 'runner')

    //  We need to enable physics on the player
  game.physics.arcade.enable(player)

    //  Player physics properties. Give the little guy a slight bounce.
  game.debug.body(player);
  player.body.gravity.y = 1200
  player.body.collideWorldBounds = true
  player.anchor.setTo(0.5, 0.5)
  player.body.velocity.x = 0
  player.body.setSize(25,37)
 
    //  Player animations
  player.animations.add('left', [8,9,10,11,12,13], 10, true);
  player.animations.add('right', [8,9,10,11,12,13], 10, true);
  player.animations.add('jump', [15,16,17], 6, false)
  player.animations.add('jump2', [17,18,19,20,21], 14, false)
  player.animations.add('falling', [22,23], 4, false)
  player.animations.add('idle', [0,1,2], 4, true)
  player.animations.add('dash', [77,78], 30, false)

    //  And bootstrap our controls
  cursors = game.input.keyboard.createCursorKeys()
  //SPACEBAR = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  // Camera follows the player sprite
  game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 0.1, 0.1);
  style = 'STYLE_PLATFORMER';
}

function update () {
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();
    //  We want the player to stop when not moving
  if (game.time.time > time)
  {
  player.body.velocity.x = 0
  }
  game.debug.spriteInfo(player, 32, 32);

	//Collisions for the player
  game.physics.arcade.collide(player, layer)

    // Configure the controls!
  if (cursors.left.isDown && player.body.onFloor() && game.time.time > time) {
    player.body.velocity.x = -250
    player.scale.setTo(-1,1)
    direction = -1
    //player.scale.x *= -1
    player.play('left')
  } 
  else if (cursors.right.isDown && player.body.onFloor() && game.time.time > time) {
    player.body.velocity.x = 250
    player.scale.setTo(1,1)
    direction = 1
	//player.scale.x *= -1
    player.play('right')
  }
  else {
    // If no movement keys are pressed, stop the player
    if (player.body.onFloor() && game.time.time > time){
    	player.play('idle')
    }
    else if (!player.body.onFloor() && player.body.velocity.y < 0 && jumpCount == 1 && game.time.time > time){
    	player.play('jump')
    	if(cursors.right.isDown && game.time.time > time){
    		player.body.velocity.x = 200
    		player.scale.setTo(1,1)
    		direction = 1
    	}
    	else if(cursors.left.isDown && game.time.time > time){
    		player.body.velocity.x = -200
    		player.scale.setTo(-1,1)
    		direction = -1
    	}
    }
    else if (!player.body.onFloor() && player.body.velocity.y >= 0 && game.time.time > time){
    	player.animations.play('falling', 7, false)
    	if(cursors.right.isDown && game.time.time > time){
    		player.body.velocity.x = 200
    		player.scale.setTo(1,1)
    		direction = 1
    	}
    	else if(cursors.left.isDown && game.time.time > time){
    		player.body.velocity.x = -200
    		player.scale.setTo(-1,1)
    		direction = -1
    	}
    }
    else if (!player.body.onFloor() && player.body.velocity.y < 0 && jumpCount == 2 && game.time.time > time){
    	player.play('jump2')
    	if(cursors.right.isDown && game.time.time > time){
    		player.body.velocity.x = 200
    		player.scale.setTo(1,1)
    		direction = 1
    	}
    	else if(cursors.left.isDown && game.time.time > time){
    		player.body.velocity.x = -200
    		player.scale.setTo(-1,1)
    		direction = -1
    	}

    }
  }

cursors.up.onDown.add(jumpCheck);
    if(player.body.onFloor()){
            jumpCount = 0;
    }
    function jumpCheck() {
        if((jumpCount < 1) && (player.body.onFloor())){
            jumpCount ++;
        	player.body.velocity.y = -475;
        }

    //double jump
        if((jumpCount < 2) && (!player.body.onFloor())){
            jumpCount ++;
        	player.body.velocity.y = -475;
        }

    }

cursors.down.onDown.add(dash)
function dash()
{
	
	if(game.time.time < cooldown){
		return;
	}
	else if (game.time.time > cooldown){
		if (direction == 1 && player.body.onFloor()){
			time = game.time.time + 250;
			player.body.velocity.x = 500;
			player.body.velocity.y = 0;
			player.play('dash');
			cooldown = game.time.time + 1500;
		}
		else if (direction == -1 && player.body.onFloor()){
			time = game.time.time + 250;
			player.body.velocity.x = -500;
			player.body.velocity.y = 0;
			player.play('dash');
			cooldown = game.time.time + 1500;
		}
		else if (direction == 1 && !player.body.onFloor()){
			time = game.time.time + 250;
			player.body.velocity.x = 500;
			player.body.velocity.y = -100;
			player.play('dash');
			cooldown = game.time.time + 1500;
		}
		else if (direction == -1 && !player.body.onFloor()){
			time = game.time.time + 250;
			player.body.velocity.x = -500;
			player.body.velocity.y = -100;
			player.play('dash');
			cooldown = game.time.time + 1500;
		}
		

	}
}

}
