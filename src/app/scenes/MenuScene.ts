import * as PIXI from 'pixi.js';
import { Scene } from 'pixi-scenegraph';
import { GameService, SCENE_HEIGHT, TXT_STYLE } from '../game.service';

export class MenuScene extends Scene{	
	constructor() {
		super("menu"); //	this is	the scene name
		this.BackGroundColor = 0x9433ff;

		const richText = new PIXI.Text('This is the menu scene', TXT_STYLE);
		richText.position.set(5, SCENE_HEIGHT - 80);
		this.addChild(richText);

		const gameBtn = GameService.createButton("Back to game", 5, 5)
		gameBtn.on('pointerdown', this.onBtnClick);		
		this.addChild(gameBtn);
	}

	private onBtnClick() {
		GameService.scm.ActivateScene("main");
	}
}