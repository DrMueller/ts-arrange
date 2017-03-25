import { FunctionElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class PublicFunctionElementHandler extends FunctionElementHandlerBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
