// Initialize the Phaser Game object and set default game window size
var game = new Phaser.Game(850, 320, Phaser.AUTO, 'gameDiv');


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level1', level1State);

game.state.start('boot');