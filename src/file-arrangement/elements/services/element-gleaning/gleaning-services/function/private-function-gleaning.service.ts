import { FunctionGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PrivateFunctionGleaningService extends FunctionGleaningServiceBase {
  constructor() {
    super(ElementModifier.Private);
  }
}
