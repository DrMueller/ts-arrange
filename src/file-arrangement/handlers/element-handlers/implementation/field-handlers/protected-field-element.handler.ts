import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class ProtectedFieldElementHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
