import GameO from '../../GameO';

/**
 * Following assets copyright
 * JohnPablok's improved Cburnett chess set.
 * Downloaded from https://opengameart.org/content/chess-pieces-and-board-squares.
 */
import asset_WK_svg from './SVG/w_king_svg_withShadow.svg';
import asset_WQ_svg from './SVG/w_queen_svg_withShadow.svg';
import asset_WB_svg from './SVG/w_bishop_svg_withShadow.svg';
import asset_WH_svg from './SVG/w_knight_svg_withShadow.svg';
import asset_WR_svg from './SVG/w_rook_svg_withShadow.svg';
import asset_WP_svg from './SVG/w_pawn_svg_withShadow.svg';
import asset_BK_svg from './SVG/b_king_svg_withShadow.svg';
import asset_BQ_svg from './SVG/b_queen_svg_withShadow.svg';
import asset_BB_svg from './SVG/b_bishop_svg_withShadow.svg';
import asset_BH_svg from './SVG/b_knight_svg_withShadow.svg';
import asset_BR_svg from './SVG/b_rook_svg_withShadow.svg';
import asset_BP_svg from './SVG/b_pawn_svg_withShadow.svg';
import Scene from '../../../scenes/default';

type FichaKey = Ficha.Type | keyof typeof Ficha.Type;

class Ficha {
  constructor(type: FichaKey) {
    this._type = (typeof type == 'string') ? Ficha.Type[type] : type;
  }

  private _type: Ficha.Type;
  get type(): Ficha.Type {
    return this._type;
  }
  set type(ficha: Ficha.Type) {
    this._type = ficha;
  }
  setType(ficha: FichaKey) {
    this._type = (typeof ficha == 'string') ? Ficha.Type[ficha] : ficha;
  }

}

namespace Ficha {
  /**
   * El tipo de ficha
   */
  export enum Type { K, Q, B, H, R, P }


  /**
   * Array con dos valores refiriendose
   * a uno blano y el otro negro como
   * el ying y el yang xd
   */
  interface TypeBN<T> {
    /**
     * BLANCO
     */
    0: T;

    /**
     * NEGRO
     */
    1: T;
  }

  export enum BN {B, N}

  /**
   * Contiene los datos de una ficha
   */
  export interface DatosdeFicha {
    svg: TypeBN<string>
  }

  export const Fichas: { [P in Ficha.Type]: DatosdeFicha } & { length: number; } = [
    /* Ficha.Type.K */{
      svg: [asset_WK_svg, asset_BK_svg]
    },
    /* Ficha.Type.Q */{
      svg: [asset_WQ_svg, asset_BQ_svg]
    },
    /* Ficha.Type.B */{
      svg: [asset_WB_svg, asset_BB_svg]
    },
    /* Ficha.Type.H */{
      svg: [asset_WH_svg, asset_BH_svg]
    },
    /* Ficha.Type.R */{
      svg: [asset_WR_svg, asset_BR_svg]
    },
    /* Ficha.Type.P */{
      svg: [asset_WP_svg, asset_BP_svg]
    },
  ]
}

export class FichaO extends Phaser.GameObjects.Sprite {
  static preload(scene: Scene) {
    for (let type: Ficha.Type = 0; type < Ficha.Fichas.length; type++) {
      const ficha = Ficha.Fichas[type];
      for (let color: Ficha.BN = 0; color < 2; color++)
        scene.load.svg(
          `FICHA-${Ficha.BN[color]}${Ficha.Type[type]}`,
          ficha.svg[color]
        )
    }
  }

  constructor(scene: Scene, ficha: FichaKey, color: Ficha.BN) {
    super(scene, 0, 0, '');
    this.ficha = new Ficha(ficha);
    this.setTexture(`FICHA-${Ficha.BN[color]}${Ficha.Type[this.ficha.type]}`)
    scene.add.existing(this);
  }

  type = 'Ficha';
  ficha: Ficha;

}

export default Ficha;