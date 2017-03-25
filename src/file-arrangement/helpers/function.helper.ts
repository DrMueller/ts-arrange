import * as _ from 'lodash';

export class FunctionHelper {
  public static getFunctionNameWithoutParameters(heading: string): string {
    let result = '';
    const trimmedHeading = _.trimStart(heading);

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

  public static checkIfProperty(str: string): boolean {
    const name = this.getFunctionNameWithoutParameters(str);
    return name.indexOf(' get ') > -1 || name.indexOf(' set ') > -1;
  }
}
