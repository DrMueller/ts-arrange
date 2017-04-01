import { Element } from '../../models/elements';

export interface IElementSortingStrategy {
  sort(a: Element, b: Element): number;
}
