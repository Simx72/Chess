import Scene from './default';
import { FichaO } from '../components/chess/Ficha/index';
export default class Chess extends Scene {
  preload(): void {
    FichaO.preload(this)
  }
  create(): void {
    super.create()
    this.tablero.blur = false;
  }
}