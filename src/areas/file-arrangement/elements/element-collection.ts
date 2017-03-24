import { ElementBase } from '.';

export class ElementCollection extends Array<ElementBase> {
  constructor(public sequence: number, public name: string, private elements: ElementBase[]) {
    super(...elements);

    this.elements = this.elements.sort((a, b) => {
      if (a.text < b.text) {
        return -1;
      }

      if (a.text > b.text) {
        return 1;
      }

      return 0;
    });
  }
}
