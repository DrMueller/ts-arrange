import { PropertyGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PrivatePropertyGleaningService extends PropertyGleaningServiceBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
