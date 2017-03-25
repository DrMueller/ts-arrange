import { PropertyElementHandlerBase } from '.';
import { ElementModifier, ElementCollection } from '../../../../models';

export class PublicPropertyElementHandler extends PropertyElementHandlerBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
