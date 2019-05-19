import * as PIXI from 'pixi.js';
import { GameService } from './../game.service';
import { Scene } from 'pixi-scenegraph';
import { SCENE_WIDTH, SCENE_HEIGHT, TXT_STYLE } from '../game.service';
import { GameHud } from './GameHud';

export class GameScene extends Scene{
	private gravatar : PIXI.Sprite;
	private direction = 1;

	constructor() {
		super("main");	//	this is	the scene name

		this.BackGroundColor = 0x4433ff;

		const spr = PIXI.Sprite.from('assets/background.png');
		this.addChild(spr);

		this.gravatar = PIXI.Sprite.from('assets/gravatar_image.png');
		this.gravatar.scale.set(0.5);
		this.gravatar.anchor.set(0.5);
		this.gravatar.position.set(SCENE_WIDTH/2, SCENE_HEIGHT/2);
		this.addChild(this.gravatar);
		
		const richText = new PIXI.Text('This is the main game scene', TXT_STYLE);
		richText.position.set(15, SCENE_HEIGHT - 80);
		this.addChild(richText);

		const menuBtn = GameService.createButton("Game menu", SCENE_WIDTH - 260, 5);
		menuBtn.on('pointerdown', this.onBtnClick);		
		this.addChild(menuBtn);

		this.HudOverlay = new GameHud();
	}

	private onBtnClick() {
		GameService.scm.ActivateScene("menu");
	}

	onUpdate(dt: number, timestamp: number){

		//	get the hud image for changing the tint
		let hudSprite = this.HudOverlay.children[0] as PIXI.Sprite;	

		//	calc gravatar rotation angle
		const MILLI_TO_SECOND = 1/1000;
		const rot = (dt * 20 * MILLI_TO_SECOND); //	20 degrees per second

		//	apply rotation
		if(this.gravatar.angle > 30 ){
			this.direction = -1;
			hudSprite.tint = 0xffffff;
		}else if(this.gravatar.angle < -30){
			this.direction = 1;
			hudSprite.tint = 0xff3366;
		}
		this.gravatar.angle += rot * this.direction; 
	}
}