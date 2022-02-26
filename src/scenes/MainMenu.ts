import UIScene from './ui';
import Game1 from './Game1';

class MainMenu extends UIScene {
  constructor() {
    super(MainMenu.key);
  }

  create() {
    this.scene.switch(Game1.key)
  }
}

namespace MainMenu {
  export const key = 'MainMenu';
}

export default MainMenu;