import { Constants } from '../infrastructure';
import { ElementCollection } from '../models/elements';

export class TextBuilder {
  private text: string;

  public appendEmptyLine(): TextBuilder {
    this.text += Constants.NEW_LINE;
    return this;
  }

  public appendElements(elements: ElementCollection, emptyLineBetween: boolean): TextBuilder {
    for (let i = 0; i < elements.length; i++) {
      this.text += elements[i].text;

      if (i < elements.length && emptyLineBetween) {
        console.log(elements[i].text);

        this.text += Constants.NEW_LINE;
      }
    }

    return this;
  }

  public appendText(text: string): TextBuilder {
    this.text += text;
    return this;
  }

  public build(): string {
    let result = this.text;
    if (result.startsWith('undefined')) {
      result = result.substring(9);
    }

    return result;
  }
}
