import { IElementGleaningService } from '../..';
import { FieldElementHandler } from '../../../handlers';
import { Element, ElementCollection, ElementModifier, ElementSortingType } from '../../../../models';

export abstract class FieldGleaningServiceBase implements IElementGleaningService {
  public get handledElementName(): string {
    return `${this.modifier} Field`;
  }

  constructor(private modifier: ElementModifier) {
  }

  public getElements(text: string): ElementCollection {
    const fieldElementHandler = new FieldElementHandler(text);

    const excludedStrings = [
      'readonly'
    ];

    const searchString = ElementModifier[this.modifier];
    const elements = fieldElementHandler.getFieldElements(searchString, Element, excludedStrings);
    const result = new ElementCollection(1, this.handledElementName, elements);
    result.sortByType(ElementSortingType.ByHeading);

    return result;
  }
}
