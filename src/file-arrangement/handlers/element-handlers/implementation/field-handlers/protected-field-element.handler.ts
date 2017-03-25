import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models';

export class ProtectedFieldElementHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
