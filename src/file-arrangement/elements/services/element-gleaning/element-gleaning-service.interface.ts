import { ElementCollection } from '../../models';

export interface IElementGleaningService {
  getElements(text: string): ElementCollection;
}
