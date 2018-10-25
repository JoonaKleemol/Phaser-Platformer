var leaderboardState = {

  create: function() {

    var nameLabel = game.add.text(310, 40, 'Leaderboard',
      { font: '50px Arial', fill: '#fff'});

    var backToMenuLabel = game.add.text(185, 300, 'Press the "M" key to go back to main menu',
      { font: '20px Arial', fill: '#fff'});

    mKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
    
    mKey.onDown.addOnce(this.menu, this);

    db.students.orderBy("[Score+levelName]").each(function(student) {alert(student.levelName+" "+student.Score+" ")});
   


  },


  menu: function() {
    game.state.start('menu');
  },   
};