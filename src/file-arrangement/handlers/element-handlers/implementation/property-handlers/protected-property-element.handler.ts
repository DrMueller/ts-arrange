import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class ProtectedPropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
