
import * as PIXI from 'pixi.js';

export class GameHud extends PIXI.Container {
	private sprite : PIXI.Sprite;
	constructor() {
		super();
		this.sprite = PIXI.Sprite.from('assets/hud.png');
		this.sprite.position.set(5, 5);
		this.addChild(this.sprite);
	}

	public setTint(tint:number){
		this.sprite.tint = tint;
	}
}