var leaderboardState = {

  create: function() {

    var nameLabel = game.add.text(275, 20, 'Leaderboard',
      { font: '50px Arial', fill: '#fff'});
        nameLabel.anchor.x = 0;

    var backToMenuLabel = game.add.text(210, 300, 'Press the "M" key to go back to main menu',
      { font: '20px Arial', fill: '#fff'});
        backToMenuLabel.anchor.x = 0;

  
    var lvl1img = this.add.image(400, 120, 'leaderboardButton');
    lvl1img.scale.setTo(0.5, 0.5);
    lvl1img.inputEnabled = true;
    lvl1img.anchor.x = 0.43;
    lvl1img.events.onInputDown.add(this.popUp, this);

    mKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
    mKey.onDown.addOnce(this.menu, this);
    
    
  },


  menu: function() {
    game.state.start('menu');
  }, 

  popUp: function() {
    var myWindow = window.open("", "MsgWindow", "width=300, height=700");
    db.students.orderBy('[levelName+Score]').each(function(student) {myWindow.document.write('<p>'+student.levelName+" -- "+student.Score+'<br>'+'</p>')}); 
  },     
};