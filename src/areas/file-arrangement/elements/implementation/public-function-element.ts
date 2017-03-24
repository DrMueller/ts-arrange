import { ElementBase } from '../';

export class PublicFunctionElement extends ElementBase {
  public constructor(public text: string) {
    super(text);
  }
}