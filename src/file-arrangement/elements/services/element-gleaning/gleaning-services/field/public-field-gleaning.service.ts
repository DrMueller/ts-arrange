import { FieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PublicFieldGleaningService extends FieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
