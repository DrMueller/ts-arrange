import { ElementHandlerBase } from '..';
import { FunctionElementHandler, FunctionHelper } from '../../handlers';
import { ElementBase, ElementCollection } from '../../elements';

export class PublicPropertyElementHandler extends ElementHandlerBase {
  public get handledElementName(): string {
    return 'Public Property';
  }

  public getElements(text: string): ElementCollection {
    const propertyElements = this.geSortedPropertyElements(text);

    return new ElementCollection(1, this.handledElementName, propertyElements);
  }

  private sortElementsByName(elements: ElementBase[]): ElementBase[] {
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

  private setSequence(elements: ElementBase[], offset: number): void {
    for (let i = 0; i < elements.length; i++) {
      elements[i].sequence = i + 2 + offset;
    }
  }

  private geSortedPropertyElements(text: string): ElementBase[] {
    const functionElementHandler = new FunctionElementHandler(text);
    let getElements = functionElementHandler.getFunctionElements('public get ', ElementBase);
    let setElements = functionElementHandler.getFunctionElements('public set ', ElementBase);

    getElements = this.sortElementsByName(getElements);
    setElements = this.sortElementsByName(setElements);

    this.setSequences(getElements, setElements);
    const concatedElements = getElements.concat(setElements);
    const result = this.sortbySequence(concatedElements);

    return concatedElements;
  }

  private sortbySequence(elements: ElementBase[]): ElementBase[] {
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

  private setSequences(getElements: ElementBase[], setElements: ElementBase[]): void {
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

  private getCorrespondingSetElement(element: ElementBase, elements: ElementBase[]): ElementBase | null {
    const propertyName = FunctionHelper.getFunctionNameWithoutParameters(element.text);
    const propertyNameToSearch = propertyName.replace(' get ', ' set ');

    const opposingProperty = elements.find(f => {
      const propName = FunctionHelper.getFunctionNameWithoutParameters(f.text);
      return propName === propertyNameToSearch;
    });

    return opposingProperty;
  }
}
