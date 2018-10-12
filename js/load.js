var loadState = {

  preload: function() {

  game.load.tilemap('map', 'testmap3.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tileset', 'tileset.png', 16, 16);
  game.load.spritesheet('runner', 'adventurer-v1.5-Sheet.png', 50, 37);
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  },
  create: function() {
    game.state.start('menu');
  }
};