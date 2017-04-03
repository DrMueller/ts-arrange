import { Element } from '../../models';

export interface IElementSortingStrategy {
  sort(a: Element, b: Element): number;
}
