import { ElementSortingType } from '../../models';
import { IElementSortingStrategy } from '.';
import { SortByHeading, SortBySequence } from './implementation';

export class ElementSortingStrategyFactory {
  public static createBySortingType(sortingType: ElementSortingType): IElementSortingStrategy {
    switch (sortingType) {
      case ElementSortingType.ByHeading: {
        return new SortByHeading();
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case ElementSortingType.BySequence: {
        return new SortBySequence();
      }
    }
  }
}
