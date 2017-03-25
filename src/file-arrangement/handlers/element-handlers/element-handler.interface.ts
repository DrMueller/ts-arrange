import { ElementCollection } from '../../models';

export interface IElementHandler {
  handledElementName: string; // Getters and setter not possible in Interfaces atm
  getElements(text: string): ElementCollection;
}
