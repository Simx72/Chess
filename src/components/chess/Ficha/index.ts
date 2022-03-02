import GameO from '../../GameO';

class Ficha {
  constructor(type: Ficha.Type | keyof typeof Ficha.Type) {
    this.type = (typeof type == 'string')? Ficha.Type[type] : type;
  }

  type: Ficha.Type;
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
  interface BN<T> {
    /**
     * BLANCO
     */
    0: T;

    /**
     * NEGRO
     */
    1: T;
  }
  
  /**
   * Contiene los datos de una ficha
   */
  export interface DatosdeFicha {
    svg: BN<string>
  }

  export const Fichas: { [P in Ficha.Type]: DatosdeFicha } = [
    /* Ficha.Type.K */{
      svg: ['blanca', 'negra']
    },
    /* Ficha.Type.Q */{
      svg: ['blanca', 'negra']
    },
    /* Ficha.Type.B */{
      svg: ['blanca', 'negra']
    },
    /* Ficha.Type.H */{
      svg: ['blanca', 'negra']
    },
    /* Ficha.Type.R */{
      svg: ['blanca', 'negra']
    },
    /* Ficha.Type.P */{
      svg: ['blanca', 'negra']
    },
  ]
}

export class FichaO extends GameO { 
  type = 'Ficha';
}

export default Ficha;