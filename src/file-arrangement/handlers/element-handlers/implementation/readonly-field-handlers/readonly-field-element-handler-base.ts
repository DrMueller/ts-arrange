import { IElementHandler } from '../..';
import { FieldElementHandler, ElementHeadingHandler } from '../../..';
import { Element, ElementCollection, ElementModifier, ElementSortingType } from '../../../../models/elements';
import { ElementSortingStrategyFactory, IElementSortingStrategy } from '../../../sorting-handlers';

export abstract class ReadonlyFieldElementHandlerBase {
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
