import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models';

export class PublicFieldElementHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
