import { IElementSortingStrategy } from '..';
import { Element } from '../../../models';
import { ElementHeadingHandler } from '../../handlers';

export class SortByHeading implements IElementSortingStrategy {
  public sort(a: Element, b: Element): number {
    const headingFirst = ElementHeadingHandler.GetHeadingWithoutParameters(a);
    const headingSecond = ElementHeadingHandler.GetHeadingWithoutParameters(b);

    if (headingFirst < headingSecond) {
      return -1;
    }

    if (headingFirst > headingSecond) {
      return 1;
    }

    return 0;
  }
}
