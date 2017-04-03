import { IElementGleaningService } from '../..';
import { FunctionElementHandler, ElementHeadingHandler } from '../../../handlers';
import { Element, ElementCollection, ElementModifier, ElementSortingType } from '../../../../models';
import { ElementSortingStrategyFactory, IElementSortingStrategy } from '../../../element-sorting';

export abstract class PropertyGleaningServiceBase {
  public get handledElementName(): string {
    return `${this.modifier} Property`;
  }

  constructor(private modifier: ElementModifier) {
  }

  public getElements(text: string): ElementCollection {
    const propertyElements = this.geSortedPropertyElements(text);
    return new ElementCollection(1, this.handledElementName, propertyElements);
  }

  private sortElements(elements: Element[], sortingType: ElementSortingType): Element[] {
    const sortingStrategy = ElementSortingStrategyFactory.createBySortingType(sortingType);
    const result = elements.sort(sortingStrategy.sort);
    return result;
  }

  private setSequence(elements: Element[], offset: number): void {
    for (let i = 0; i < elements.length; i++) {
      elements[i].sequence = i + 2 + offset;
    }
  }

  private geSortedPropertyElements(text: string): Element[] {
    const functionElementHandler = new FunctionElementHandler(text);

    let getElements = functionElementHandler.getFunctionElements(`${ElementModifier[this.modifier]} get `, Element);
    let setElements = functionElementHandler.getFunctionElements(`${ElementModifier[this.modifier]} set `, Element);

    getElements = this.sortElements(getElements, ElementSortingType.ByHeading);
    setElements = this.sortElements(setElements, ElementSortingType.ByHeading);

    this.setSequences(getElements, setElements);
    const concatedElements = getElements.concat(setElements);
    const result = this.sortElements(concatedElements, ElementSortingType.BySequence);

    return result;
  }

  private setSequences(getElements: Element[], setElements: Element[]): void {
    let sequence = 0;
    getElements.forEach(f => {
      f.sequence = sequence++;
      const correspondingProperty = this.getCorrespondingSetElement(f, setElements);
      if (correspondingProperty) {
        correspondingProperty.sequence = sequence++;
      }
    });

    const setElementsWithoutSequence = setElements.filter(f => {
      return f.sequence === null;
    });

    setElementsWithoutSequence.forEach(f => {
      f.sequence = sequence++;
    });
  }

  private getCorrespondingSetElement(element: Element, elements: Element[]): Element | undefined {
    const propertyName = ElementHeadingHandler.GetHeadingWithoutParameters(element);
    const propertyNameToSearch = propertyName.replace(' get ', ' set ');

    const opposingProperty = elements.find(f => {
      const propName = ElementHeadingHandler.GetHeadingWithoutParameters(f);
      return propName === propertyNameToSearch;
    });

    return opposingProperty;
  }
}
