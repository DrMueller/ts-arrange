import { ElementHandlerBase } from '..';
import { FunctionElementHandler } from '../../handlers';
import { ElementBase, ConstructorElement, ElementCollection } from '../../elements';

export class ConstructorElementHandler extends ElementHandlerBase {
  public get handledElementName(): string {
    return 'Constructor';
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);
    const elements = functionElementHandler.getFunctionElements('constructor', ElementBase);

    return new ElementCollection(1, this.handledElementName, elements);
  }
}
