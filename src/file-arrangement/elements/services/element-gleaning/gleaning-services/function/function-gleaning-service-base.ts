import { IElementGleaningService } from '../..';
import { FunctionElementHandler } from '../../../handlers';
import { Element, ElementCollection, ElementModifier, ElementSortingType } from '../../../../models';

export abstract class FunctionGleaningServiceBase implements IElementGleaningService {
  public get handledElementName(): string {
    return `${this.modifier} Property`;
  }

  constructor(private modifier: ElementModifier) {
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);

    const excludedStrings = [
      'get ',
      'set ',
      'constructor'
    ];

    const elements = functionElementHandler.getFunctionElements(ElementModifier[this.modifier], Element, excludedStrings);
    const result = new ElementCollection(1, this.handledElementName, elements);
    result.sortByType(ElementSortingType.ByHeading);

    return result;
  }
}
