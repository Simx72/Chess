import Scene from './default';
import { TableroO } from '../components/chess/Tablero';
export default class Chess extends Scene {
  tablero!: TableroO;
  create(): void {
    super.create()
    this.tablero = new TableroO(this);
  }
}