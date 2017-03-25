import { Element } from '.';

export class ElementCollection extends Array<Element> {
  constructor(public sequence: number, public name: string, private elements: Element[]) {
    super(...elements);
  }
}
