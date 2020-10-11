import { VectorFactory } from "../src/ts/vector-factory";
import { Config } from "../src/ts/config";

const config: Config = new Config();
test("VectorFactory.parse", () => {
  const parsed = VectorFactory.parse({ x: "5", y: "3" });
  expect(parsed.x).toBe(5);
  expect(parsed.y).toBe(3);
});
test("VectorFactory.bounds TODO integration?", () => {
  const bounds = VectorFactory.bounds(config);
  expect(bounds.x).toBe(Number.parseInt(config.gridDimension.x));
  expect(bounds.y).toBe(Number.parseInt(config.gridDimension.y));
});
test("VectorFactory.snakeStart TODO integration?", () => {
  const bounds = VectorFactory.snakeStart(config);
  expect(bounds.x).toBe(Number.parseInt(config.snakeStart.x));
  expect(bounds.y).toBe(Number.parseInt(config.snakeStart.y));
});
test("VectorFactory.appleStart TODO integration?", () => {
  const bounds = VectorFactory.appleStart(config);
  expect(bounds.x).toBe(Number.parseInt(config.appleStart.x));
  expect(bounds.y).toBe(Number.parseInt(config.appleStart.y));
});
