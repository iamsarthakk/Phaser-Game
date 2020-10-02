var game;

// Create a new game instance 600px wide and 450px tall:
var config = {
  type: Phaser.AUTO,
  scale: {
        mode: Phaser.Scale.FIT,      
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
  // width: 640,
  // height: 480,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: Game
};
game = new Phaser.Game(config);
// game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.scene.add('Menu', Menu);
game.scene.add('Game', Game);
game.scene.add('Game_Over', Game_Over);

game.scene.start('Menu');
