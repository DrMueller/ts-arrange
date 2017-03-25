import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models';

export class PrivateFieldElementHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
