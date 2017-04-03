import { ReadonlyFieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class ProtectedReadonlyFieldGleaningService extends ReadonlyFieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
