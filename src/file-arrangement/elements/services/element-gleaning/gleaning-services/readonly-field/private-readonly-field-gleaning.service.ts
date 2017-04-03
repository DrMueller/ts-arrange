import { ReadonlyFieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PrivateReadonlyFieldGleaningService extends ReadonlyFieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
