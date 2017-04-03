import { ReadonlyFieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class InternalReadonlyFieldGleaningService extends ReadonlyFieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
