import Chess from './chess';
import Ficha, { FichaO } from '../components/chess/Ficha';

class Game1 extends Chess {
  constructor() {
    super(Game1.key);
  }

  create(): void {
    super.create()
    let ficha = new FichaO(this, Ficha.Type.P, Ficha.BN.B);
    ficha.setPosition(4, 4)
  }
}

namespace Game1 {
  export const key = 'Game1';
}

export default Game1;