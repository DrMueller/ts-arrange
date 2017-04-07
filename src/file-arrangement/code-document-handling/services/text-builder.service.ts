import { Constants } from '../../infrastructure';
import { ElementCollection } from '../../elements/models';

export class TextBuilderService {
  private text: string;

  public appendEmptyLine(): TextBuilderService {
    this.text += Constants.NEW_LINE;
    return this;
  }

  public appendElements(elements: ElementCollection, emptyLineBetween: boolean): TextBuilderService {
    for (let i = 0; i < elements.length; i++) {
      this.text += elements[i].text;

      if (i < (elements.length - 1) && emptyLineBetween) {
        this.text += Constants.NEW_LINE;
      }
    }

    return this;
  }

  public appendText(text: string): TextBuilderService {
    this.text += text;
    return this;
  }

  public build(): string {
    let result = this.text || '';

    // For some reason, we get an 'undefined' on the beginning (Charset missmatch?)
    if (result.startsWith('undefined')) {
      result = result.substring(9);
    }

    return result;
  }
}
