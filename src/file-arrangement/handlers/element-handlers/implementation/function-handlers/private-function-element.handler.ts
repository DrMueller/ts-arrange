import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class PrivateFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
