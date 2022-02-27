import Scene from '../scenes/default';
export default class GameO extends Phaser.GameObjects.GameObject implements Actualizable {
  constructor(scene: Scene) {
    super(scene, '');
  }

  scene!: Scene;

  create() {
    this.scene.add.existing(this)
  }
  update() { }
}