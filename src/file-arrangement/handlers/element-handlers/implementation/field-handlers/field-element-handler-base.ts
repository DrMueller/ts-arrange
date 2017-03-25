import { IElementHandler } from '../..';
import { FieldElementHandler } from '../../..';
import { Element, ElementCollection, ElementModifier, ElementSortingType } from '../../../../models';

export abstract class FieldElementHandlerBase implements IElementHandler {
  public get handledElementName(): string {
    return `${this.modifier} Field`;
  }

  constructor(private modifier: ElementModifier) {
  }

  public getElements(text: string): ElementCollection {
    const fieldElementHandler = new FieldElementHandler(text);

    const elements = fieldElementHandler.getFieldElements(this.modifier, Element);
    const result = new ElementCollection(1, this.handledElementName, elements);
    result.sortByType(ElementSortingType.ByHeading);

    return result;
  }
}
