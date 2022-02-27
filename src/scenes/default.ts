export default class Scene extends Phaser.Scene implements Actualizable {

  preload() {
    this.children
  }
  
  create() {}

  update(time: number, delta: number) {
    this.children.each(item => item?.update(time, delta))
  }
}