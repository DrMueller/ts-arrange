import { Element } from '.';
import { ElementSortingType } from './enums';
import { ElementSortingStrategyFactory } from '../services/element-sorting';

export class ElementCollection extends Array<Element> {
  constructor(public sequence: number, public name: string, elements: Element[]) {
    super(...elements);
  }

  public sortByType(sortingType: ElementSortingType): void {
    const sortingStrategy = ElementSortingStrategyFactory.createBySortingType(sortingType);
    this.sort(sortingStrategy.sort);
  }
}
