import { Element, ElementCollection } from '../models';
import { Constants } from '../infrastructure';
import { IStringConstructor } from '../interfaces';
import { StringHelper } from '../helpers';
import { ElementHeadingHandler } from '.';

export class FunctionElementHandler {
  constructor(private documentText: string) {
  }

  public getFunctionElementsWithExclusions(searchString: string, ctor: IStringConstructor<Element>, excludedStrings: string[]): Element[] {
    const result = new Array<Element>();
    let pos = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, 0);
    while (pos > -1) {
      const element = this.createFunctionElement(pos, ctor);

      if (!this.checkIfElementHeadingContainsString(element, excludedStrings)) {
        result.push(element);
      }

      const posAfterText = pos + element.text.length;
      pos = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, posAfterText);
    }

    return result;
  }

  private checkIfElementHeadingContainsString(element: Element, strings: string[]): boolean {
    const heading = ElementHeadingHandler.getHeadingWithoutParameters(element);
    const result = strings.some(f => {
      return StringHelper.indexOfCaseInsensitive(heading, f, 0) > -1;
    });

    return result;
  }

  public getFunctionElements(searchString: string, ctor: IStringConstructor<Element>): Element[] {
    const result = new Array<Element>();
    let pos = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, 0);

    while (pos > -1) {
      const functionElement = this.createFunctionElement(pos, ctor);
      result.push(functionElement);
      const posAfterText = pos + functionElement.text.length;
      pos = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, posAfterText);
    }

    return result;
  }

  private createFunctionElement(positon: number, ctor: IStringConstructor<Element>): Element {
    let posWithEmptyChars = positon;

    while (true) {
      const char = this.documentText.charAt(posWithEmptyChars);
      if (char !== Constants.NEW_LINE) {
        posWithEmptyChars--;
      } else {
        break;
      }
    }

    const text = this.getFunctionString(posWithEmptyChars);
    const result = new ctor(text);

    return result;
  }

  private getFunctionString(position: number): string {
    let result = '';
    let openingBracketsCount = 0;
    const str = this.documentText.substring(position);

    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      result += char;
      if (char === Constants.CLOSING_BRACKET) {
        openingBracketsCount--;
        if (openingBracketsCount === 0) {
          break;
        }
      } else {
        if (char === Constants.OPENING_BRACKET) {
          openingBracketsCount++;
        }
      }
    }

    return result;
  }
}
