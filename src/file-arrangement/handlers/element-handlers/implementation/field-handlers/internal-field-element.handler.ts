import { FieldElementHandlerBase } from '.';
import { ElementModifier } from '../../../../models';

export class InternalElementFieldHandler extends FieldElementHandlerBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
