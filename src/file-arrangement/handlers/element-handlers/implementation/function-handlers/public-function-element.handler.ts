import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class PublicFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
