import Ficha from './Ficha';
import Scene from '../../scenes/default';
import asset_tablero_svg from './tablero.svg';
import styles from './tablero.module.scss';
import { loadClasses } from '../styles';

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


let svgtableroWithClasses = loadClasses(asset_tablero_svg, styles);

export class TableroO extends Phaser.GameObjects.DOMElement {

  constructor(scene: Scene) {
    super(scene, 0, 9, 'div')
    // console.log(svgtableroWithClasses)
    this.setOrigin(0, 0)
      .setClassName(styles.tablero)
      .setHTML(svgtableroWithClasses)
    this._resize();
    this.scene.scale.on(Phaser.Scale.Events.RESIZE, this._resize.bind(this));
    this.scene.add.existing(this)
  }

  node!: HTMLDivElement;

  private _resize() {
    for (const prop of ['width', 'height'] as ('width' | 'height')[]) {
      this.node.style[prop] = this.scene.scale.displaySize[prop] + 'px';
    }
  }

  type = 'Tablero';
  array = new Tablero();

}

export default Tablero
