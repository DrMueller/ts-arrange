import { ReadonlyFieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class PrivateReadonlyFieldElementHandler extends ReadonlyFieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
