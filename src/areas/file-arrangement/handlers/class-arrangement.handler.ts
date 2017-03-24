import { TextElement } from '../models';
import { Constants } from '../infrastucture';
import { TextBuilder } from '.';

import { ConstructorElementHandler, PublicFunctionElementHandler, PublicPropertyElementHandler } from '../element-handlers';
import { ConstructorElement } from '../elements';


import * as _ from 'lodash';

export class ClassArrangementHandler {
  public arrangeWithinClass(str: string): string {
    const classHeadingText = this.getClassHeading(str);

    const tra = new ConstructorElementHandler();
    const ctorElements = tra.getElements(str);

    const tra2 = new PublicFunctionElementHandler();
    const pubFuncElements = tra2.getElements(str);

    const tra3 = new PublicPropertyElementHandler();
    const pubProp = tra3.getElements(str);

    const text = new TextBuilder()
      .appendText(classHeadingText)
      .appendElements(ctorElements)
      .appendElements(pubProp)
      .appendElements(pubFuncElements)
      .appendText(Constants.CLOSING_BRACKET)
      .appendEmptyLine()
      .build();

    return text;
  }

  private getClassHeading(str: string): string {
    const classStartingPos = str.indexOf('export class');
    let elementString = str.substr(0, classStartingPos);
    let i = classStartingPos;

    while (true) {
      const char = str.charAt(i);
      elementString += char;
      if (char === Constants.OPENING_BRACKET) {
        break;
      }

      i++;
    }

    elementString += Constants.NEW_LINE;
    return elementString;
  }
}
