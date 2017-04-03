import { FieldGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class ProtectedFieldGleaningService extends FieldGleaningServiceBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
