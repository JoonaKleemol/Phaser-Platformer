var leaderboardState = {

  create: function() {

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

    var nameLabel = game.add.text(430, 30, 'Leaderboard',
      { font: '50px Orbitron', fill: '#fff'});
        nameLabel.anchor.x = 0.5;

    var backToMenuLabel = game.add.text(430, 280, 'Press the "M" key to go back to main menu',
      { font: '20px Orbitron', fill: '#fff'});
        backToMenuLabel.anchor.x = 0.5;

  
    var lvl1img = this.add.image(430, 120, 'leaderboardButton');
    lvl1img.scale.setTo(0.5, 0.5);
    lvl1img.inputEnabled = true;
    lvl1img.anchor.x = 0.5;
    lvl1img.events.onInputDown.add(this.popUp, this);

    mKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
    mKey.onDown.addOnce(this.menu, this);
    
    
  },

  update: function() {
  this.p3.tilePosition.x -= 0.25;
  this.p4.tilePosition.x -= 0.45;
  this.p5.tilePosition.x -= 0.65;
  this.p2.tilePosition.x -= 0.85;
},


  menu: function() {
    game.state.start('menu');
  }, 

  popUp: function() {
    var myWindow = window.open("", "MsgWindow", "width=300, height=700");
    db.students.orderBy('[levelName+Score]').each(function(student) {myWindow.document.write('<p>'+student.levelName+" -- "+student.Score+'<br>'+'</p>')}); 
  },     
};