import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class PrivatePropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
