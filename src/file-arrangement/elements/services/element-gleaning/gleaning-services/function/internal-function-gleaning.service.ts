import { FunctionGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class InternalFunctionGleaningService extends FunctionGleaningServiceBase {
  constructor() {
    super(ElementModifier.Internal);
  }
}
