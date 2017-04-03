import { PropertyGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PublicPropertyGleaningService extends PropertyGleaningServiceBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
