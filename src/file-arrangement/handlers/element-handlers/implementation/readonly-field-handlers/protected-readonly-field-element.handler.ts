import { ReadonlyFieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class ProtectedReadonlyFieldElementHandler extends ReadonlyFieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
