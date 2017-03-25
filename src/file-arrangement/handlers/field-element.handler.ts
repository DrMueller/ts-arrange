import { Element, ElementCollection, ElementModifier } from '../models';
import { Constants } from '../infrastructure';
import { IStringConstructor } from '../interfaces';
import { StringHelper } from '../helpers';
import { ElementHeadingHandler } from '.';


export class FieldElementHandler {
  constructor(private documentText: string) {
  }

  public getFieldElements(modifier: ElementModifier, ctor: IStringConstructor<Element>): Element[] {
    const result = new Array<Element>();
    const modifierString = ElementModifier[modifier];

    let pos = this.getNextFieldPosition(modifierString, 0);

    while (pos > -1) {
      const functionElement = this.createFieldElement(pos, ctor);
      result.push(functionElement);
      const posAfterText = pos + functionElement.text.length;
      pos = this.getNextFieldPosition(modifierString, posAfterText);
    }

    return result;
  }

  private getNextFieldPosition(modifierString: string, position: number): number {
    while (true) {
      position = StringHelper.indexOfCaseInsensitive(this.documentText, modifierString, position);
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
