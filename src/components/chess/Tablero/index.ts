import Ficha from '../Ficha';
import Scene from '../../../scenes/default';
import asset_tablero_svg from './tablero.svg';
import styles from './tablero.module.scss';
import { loadClasses } from '../../styles';
import GameO from '../../GameO';

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

export const tableroNode = document.createElement('div');
tableroNode.className = styles.tablero;
tableroNode.innerHTML = loadClasses(asset_tablero_svg, styles);
document.getElementById('app').appendChild(tableroNode);

export class TableroO extends GameO {

  constructor(scene: Scene) {
    super(scene);
    this._resize();
    this.node.style.display = 'block';
    this.blur = true;
    this.scene.scale.on(Phaser.Scale.Events.RESIZE, this._resize)
  }

  private _resize = () => {
    this.node.style.top = this.scene.game.canvas.style.marginTop;
    this.node.style.left = this.scene.game.canvas.style.marginLeft;
    this.node.style.width = this.scene.game.canvas.style.width;
    this.node.style.height = this.scene.game.canvas.style.height;
  }

  type = 'Tablero';
  readonly array = new Tablero();
  readonly node = tableroNode;

  private _blur: boolean;
  get blur() {
    return this._blur;
  }
  set blur(v: boolean) {
    if (v) 
      this.node.classList.add(styles['blur'])
    else
      this.node.classList.remove(styles['blur'])
    this._blur = v;
  }

}

export default Tablero
