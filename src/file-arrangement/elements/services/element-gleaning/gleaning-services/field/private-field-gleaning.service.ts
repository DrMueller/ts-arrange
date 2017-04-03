import { FieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PrivateFielGleaningService extends FieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
