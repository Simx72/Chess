import * as Phaser from "phaser";
import "./styles.global.scss";
import MainMenu from './scenes/MainMenu';
import Game1 from './scenes/Game1';

document.getElementById('loading').remove()

export const GAMECONFIG: Phaser.Types.Core.GameConfig = {
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    width: 800,
    height: 800,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH
  },
  scene: [MainMenu, Game1]
};

export const GAME = new Phaser.Game(GAMECONFIG);