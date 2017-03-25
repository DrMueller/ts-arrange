import { IElementHandler } from '../..';
import { FunctionElementHandler } from '../../..';
import { Element, ElementCollection, ElementModifier, ElementSortingType } from '../../../../models';

export abstract class FunctionElementHandlerBase {
  public get handledElementName(): string {
    return `${this.modifier} Property`;
  }

  constructor(private modifier: ElementModifier) {
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);

    const excludedStrings = [
      'get ',
      'set '
    ];

    const elements = functionElementHandler.getFunctionElementsWithExclusions(ElementModifier[this.modifier], Element, excludedStrings);
    const result = new ElementCollection(1, this.handledElementName, elements);
    result.sortByType(ElementSortingType.ByHeading);

    return result;
  }
}
