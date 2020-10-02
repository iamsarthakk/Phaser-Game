var Menu = {

    preload : function() {
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to,
        // the second one is the path to our file.
        this.load.image(
          "sky",
          "./assets/images/sky.png"
        );
    },

    create: function () {
        // Add a sprite to your game, here the sprite will be the game's logo
        // Parameters are : X , Y , image name (see above)
        this.sky = this.add.sprite(400, 300, 'sky').setInteractive();
        this.sky.on('pointerdown', () => this.scene.start('Game'));
        // this.add.button(0, 0, 'sky', this.startGame, this);
        introText = this.add.text(24, 8, "Clear all the baddies when they're weak!  \nClick to start playing, use the keyboard to move. \n\n(Click the white area around the game to make movement work)"
        );
    },


};
