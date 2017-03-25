import { IElementSortingStrategy } from '..';
import { Element } from '../../../models';
import { ElementHeadingHandler } from '../..';

export class SortByHeading implements IElementSortingStrategy {
  public sort(a: Element, b: Element): number {
    const headingFirst = ElementHeadingHandler.getHeadingWithoutParameters(a);
    const headingSecond = ElementHeadingHandler.getHeadingWithoutParameters(b);

    if (headingFirst < headingSecond) {
      return -1;
    }

    if (headingFirst > headingSecond) {
      return 1;
    }

    return 0;
  }
}
