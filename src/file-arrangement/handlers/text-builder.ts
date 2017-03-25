import { Constants } from '../infrastructure';
import { ElementCollection } from '../models';

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
    return this.text;
  }
}
