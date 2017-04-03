import { FieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class InternalFieldGleaningService extends FieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
