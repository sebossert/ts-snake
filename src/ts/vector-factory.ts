import { Config } from "./config";
import { Vector } from "./vector";
export class VectorFactory {
  static bounds(config: Config): Vector {
    return VectorFactory.parse(config.gridDimension);
  }
  static snakeStart(config:Config):Vector{
    return VectorFactory.parse(config.snakeStart);
  }
  static appleStart(config:Config):Vector{
    return VectorFactory.parse(config.appleStart);
  }
  static parse(strObj: {x:string, y:string}):Vector{
    return {
      x: Number.parseInt(strObj.x),
      y: Number.parseInt(strObj.y),
    };
  }
}
