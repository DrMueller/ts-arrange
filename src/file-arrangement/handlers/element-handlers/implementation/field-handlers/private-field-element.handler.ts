import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class PrivateFieldElementHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
