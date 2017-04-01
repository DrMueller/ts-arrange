import { IElementHandler } from '..';
import { FunctionElementHandler } from '../..';
import { Element, ElementCollection } from '../../../models/elements';

export class ConstructorElementHandler implements IElementHandler {
  public get handledElementName(): string {
    return 'Constructor';
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);
    const elements = functionElementHandler.getFunctionElements('constructor', Element);

    return new ElementCollection(1, this.handledElementName, elements);
  }
}
