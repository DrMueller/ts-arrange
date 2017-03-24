import { ElementBase, ElementCollection } from '../elements';

export abstract class ElementHandlerBase {
  public abstract get handledElementName(): string;
  public abstract getElements(text: string): ElementCollection;
}
