import { PropertyGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class InternalPropertyGleaningService extends PropertyGleaningServiceBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
