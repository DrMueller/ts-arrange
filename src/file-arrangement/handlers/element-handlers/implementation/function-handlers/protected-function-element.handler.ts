import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class ProtectedFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
