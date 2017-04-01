import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models/elements';

export class PublicFieldElementHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
