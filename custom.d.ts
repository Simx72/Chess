declare module AssetModule { 
  const content: string;
  export default content;
  export const style: { readonly [c: string]: string };
}

declare module "*.svg" { export default AssetModule.default; }
declare module "*.html" { export default AssetModule.default; }

declare module "*.css" { export default AssetModule.style; }
declare module "*.sass" { export default AssetModule.style; }
declare module "*.scss" { export default AssetModule.style; }


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

