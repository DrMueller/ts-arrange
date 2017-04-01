import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class InternalFieldElementHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
