import Scene from './default';
export default class Chess extends Scene {
  create(): void {
    super.create()
    this.tablero.blur = false;
  }
}