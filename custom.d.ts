interface Actualizable {
  /**
   * This method is called once per game step while the scene is running.
   * 
   * @param time — The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
   * 
   * @param delta — The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
   */
  update(time: number, delta: number): void;
}

interface SceneActualizable extends Actualizable {
  /**
   * This event is emitted on first scene start
   */
  preload(): void;
  /**
   * This event is emitted on every scene start
   */
  create(): void
}