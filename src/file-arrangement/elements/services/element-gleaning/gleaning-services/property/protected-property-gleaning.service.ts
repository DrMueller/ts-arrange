import { PropertyGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class ProtectedPropertyGleaningService extends PropertyGleaningServiceBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
