import { ReadonlyFieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class InternalReadonlyFieldElementHandler extends ReadonlyFieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
