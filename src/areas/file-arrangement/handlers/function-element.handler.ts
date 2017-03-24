import { Constants } from '../infrastucture';
import { IStringConstructor } from '../../../interfaces';

import { ElementBase, ConstructorElement } from '../elements';


export class FunctionElementHandler {
  constructor(private documentText: string) {
  }

  public getFunctionElements(searchString: string, ctor: IStringConstructor<ElementBase>): ElementBase[] {
    const result = new Array<ElementBase>();
    let pos = this.documentText.indexOf(searchString, 0);

    while (pos > -1) {
      const functionElement = this.createFunctionElement(pos, ctor);
      result.push(functionElement);
      pos = this.documentText.indexOf(searchString, pos + functionElement.text.length);
    }

    return result;
  }

  private createFunctionElement(positon: number, ctor: IStringConstructor<ElementBase>): ElementBase {
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
