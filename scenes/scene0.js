let loadingBar;

class Scene0 extends Phaser.Scene {
	
	constructor(){
		super('Scene0');
	}

	
	//f18a00
	preload(){
		
		this.load.on('progress', function(value){			
			progressBar.clear();
			progressBar.fillStyle(0xf18a00, 1);
			progressBar.fillRect((game.config.width/2)-150, (game.config.height/2)+10, 300 * value, 30);
		});
		
		this.load.on('fileprogress', function(file){
			//console.log('loading: '+file.key);
		});
		
		this.load.on('complete', function(){			
			progressBar.destroy();
			progressBox.destroy();
		});
		
		var progressBar = this.add.graphics();
		var progressBox = this.add.graphics();
		
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect((game.config.width/2)-160, (game.config.height/2), 320, 50);
		
		this.load.image('rotateDevice', 'assets/gui/rotateDevice.png');		
		
		this.load.spritesheet('fullscreen', 'assets/buttons/fullscreen.png', { frameWidth: 64, frameHeight: 64 });
		this.load.image('background', 'assets/gui/background.png');
		this.load.image('backgroundA', 'assets/gui/backgroundA.png');
		this.load.image('background1', 'assets/gui/background1.png');
		this.load.image('cloud', 'assets/gui/cloud.png');		

		this.load.image('invisible', 'assets/gui/invisible.png');		

		this.load.image('player', 'assets/gui/player.png');		
		this.load.image('platform1', 'assets/gui/platform1.png');		
		
		/*buttons*/		
			this.load.spritesheet('soundButton', 'assets/buttons/soundButton.png', { frameWidth: 64, frameHeight: 64 });
			this.load.spritesheet('closeButton', 'assets/buttons/closeButton.png', { frameWidth: 64, frameHeight: 64 });
			this.load.image('homeButton', 'assets/buttons/homeButton.png');

		/* Audio */		
			//this.load.audio('main_theme', 'assets/music/main_theme.mp3');		
			//this.load.audio('start_game', 'assets/music/start_game.wav');		
		

		
		/* Scenes */

			// Scene 0
			this.load.image('logo', 'assets/scenes/scene0/logo.png');
			this.load.spritesheet('fullscreenWhite', 'assets/scenes/scene0/fullscreen.png', { frameWidth: 64, frameHeight: 64 });		
			this.load.image('loadingBar', 'assets/scenes/scene0/loadingBar.png');
			this.load.image('loading', 'assets/scenes/scene0/loading.png');

			// Scene 1 		
			this.load.image('title', 'assets/scenes/scene1/title.png');		
			this.load.image('title', 'assets/scenes/scene1/title.png');		
			this.load.image('playButton', 'assets/buttons/playButton.png');		
			this.load.image('nextSceneButton', 'assets/buttons/nextSceneButton.png');
			//this.load.spritesheet('playButton', 'assets/buttons/playButton.png', { frameWidth: 988, frameHeight: 988});
			this.load.image('tutorialImage', 'assets/scenes/scene2/tutorial.png');			
			//this.load.image('safeZone1', 'assets/scenes/scene7/safeZone1.png');
			//this.load.image('safeZone2', 'assets/scenes/scene9/safeZone2.png');
			//this.load.image('safeZone3', 'assets/scenes/scene11/safeZone3.png');

			//Scene 3 
			this.load.image('scene3HowToPlay', 'assets/scenes/scene3/scene3HowToPlay.jpg');			
			
		
	}
	
	create(){					
		_this = this;
		
		checkOrientation(this.scale.orientation);
		this.scale.on('orientationchange', checkOrientation,  this);
		
		
		this.cameras.main.setBackgroundColor('0x1d1d1b');		
		let logo = this.add.image(game.config.width/2, (game.config.height/2)-150,'logo');
		
		
		loadingBar = this.add.tileSprite((game.config.width/2), (game.config.height-117), 570, 75, 'loadingBar');		
		let loading = this.add.image(game.config.width/2, (game.config.height-150),'loading');
		
		logo.scale = 0.7;
		addFullScreenButton('White');
		
		/*music*/		
		
		//gameMusic.mainTheme = this.sound.add('main_theme');
		//gameMusic.startGame = this.sound.add('start_game');
		
		
		
		let style = {fontFamily: 'gotham-bold', fontSize: 50, color: "#ffffff", align: 'center' };
		this.add.text(game.config.width/2 - 400, 50, "Acabas de ingresar a un juego de", style);
		
		
		style = {fontFamily: 'gotham-medium', fontSize: 34, color: "#ffffff", align: 'center' };
		this.add.text(300, 650, "Una serie de experiencias diseñadas para ayudar a encontrar el alivio a través de \n la gamificación. Una herramienta tecnológica que contribuye a la mejora \n en la calidad de vida desde los avances de la ciencia y la medicina.", style);
		
		
	
		this.cameras.main.once('camerafadeoutcomplete', function (camera) {
				_this.scene.start('Scene1');
				//_this.scene.start('howToPlay');//test
        });

        //this.cameras.main.fadeIn(500);
				
		this.time.delayedCall(7000, () => {
			_this.cameras.main.fadeOut(1000, 0, 0, 0);
		});		
	
		
	}
	 
	update(){		
		loadingBar.tilePositionX+= 4;
	}
	
}

