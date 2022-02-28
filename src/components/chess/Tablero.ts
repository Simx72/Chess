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


export class TableroO extends Phaser.GameObjects.DOMElement {

  static readonly tablerosvgkey = 'asset_tablero_svg'

  constructor(scene: Scene) {
    super(scene, 0, 9, 'img')
    // console.log(asset_tablero_svg)
    this.node.setAttribute('data', asset_tablero_svg)
    this.node.setAttribute('type', 'image/svg+xml')
    this.setOrigin(0, 0)
    this._resize();
    this.scene.scale.on(Phaser.Scale.Events.RESIZE, this._resize.bind(this));
    this.scene.add.existing(this)
  }

  node!: HTMLImageElement;

  private _resize() {
    let { width, height } = this.scene.scale.displaySize;
    // console.log(width, height)
    this.node.setAttribute('width', width.toString())
    this.node.setAttribute('height', height.toString())
    Object.assign(this.node.style, { width, height });
  }

  type = 'Tablero';
  array = new Tablero();

}

export default Tablero
