import { Element, ElementCollection } from '../models/elements';
import { Constants } from '../infrastructure';
import { IStringConstructor } from '../interfaces';
import { StringHelper } from '../helpers';
import { ElementHeadingHandler } from '.';

export class FunctionElementHandler {
  constructor(private documentText: string) {
  }

  public getFunctionElements(
    searchString: string,
    ctor: IStringConstructor<Element>,
    excludedStrings: string[] | null = null): Element[] {

    const result = new Array<Element>();
    let pos = this.getNextFunctionPosition(searchString, 0);
    while (pos > -1) {
      const element = this.createFunctionElement(pos, ctor);

      if (excludedStrings === null || !ElementHeadingHandler.CheckIfElementHeadingContainsString(element, excludedStrings)) {
        result.push(element);
      }

      const posAfterText = pos + element.text.length;
      pos = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, posAfterText);
    }

    return result;
  }

  private getNextFunctionPosition(searchString: string, position: number): number {
    while (true) {
      position = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, position);
      if (position === -1) {
        return -1;
      }

      const functionString = this.getFunctionString(position);

      // If the character before the ( is a ; its a field
      // properties get filtered out on the later stage in order to not offset the position
      for (let i = 0; i < functionString.length; i++) {
        const char = functionString.charAt(i);
        if (char === ';') {
          return position + i;
        } else if (char === '(') {
          return position;
        }
      }
    }
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
