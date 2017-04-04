import { Constants } from '../../../infrastructure';
import { Element, ElementCollection, FunctionValidationResult } from '../../models';
import { StringHelper } from '../../helpers';
import { IStringConstructor } from '../../interfaces';
import { ElementHeadingHandler } from '.';

export class FunctionElementHandler {
  constructor(private documentText: string) {
  }

  public getFunctionElements(
    searchString: string,
    ctor: IStringConstructor<Element>,
    excludedStrings: string[] | null = null): Element[] {

    const result = new Array<Element>();
    let position = 0;

    do {
      position = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, position);
      if (position > -1) {
        position = this.appendNextFunctionElement(position, ctor, result, excludedStrings);
      }
    } while (position > -1);

    return result;
  }

  private appendNextFunctionElement(
    position: number,
    ctor: IStringConstructor<Element>,
    elements: Array<Element>,
    excludedStrings: string[] | null = null): number {

    const functionString = this.getFunctionString(position);
    const checkResult = this.checkIfIsValidFunction(functionString);

    if (!checkResult.isValid) {
      return position + checkResult.nextPosition;
    }

    const element = this.createFunctionElement(position, ctor);

    if (excludedStrings === null || !ElementHeadingHandler.CheckIfElementHeadingContainsString(element, excludedStrings)) {
      elements.push(element);
    }

    return position + element.text.length;
  }

  private checkIfIsValidFunction(functionString: string): FunctionValidationResult {
    for (let i = 0; i < functionString.length; i++) {
      const char = functionString.charAt(i);
      if (char === Constants.SEMICOLON) { // field
        return new FunctionValidationResult(false, i);
      } else if (char === Constants.CLOSING_ROUND_BRACKED) { // Parameter-Property
        return new FunctionValidationResult(false, i);
      } else if (char === Constants.OPENING_ROUND_BRACKED) { // actual function
        return new FunctionValidationResult(true, 0);
      }
    }

    return new FunctionValidationResult(false, functionString.length);
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
      if (char === Constants.CLOSING_SQUARE_BRACKET) {
        openingBracketsCount--;
        if (openingBracketsCount === 0) {
          break;
        }
      } else {
        if (char === Constants.OPENING_SQUARE_BRACKET) {
          openingBracketsCount++;
        }
      }
    }

    return result;
  }
}
