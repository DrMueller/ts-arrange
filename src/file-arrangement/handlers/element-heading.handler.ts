import { Element } from '../models';
import * as _ from 'lodash';

export class ElementHeadingHandler {
  public static getHeadingWithoutParameters(element: Element): string {
    let result = '';
    const trimmedHeading = _.trimStart(element.text);

    for (let i = 0; i < trimmedHeading.length; i++) {
      const char = trimmedHeading.charAt(i);
      if (char !== '(') {
        result += char;
      } else {
        break;
      }
    }

    return result;
  }
}