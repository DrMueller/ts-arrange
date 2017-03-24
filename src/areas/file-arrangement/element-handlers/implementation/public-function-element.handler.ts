import { ElementHandlerBase } from '..';
import { FunctionElementHandler, FunctionHelper } from '../../handlers';
import { ElementBase, PublicFunctionElement, ElementCollection } from '../../elements';

export class PublicFunctionElementHandler extends ElementHandlerBase {
  public get handledElementName(): string {
    return 'Public Function';
  }

  public getElements(text: string): ElementCollection {
    const functionElementHandler = new FunctionElementHandler(text);
    let elements = functionElementHandler.getFunctionElements('public', ElementBase);

    // Remove properties
    elements = elements.filter(f => {
      return !FunctionHelper.checkIfProperty(f.text);
    });

    return new ElementCollection(1, this.handledElementName, elements);
  }
}
