import { Constants } from '../infrastucture';
import { ElementBase, ElementCollection } from '../elements';

export class TextBuilder {
  private text: string;

  public appendEmptyLine(): TextBuilder {
    this.text += Constants.NEW_LINE;
    return this;
  }

  public appendElements(elements: ElementCollection): TextBuilder {
    for (let i = 0; i < elements.length; i++) {
      this.text += elements[i].text;

      if (i < elements.length) {
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
