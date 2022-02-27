import GameO from '../GameO';

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
}

export class FichaO extends GameO { 
  type = 'Ficha';
}

export default Ficha;