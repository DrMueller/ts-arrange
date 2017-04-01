import { IElementSortingStrategy } from '..';
import { Element } from '../../../models/elements';

export class SortBySequence implements IElementSortingStrategy {
  sort(a: Element, b: Element): number {
    if (a.sequence < b.sequence) {
      return -1;
    }

    if (a.sequence > b.sequence) {
      return 1;
    }

    return 0;
  }
}
