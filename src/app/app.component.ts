import * as PIXI from 'pixi.js';
import { Component, ViewChild } from '@angular/core';
import { GameScene } from './scenes/GameScene';
import { GameService } from './game.service';
import { MenuScene } from './scenes/MenuScene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  @ViewChild('canvas')canvas: any;  //  canvas HTML element reference
  
  ngAfterViewInit() {  

    //  1. create SCM instance
    GameService.createSceneManager(this.canvas.nativeElement);
    
    //  2. preload some assets
    const assets = ['assets/background.png',
                    'assets/gravatar_image.png',
                    'assets/hud.png'];
    PIXI.Loader.shared
        .reset()
        .add(assets)
        .load(this.loadCompleted)
        .on("progress", (loader: PIXI.Loader, resource: PIXI.LoaderResource) => console.log(loader.progress.toFixed(0) + "% -> " + resource.name));   
    
    //  3. continue after assets are loaded in loadCompleted bellow
  }
  
  loadCompleted = ()=>{
    //  its easier create scenes after assets are loaded in case the scene's constructors need resources 
    
    GameService.scm.AddScene(new MenuScene());       //  scene is just added to the scm but not activated
    GameService.scm.AddScene(new GameScene());       //  scene is just added to the scm but not activated
    GameService.scm.ActivateScene("main");           //  scene is activated
  }
}
