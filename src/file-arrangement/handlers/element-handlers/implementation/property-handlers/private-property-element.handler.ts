import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class PrivatePropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
