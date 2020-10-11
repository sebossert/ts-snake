import { Points } from "./points";

export class Player {
  id: string;
  name: string;
  points: Points;
  constructor(name: string, points: Points) {
    this.name = name;
    this.id = name + Math.random();
    this.points = points;
  }
};
