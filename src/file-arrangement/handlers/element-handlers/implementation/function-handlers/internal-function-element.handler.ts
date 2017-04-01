import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class InternalFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
