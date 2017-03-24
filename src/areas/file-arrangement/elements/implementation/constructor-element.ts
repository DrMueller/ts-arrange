import { ElementBase } from '../';

export class ConstructorElement extends ElementBase {
  public constructor(public text: string) {
    super(text);
  }
}
