import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class InternalPropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
