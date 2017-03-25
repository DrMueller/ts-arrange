import { ElementHandlerBase } from '..';
import { FunctionElementHandler } from '../..';
import { FunctionHelper } from '../../../helpers';
import { Element, ElementCollection } from '../../../models';

export class PublicFunctionElementHandler extends ElementHandlerBase {
  public get handledElementName(): string {
    return 'Public Function';
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);
    let elements = functionElementHandler.getFunctionElements('public', Element);

    // Remove properties
    elements = elements.filter(f => {
      return !FunctionHelper.checkIfProperty(f.text);
    });

    return new ElementCollection(1, this.handledElementName, elements);
  }
}
