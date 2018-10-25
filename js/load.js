var loadState = {

  preload: function() {

  game.load.tilemap('map', 'testmap3.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.tilemap('map2', 'testmap4.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.tilemap('map3', 'testmap5.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tileset', 'tileset.png', 16, 16);
  game.load.image('tileset2', 'Tileset2.png', 16, 16);
  game.load.image('tileset3', 'tileset3.png', 16, 16);
  game.load.image('background', 'img/testBg.png');
  game.load.image('level1bg', 'img/level1bg.png');
  game.load.image('level2bg', 'img/level2bg.png');
  game.load.image('level3bg', 'img/level3bg.png');
  game.load.image('finishFlag', 'img/flag.png');
  game.load.image('finishFlagBrown', 'img/flagBrownBG.png');
  game.load.image('cloud', 'img/cloud.png');
  game.load.image('mountains', 'img/mountains.png');
  game.load.image('cloudmg1', 'img/clouds_MG_1.png');
  game.load.image('cloudmg2', 'img/clouds_MG_2.png');
  game.load.image('cloudmg3', 'img/clouds_MG_3.png');
  game.load.image('cloudbg', 'img/clouds_BG.png');
  game.load.image('cloudlonely', 'img/cloud_lonely.png');
  game.load.image('p1', 'img/p1.png');
  game.load.image('p2', 'img/p2.png');
  game.load.image('p3', 'img/p3.png');
  game.load.image('p4', 'img/p4.png');
  game.load.image('p5', 'img/p5.png');
  game.load.image('cloudlonely', 'img/cloud_lonely.png');
  game.load.image('cloudlonely', 'img/cloud_lonely.png');
  game.load.image('cloudlonely', 'img/cloud_lonely.png');
  game.load.image('cloudlonely', 'img/cloud_lonely.png');
  game.load.image('leaderboardButton', 'img/leaderboardButton.png');

  game.load.spritesheet('runner', 'adventurer-v1.5-Sheet.png', 50, 37);
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  },
  create: function() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.setShowAll();
    this.scale.pageAlignVertically = true;
    this.scale.pageAlignHorizontally = true;
    window.addEventListener('resize', function(){  
      this.game.scale.refresh();
    });
    this.game.scale.refresh();
    game.state.start('menu');
  }
};