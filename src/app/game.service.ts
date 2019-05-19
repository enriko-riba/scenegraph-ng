import * as PIXI from 'pixi.js';
import { SceneManager } from 'pixi-scenegraph';
import { IRendererOptions } from 'pixi-scenegraph/dist/core/RendererOptions';

export const SCENE_WIDTH = 1600;
export const SCENE_HEIGHT = 800;
export const TXT_STYLE = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6  
});

/**
 * Shares the SceneManager to the whole application.
 */
export class GameService {
  private static _scm: SceneManager;
  
  /**
   * Creates the SceneManager instance.
   * @param nativeElement - the canvas
   */
  static createSceneManager(nativeElement: HTMLCanvasElement){
    if(!GameService._scm){
      var options : IRendererOptions = {
        width: SCENE_WIDTH,
        height: SCENE_HEIGHT,
        view: nativeElement,
        transparent: false,
      };  
      GameService._scm = new SceneManager(options);
    }
  }
  
  /**
   * Returns the SceneManager instance.
   */
  static get scm(){
    return GameService._scm;
  }

  /**
   * Creates a simple button.
   * @param text - button text
   * @param x - x position
   * @param y - y position
   */
  static createButton(text: string, x: number, y : number) {
    const btn = PIXI.Sprite.from('assets/gui_button.png');
    btn.anchor.set(0);
		btn.position.set(x, y);
		btn.interactive = true;
		btn.buttonMode = true;	

		const txt = new PIXI.Text(text, {...TXT_STYLE, fontSize: 28, fill: 0xf7f7f7});
		txt.anchor.set(0.5);
		txt.position.set(128, 32);
    btn.addChild(txt);
    return btn;
  }
}

