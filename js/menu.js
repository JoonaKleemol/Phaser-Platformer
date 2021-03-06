
var menuState = {
  create: function() {

    menumusic = game.add.audio('menum');
    menumusic.play();
    game.stage.backgroundColor = '#ffba75';

    this.p3 = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('p3').height,
      this.game.width,
      this.game.cache.getImage('p3').height,
      'p3'
    );

    this.p4 = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('p4').height,
      this.game.width,
      this.game.cache.getImage('p4').height ,
      'p4'
    );

    this.p5 = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('p5').height,
      this.game.width,
      this.game.cache.getImage('p5').height,
      'p5'
    );

    this.p2 = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('p2').height,
      this.game.width,
      this.game.cache.getImage('p2').height,
      'p2'
    );
    

    var nameLabel = game.add.text(430, 20, 'Platformer',
      { font: '50px Monoton', fill: '#00a0d1'});
    nameLabel.anchor.x = 0.5;
    
    var lvl1img = this.add.image(186.6, 120, 'level1bg');
    lvl1img.scale.setTo(0.13, 0.13);
    lvl1img.alpha = 0.95;
    lvl1img.inputEnabled = true;
    lvl1img.anchor.x = 0.5;
    lvl1img.events.onInputDown.add(this.level1, this);

    var lvl2img = this.add.image(430.3, 120, 'level2bg');
    lvl2img.scale.setTo(0.13, 0.13);
    lvl2img.alpha = 0.95;
    lvl2img.inputEnabled = true;
    lvl2img.anchor.x = 0.5;
    lvl2img.events.onInputDown.add(this.level2, this);

    var lvl3img = this.add.image(680, 120, 'level3bg');
    lvl3img.scale.setTo(0.13, 0.13);  
    lvl3img.alpha = 0.95;
    lvl3img.inputEnabled = true;
    lvl3img.anchor.x = 0.5;
    lvl3img.events.onInputDown.add(this.level3, this);      

    var instructionsLabel = game.add.text(430, 250, 'Use [Arrows] to move, double tap [Up] for double jump, [Space] for dash, and [P] for pause',
      { font: '15px Arial', fill: '#ffffff'}); 

    var instructionsLabel2 = game.add.text(430, 280, 'Press [K] for leaderboard',
      { font: '15px Arial', fill: '#00a0d1'});


    kKey = game.input.keyboard.addKey(Phaser.Keyboard.K);
    
    kKey.onDown.addOnce(this.leaderboard, this);

    instructionsLabel.anchor.x = 0.5;
    instructionsLabel2.anchor.x = 0.5;



  },

update: function() {
  this.p3.tilePosition.x -= 0.25;
  this.p4.tilePosition.x -= 0.45;
  this.p5.tilePosition.x -= 0.65;
  this.p2.tilePosition.x -= 0.85;
},

  level1: function() {
    menumusic.stop();
    game.state.start('level1');
  }, 

  level2: function() {
    menumusic.stop();
    game.state.start('level2');
  },

  level3: function() {
    menumusic.stop();
    game.state.start('level3');
  },    

  leaderboard: function() {
    menumusic.stop();
    game.state.start('leaderboard');
  },     
 

     
};