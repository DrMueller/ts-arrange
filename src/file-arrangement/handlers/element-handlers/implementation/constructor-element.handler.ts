import { ElementHandlerBase } from '..';
import { FunctionElementHandler } from '../..';
import { FunctionHelper } from '../../../helpers';
import { Element, ElementCollection } from '../../../models';

export class ConstructorElementHandler extends ElementHandlerBase {
  public get handledElementName(): string {
    return 'Constructor';
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);
    const elements = functionElementHandler.getFunctionElements('constructor', Element);

    return new ElementCollection(1, this.handledElementName, elements);
  }
}
