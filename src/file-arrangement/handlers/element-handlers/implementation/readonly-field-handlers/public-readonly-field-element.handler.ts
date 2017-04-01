import { ReadonlyFieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class PublicReadonlyFieldElementHandler extends ReadonlyFieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
