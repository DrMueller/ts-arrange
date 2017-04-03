import { ReadonlyFieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PublicReadonlyFieldGleaningService extends ReadonlyFieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
