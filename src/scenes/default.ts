import GameO from '../components/GameO';

export default class Scene extends Phaser.Scene implements SceneActualizable {

  preload() {}
  
  create() {}

  update(time: number, delta: number) {
    this.children.each(item => item?.update?.(time, delta))
  }
}
