import { IElementGleaningService } from '../..';
import { FunctionElementHandler } from '../../../handlers';
import { Element, ElementCollection } from '../../../../models';

export class ConstructorGleaningService implements IElementGleaningService {
  public get handledElementName(): string {
    return 'Constructor';
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);
    const elements = functionElementHandler.getFunctionElements('constructor', Element);

    return new ElementCollection(1, this.handledElementName, elements);
  }
}
