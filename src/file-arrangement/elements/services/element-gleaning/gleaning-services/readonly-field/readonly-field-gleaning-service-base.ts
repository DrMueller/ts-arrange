import { IElementGleaningService } from '../..';
import { FieldElementHandler } from '../../../handlers';
import { Element, ElementCollection, ElementModifier, ElementSortingType } from '../../../../models';

export abstract class ReadonlyFieldGleaningServiceBase implements IElementGleaningService {
  public get handledElementName(): string {
    return `${this.modifier} readonly Property`;
  }

  constructor(private modifier: ElementModifier) {
  }

  public getElements(text: string): ElementCollection {
    const fieldElementHandler = new FieldElementHandler(text);
    const searchString = ElementModifier[this.modifier] + ' readonly ';
    const elements = fieldElementHandler.getFieldElements(searchString, Element);
    const result = new ElementCollection(1, this.handledElementName, elements);

    result.sortByType(ElementSortingType.ByHeading);

    return result;
  }
}
