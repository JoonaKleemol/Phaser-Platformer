var winState = {

  create: function() {

    var nameLabel = game.add.text(310, 40, 'YOU WIN',
      { font: '50px Arial', fill: '#fff'});

    var startLabel = game.add.text(240, 180, 'Your time is ' + text + '!',
      { font: '30px Arial', fill: '#fff'});
    
    var restartLevel = game.add.text(185, 270, 'Press the "R" key to go replay',
      { font: '20px Arial', fill: '#fff'});

    var backToMenuLabel = game.add.text(185, 300, 'Press the "M" key to go back to main menu',
      { font: '20px Arial', fill: '#fff'});

    mKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
    
    mKey.onDown.addOnce(this.menu, this);
	
	//db.students.put({levelName: "Tiina", Score: text, levelName: 'Level 1'});
	 db.students.orderBy("[Score+levelName]").each(function(student) {console.log(student.levelName+" "+student.Score)});
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