import { FunctionGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class ProtectedFunctionGleaningService extends FunctionGleaningServiceBase {
  constructor() {
    super(ElementModifier.Protected);
  }
}
