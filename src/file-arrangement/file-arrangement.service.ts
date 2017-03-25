import { Element, ElementCollection } from './models';
import { Constants } from './infrastructure';

import { TextBuilder } from './handlers';
import {
  ConstructorElementHandler,
  PublicFunctionElementHandler,
  PublicPropertyElementHandler,
  PublicFieldElementHandler,
  PrivateFieldElementHandler
} from './handlers/element-handlers';

import * as _ from 'lodash';

export class FileArrangementService {
  public arrangeWithinClass(text: string): string {
    const classHeadingText = this.getClassHeading(text);

    const tra = new ConstructorElementHandler();
    const ctorElements = tra.getElements(text);

    const tra2 = new PublicFunctionElementHandler();
    const pubFuncElements = tra2.getElements(text);

    const tra3 = new PublicPropertyElementHandler();
    const pubProp = tra3.getElements(text);

    const tra4 = new PublicFieldElementHandler();
    const pubFields = tra4.getElements(text);

    const tra5 = new PrivateFieldElementHandler();
    const privFields = tra5.getElements(text);

    const result = new TextBuilder()
      .appendText(classHeadingText)
      .appendElements(privFields, false)
      .appendElements(ctorElements, true)
      .appendElements(pubFuncElements, true)
      .appendElements(pubProp, true)
      .appendElements(pubFields, false)
      .appendText(Constants.CLOSING_BRACKET)
      .appendEmptyLine()
      .build();

    return result;
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
