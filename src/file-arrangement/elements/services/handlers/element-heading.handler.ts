import { Element } from '../../models';
import { StringHelper } from './../../helpers';
import * as _ from 'lodash';

export class ElementHeadingHandler {
  public static GetHeadingWithoutParameters(element: Element): string {
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

  public static CheckIfElementHeadingContainsString(element: Element, strings: string[]): boolean {
    const heading = ElementHeadingHandler.GetHeadingWithoutParameters(element);
    const result = strings.some(f => {
      return StringHelper.indexOfCaseInsensitive(heading, f, 0) > -1;
    });

    return result;
  }
}
