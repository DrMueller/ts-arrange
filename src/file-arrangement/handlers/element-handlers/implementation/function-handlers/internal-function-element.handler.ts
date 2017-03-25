import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class InternalFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
