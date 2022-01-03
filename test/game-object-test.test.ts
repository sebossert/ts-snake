import { Config } from "../src/ts/config";
import { GameObject } from "../src/ts/game-object";
import { Vector } from "../src/ts/vector";

const config: Config = new Config();
test("GameObject.Collide", () => {
  const x = 5, y = 10;
  const gameObject = new GameObject();
  const collisionVector = new Vector();
  collisionVector.x = x;
  collisionVector.y = y;
  gameObject.position.x = x;
  gameObject.position.y = y;
  const collided = gameObject.checkCollision(collisionVector);
  expect(collided).toBe(true);
});
