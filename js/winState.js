var winState = {

  create: function() {
    game.stage.backgroundColor = '#7EC0EE';
    mKey = game.input.keyboard.addKey(Phaser.Keyboard.M);

    this.cloudlonely = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('cloudlonely').height,
      this.game.width,
      this.game.cache.getImage('cloudlonely').height,
      'cloudlonely'
    );

    this.cloudbg = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('cloudbg').height,
      this.game.width,
      this.game.cache.getImage('cloudbg').height,
      'cloudbg'
    );

    this.mountains = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('mountains').height,
      this.game.width,
      this.game.cache.getImage('mountains').height,
      'mountains'
    );

    this.cloudmg3 = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('cloudmg3').height,
      this.game.width,
      this.game.cache.getImage('cloudmg3').height,
      'cloudmg3'
    );

    this.cloudmg2 = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('cloudmg2').height,
      this.game.width,
      this.game.cache.getImage('cloudmg2').height,
      'cloudmg2'
    );
    
    this.cloudmg1 = this.game.add.tileSprite(0,
      this.game.height - this.game.cache.getImage('cloudmg1').height,
      this.game.width,
      this.game.cache.getImage('cloudmg1').height,
      'cloudmg1'
    );

    var nameLabel = game.add.text(430, 50, 'YOU WIN', { font: "bold 40px Orbitron", fill: "#fff"});
    nameLabel.anchor.x = 0.5;

    var startLabel = game.add.text(430, 100, 'Your time is ' + text + '!', { font: "25px Orbitron", fill: "#424242"});
    startLabel.anchor.x = 0.5;
    
    var restartLevel = game.add.text(430, 200, '[R] - To restart', { font: "20px Orbitron", fill: "#00e4ff"});
    restartLevel.anchor.x = 0.5;

    var backToMenuLabel = game.add.text(430, 230, '[M] - For menu', { font: "20px Orbitron", fill: "#00398e"});
    backToMenuLabel.anchor.x = 0.5;

    mKey.onDown.addOnce(this.menu, this);
	
	
    db.students.orderBy('[levelName+Score]').each(function(student) {console.log(student.levelName+" "+student.Score)}); 
  //db.students.where({levelName: 'level1'}).each(function(student) {console.log(student.levelName+" "+student.Score)});
  },

update: function() {
  this.cloudlonely.tilePosition.x -= 0.05;
  this.cloudbg.tilePosition.x -= 0.05;
  this.mountains.tilePosition.x -= 0.25;
  this.cloudmg3.tilePosition.x -= 0.45;
  this.cloudmg2.tilePosition.x -= 0.65;
  this.cloudmg1.tilePosition.x -= 0.85;
},

  restartLevel1: function() {
    mKey.onDown.removeAll();
    game.state.start('level1');
  },

  restartLevel2: function() {
    mKey.onDown.removeAll();
    game.state.start('level2');
  },

  restartLevel3: function() {
    mKey.onDown.removeAll();
    game.state.start('level3');
  },

  menu: function() {
    rKey.onDown.removeAll();
    pause.onDown.removeAll();
    game.state.start('menu');
  },   
};