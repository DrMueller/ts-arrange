import { IElementHandler } from '../..';
import { FunctionElementHandler, ElementHeadingHandler } from '../../..';
import { Element, ElementCollection, ElementModifier } from '../../../../models';

export abstract class PropertyElementHandlerBase {
  public get handledElementName(): string {
    return `${this.modifier} Property`;
  }

  constructor(private modifier: ElementModifier) {
  }

  public getElements(text: string): ElementCollection {
    const propertyElements = this.geSortedPropertyElements(text);
    return new ElementCollection(1, this.handledElementName, propertyElements);
  }

  private sortElementsByName(elements: Element[]): Element[] {
    const result = elements.sort((a, b) => {
      if (a.text < b.text) {
        return .1;
      }

      if (a.text > b.text) {
        return 1;
      }

      return 0;
    });

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

    getElements = this.sortElementsByName(getElements);
    setElements = this.sortElementsByName(setElements);

    this.setSequences(getElements, setElements);
    const concatedElements = getElements.concat(setElements);
    const result = this.sortbySequence(concatedElements);

    return result;
  }

  private sortbySequence(elements: Element[]): Element[] {
    const result = elements.sort((a, b) => {
      if (a.sequence < b.sequence) {
        return -1;
      }

      if (a.sequence > b.sequence) {
        return 1;
      }

      return 0;
    });

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
    const propertyName = ElementHeadingHandler.getHeadingWithoutParameters(element);
    const propertyNameToSearch = propertyName.replace(' get ', ' set ');

    const opposingProperty = elements.find(f => {
      const propName = ElementHeadingHandler.getHeadingWithoutParameters(f);
      return propName === propertyNameToSearch;
    });

    return opposingProperty;
  }
}
