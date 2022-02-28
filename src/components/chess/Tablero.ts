import GameO from '../GameO';
import Ficha from './Ficha';
import Scene from '../../scenes/default';
import asset_tablero_svg from './tablero.svg';
import './tablero.css';

interface Equipo {
  enrocar: {
    reina: boolean
    rey: boolean
  }
}

const defaultEquipo: Equipo = {
  enrocar: {
    reina: true,
    rey: true
  }
}

class Tablero extends Array<Ficha> {
  constructor() {
    super(64);
    this.fill(undefined)
    Object.seal(this)
    // this.FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  }

  length!: 64;

  negro = defaultEquipo;
  blanco = defaultEquipo;

  /**
   * Halfmove Clock for fifty-moves rule
   */
  hmclock = 0;

  /**
   * The number of full moves
   */
  fmclock = 1;

  ultimoPaso = 0;

  /**
   * true = sigue blanco
   * false = sigue negro
   */
  sigue = true
  /* 
    public get FEN(): string {
      return 'this._FEN';
    }
    public set FEN(v: string) {
      const [positions, next, castling, paso, hm, fm] = v.split(' ');
  
      let ancho = 0;
  
      let obtenido = positions
        .split('')
        .reverse()
        .join()
        .split('/')
        .map(line => line.split(''))
      
      let i = this.length;
      
      for (const line of obtenido) {
        for (const char of line) {
          if (char in Ficha.Type) {
            this[i] = new Ficha(char as keyof typeof Ficha.Type)
            i--;
          } else if (/\d+/.test(char)) {
            i -= parseInt(char);
          }
        }
      }
  
    } */

}


export const tablerosvgkey = crypto.getRandomValues(new Uint8Array(3)).join()


export class TableroO extends Phaser.GameObjects.DOMElement {

  static preload(scene: Scene) {
    scene.load.html(tablerosvgkey, asset_tablero_svg);
  }

  constructor(scene: Scene) {
    super(scene, 0, 9, 'div')
    let data = this.scene.cache.html.get(tablerosvgkey);
    this.setOrigin(0, 0).setHTML(data);
    this._resize();
    this.scene.scale.on(Phaser.Scale.Events.RESIZE, this._resize);
    this.scene.add.existing(this)
  }

  private _resize() {
    this.node.setAttribute('width', this.scene.scale.displaySize.width.toString())
    this.node.setAttribute('height', this.scene.scale.displaySize.height.toString())
  }

  type = 'Tablero';
  array = new Tablero();

}

export default Tablero
