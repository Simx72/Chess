import Scene from './default';
import { TableroO } from '../components/chess/Tablero';
export default class Chess extends Scene {
  tablero = new TableroO(this);
}