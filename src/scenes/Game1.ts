import Chess from './chess';

class Game1 extends Chess {
  constructor() {
    super(Game1.key);
  }

  create(): void {
    super.create()
    this.add.circle(0, 0, 400, 0x33DDBB)
      .setOrigin(0)
  }
}

namespace Game1 {
  export const key = 'Game1';
}

export default Game1;