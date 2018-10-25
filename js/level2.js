var jumpCount
var map;
var layer;
var tileset;
var dash;
var flag;
var cloud;
var time = 0;
var direction = 1;
var cooldown = 0;
var startTime = 0;
var endTime = 0;
var text = null;
var level2State = {


 create: function() {  // Load & Define our game assets

    //  We're going to be using physics, so enable the Arcade Physics system
  level2music = game.add.audio('level2m');
  level2music.play();
  game.stage.backgroundColor = '#7EC0EE';
  map = game.add.tilemap('map2', 16, 16);
  map.addTilesetImage('tileset', 'tileset2');
  layer = map.createLayer('Tile Layer 2');
  map.setCollisionBetween(16,58);
  map.setCollisionBetween(68,74);
  map.setCollisionBetween(80,84);
  map.setCollisionBetween(68,74);
  map.setCollisionBetween(100,124);

  flag = game.add.sprite(1471, 1017, 'finishFlagBrown');
    flag.scale.setTo(0.14, 0.14);

  cloud = game.add.sprite(60, 90, 'cloud');
    cloud.scale.setTo(0.15, 0.15);
  cloud2 = game.add.sprite(200, 40, 'cloud');
    cloud2.scale.setTo(0.12, 0.12);
  cloud3 = game.add.sprite(500, 70, 'cloud');
    cloud3.scale.setTo(0.13, 0.13);

  cloud5 = game.add.sprite(800, 20, 'cloud');
    cloud5.scale.setTo(0.15, 0.15);
  cloud6 = game.add.sprite(1000, 60, 'cloud');
    cloud6.scale.setTo(0.12, 0.12); 
 

  text = game.add.text(10, 10, '0', {fill: "#ffffff"});
  text.fixedToCamera = true;
  text.cameraOffset.setTo(20, 20);
  text.fontSize = 17;
  text.font = 'Orbitron';



  map.setTileIndexCallback(81, function()
  {
    endTime = (game.time.now - startTime) / 1000;
    text = endTime.toString();

    rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    rKey.onDown.addOnce(winState.restartLevel2, this);
	 db.students.put({levelName: "Level 2", Score: endTime});
   level2music.stop();
    this.game.state.start('winState');
  }, this);

  layer.resizeWorld();
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  //this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.pageAlignHorizontally = true;
  this.scale.setScreenSize( true );
    // The player and its settings
  player = game.add.sprite(10, 40, 'runner')

    //  We need to enable physics on the player
  game.physics.arcade.TILE_BIAS = 32;
  game.physics.arcade.enable(player)


    //  Player physics properties. Give the little guy a slight bounce.
  
  player.body.gravity.y = 1200
  player.body.collideWorldBounds = true
  player.anchor.setTo(0.5, 0.5)
  player.body.velocity.x = 0
  player.body.setSize(20,28,0,4)
 
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
  spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  restart = game.input.keyboard.addKey(Phaser.Keyboard.R);
  esc = game.input.keyboard.addKey(Phaser.Keyboard.E);
  rest = game.input.keyboard.addKey(Phaser.Keyboard.W);
  pause = game.input.keyboard.addKey(Phaser.Keyboard.P);
  startTime = game.time.now
},
  
update: function() {
  
  //game.debug.body(player);
  menumusic.stop();
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();
  
  text.text = ((game.time.now - startTime) / 1000).toFixed(2);
    //  We want the player to stop when not moving
  if (game.time.time > time)
  {
    player.body.velocity.x = 0
  }
  if (player.body.onFloor())
  {
    player.body.velocity.y = 0
  }

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

spacebar.onDown.add(dash)
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
      cooldown = game.time.time + 1000;
    }
    else if (direction == -1 && player.body.onFloor()){
      time = game.time.time + 250;
      player.body.velocity.x = -500;
      player.body.velocity.y = 0;
      player.play('dash');
      cooldown = game.time.time + 1000;
    }
    else if (direction == 1 && !player.body.onFloor() && player.body.velocity.y < 0){
      time = game.time.time + 250;
      player.body.velocity.x = 500;
      player.play('dash');
      cooldown = game.time.time + 1000;
    }
    else if (direction == -1 && !player.body.onFloor() && player.body.velocity.y < 0){
      time = game.time.time + 250;
      player.body.velocity.x = -500;
      player.play('dash');
      cooldown = game.time.time + 1000;
    }
    else if (direction == -1 && !player.body.onFloor() && player.body.velocity.y >= 0){
      time = game.time.time + 250;
      player.body.velocity.x = -500;
      player.body.velocity.y = -100;
      player.play('dash');
      cooldown = game.time.time + 1000;
    }
    else if (direction == 1 && !player.body.onFloor() && player.body.velocity.y >= 0){
      time = game.time.time + 250;
      player.body.velocity.x = 500;
      player.body.velocity.y = -100;
      player.play('dash');
      cooldown = game.time.time + 1000;
    }

  }
}

pause.onDown.addOnce(restartGame)
function restartGame()
{
  rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
  rKey.onDown.addOnce(pauseState.restartLevel2, this);
  level2music.stop();
  this.game.state.start('pauseMenu');
}


}
}
