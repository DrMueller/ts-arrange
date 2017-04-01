import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models/elements';

export class PublicPropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
