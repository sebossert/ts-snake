import { Player } from "./player";

/**
 * @class High
 */
export class Highscore {
  entries: Array<Player> = [];
  element: HTMLOListElement;
  /**
   *
   * @param element
   */
  constructor(element: HTMLOListElement) {
    this.element = element;
  }
  add(player: Player) {
    let added = false;
    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];
      if (entry.points.current < player.points.current) {
        this.entries.splice(i, 0, player);
        added = true;
        break;
      }
    }
    if (this.entries.length < this.element.childNodes.length && !added) {
      console.log("player bad");
      this.entries.push(player);
    }
    this.update();
  }
  update() {
    for (let i = 0; i < this.entries.length; i++) {
      const childNodeIndex = i * 2 + 1; //TODO
      this.element.childNodes[childNodeIndex].textContent = this.createEntryText(
        this.entries[i]
      );
    }
  }
  createEntryText(entry: Player) {
    return entry.name + " : " + entry.points.current;
  }
}
