import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class ProtectedFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
