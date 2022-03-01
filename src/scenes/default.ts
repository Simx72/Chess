import { TableroO } from '../components/chess/Tablero';

export default class Scene extends Phaser.Scene implements SceneActualizable {

  preload() {}
  
  tablero!: TableroO;

  create() {
    this.tablero = new TableroO(this);
  }

  update(time: number, delta: number) {
    this.children.each(item => item?.update?.(time, delta))
  }
}
