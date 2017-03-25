import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class ProtectedPropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
