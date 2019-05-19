
import * as PIXI from 'pixi.js';

export class GameHud extends PIXI.Container {
	constructor() {
		super();
		const img = PIXI.Sprite.from('assets/hud.png');
		img.position.set(5, 5);
		this.addChild(img);
	}
}