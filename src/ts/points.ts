export class Points {
  element: HTMLElement;
  current: number = 0;
  constructor(element: HTMLElement) {
    this.element = element;
  }
  reset(){
    this.current = 0;
  }
  add(points: number) {
    this.current += points;
    this.update();
  }
  update() {
    this.element.innerText = "" + this.current;
  }
};
