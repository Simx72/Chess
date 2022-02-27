import GameO from '../components/GameO';

export default class Scene extends Phaser.Scene implements SceneActualizable {

  preload() {}
  
  create() {
    this.children.each((item: GameO) => item?.create?.())
  }

  update(time: number, delta: number) {
    this.children.each(item => item?.update?.(time, delta))
  }
}
