import { Element, ElementCollection, ElementModifier } from '../models/elements';
import { Constants } from '../infrastructure';
import { IStringConstructor } from '../interfaces';
import { StringHelper } from '../helpers';
import { ElementHeadingHandler } from '.';

export class FieldElementHandler {
  constructor(private documentText: string) {
  }

  public getFieldElements(
    searchString: string,
    ctor: IStringConstructor<Element>,
    excludedStrings: string[] | null = null): Element[] {
    const result = new Array<Element>();

    let pos = this.getNextFieldPosition(searchString, 0);

    while (pos > -1) {
      const functionElement = this.createFieldElement(pos, ctor);

      if (excludedStrings === null || !ElementHeadingHandler.CheckIfElementHeadingContainsString(functionElement, excludedStrings)) {
        result.push(functionElement);
      }

      const posAfterText = pos + functionElement.text.length;
      pos = this.getNextFieldPosition(searchString, posAfterText);
    }

    return result;
  }

  private getNextFieldPosition(searchString: string, position: number): number {
    while (true) {
      position = StringHelper.indexOfCaseInsensitive(this.documentText, searchString, position);
      if (position === -1) {
        return -1;
      }

      const fieldString = this.getFieldString(position);
      if (fieldString.indexOf('(') === -1 && fieldString.indexOf('{') === -1) {
        return position;
      } else {
        position = position + fieldString.length;
      }
    }
  }

  private createFieldElement(positon: number, ctor: IStringConstructor<Element>): Element {
    let posWithEmptyChars = positon;

    while (true) {
      const char = this.documentText.charAt(posWithEmptyChars);
      if (char !== Constants.NEW_LINE) {
        posWithEmptyChars--;
      } else {
        break;
      }
    }

    const text = this.getFieldString(posWithEmptyChars);
    const result = new ctor(text);

    return result;
  }

  private getFieldString(position: number): string {
    let result = '';
    const str = this.documentText.substring(position);

    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      result += char;
      if (char === Constants.SEMICOLON) {
        break;
      }
    }

    return result;
  }
}
