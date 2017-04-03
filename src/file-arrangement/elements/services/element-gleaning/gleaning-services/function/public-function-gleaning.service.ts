import { FunctionGleaningServiceBase } from '.';
import { ElementModifier } from '../../../../models';

export class PublicFunctionGleaningService extends FunctionGleaningServiceBase {
  constructor() {
    super(ElementModifier.Public);
  }
}
