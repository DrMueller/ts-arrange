import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class PrivateFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
