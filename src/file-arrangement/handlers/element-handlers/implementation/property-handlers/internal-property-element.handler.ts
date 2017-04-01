import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class InternalPropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
