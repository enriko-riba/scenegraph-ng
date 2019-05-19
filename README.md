# pixi-scenegraph Angular 7 demo

This demo shows how to use **pixi-scenegraph** in Angular.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9, PIXI version 5.0.2 and [pixi-scenegraph](https://github.com/enriko-riba/pixi-scenegraph) version 1.5.2.

## Overview
Only several files are changed or added compared to the standard Angular scaffolding:
- global state is game.service.ts.
- app.component.ts references canvas, creates the SceneManager, preloads assets and creates scenes
- app.component.html contains a single canvas element
- styles.css contains some basic styling
- the scenes folder contains two scenes: GameScene and MenuScene and a GameHud

### Hud
Each scene can assign a HudOverlay. The HudOverlay is a PIXI.Container rendered over the scene.