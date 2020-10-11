import { Player } from "./player";

export class Highscore {
  entries: Array<{ name: string; points: number }> = [];
  element: HTMLOListElement;
  numberOfEntries: number = 10;
  constructor(element: HTMLOListElement) {
    this.element = element;
    this.load();
    this.update(false);
  }
  add(player: Player) {
    let added = false;
    for (let i = 0; i < this.entries.length; i++) {
      const entry = this.entries[i];
      if (entry.points < player.points.current) {
        this.entries.splice(i, 0, {
          name: player.name,
          points: player.points.current,
        });
        added = true;
        break;
      }
    }
    if (this.entries.length < this.numberOfEntries && !added) {
      console.log("player bad");
      this.entries.push({
        name: player.name,
        points: player.points.current,
      });
    }
    this.update();
  }
  load() {
    for (let i = 0; i < this.numberOfEntries; i++) {
      const stored = localStorage.getItem("entry-" + i);
      if (stored) {
        const entry = JSON.parse(stored);
        this.entries[i] = entry;
      }
    }
  }
  update(updateEntries: boolean = true) {
    for (let i = 0; i < this.numberOfEntries; i++) {
      if (updateEntries) {
        localStorage.setItem("entry-" + i, JSON.stringify(this.entries[i]));
      }
      const childNodeIndex = i * 2 + 1;
      this.element.childNodes[
        childNodeIndex
      ].textContent = this.createEntryText(this.entries[i]);
    }
  }
  createEntryText(entry: { name: string; points: number }) {
    return entry.name + " : " + entry.points;
  }
}
