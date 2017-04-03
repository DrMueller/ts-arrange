import { IElementGleaningService } from '.';
import * as gs from './gleaning-services';
import { ConfigurationCollection, ConfigurationEntry } from '../../../configuration/models';

export class ElementGleaningServiceFactory {
  public static createByConfigEntry(configEntry: ConfigurationEntry): IElementGleaningService {
    const result = this.create(configEntry.elementName);
    return result;
  }

  private static create(name: string): IElementGleaningService {
    switch (name) {
      case 'Public Readonly Field':
        return new gs.PublicReadonlyFieldGleaningService();
      case 'Internal Readonly Field':
        return new gs.InternalReadonlyFieldGleaningService();
      case 'Protected Readonly Field':
        return new gs.ProtectedReadonlyFieldGleaningService();
      case 'Private Readonly Field':
        return new gs.PrivateReadonlyFieldGleaningService();

      case 'Public Field':
        return new gs.PublicFieldGleaningService();
      case 'Internal Field':
        return new gs.InternalFieldGleaningService();
      case 'Protected Field':
        return new gs.ProtectedFieldGleaningService();
      case 'Private Field':
        return new gs.PrivateFielGleaningService();

      case 'Constructor':
        return new gs.ConstructorGleaningService();

      case 'Public Function':
        return new gs.PublicFunctionGleaningService();
      case 'Internal Function':
        return new gs.InternalFunctionGleaningService();
      case 'Protected Function':
        return new gs.ProtectedFunctionGleaningService();
      case 'Private Function':
        return new gs.PrivateFunctionGleaningService();

      case 'Public Property':
        return new gs.PublicPropertyGleaningService();
      case 'Internal Property':
        return new gs.InternalPropertyGleaningService();
      case 'Protected Property':
        return new gs.ProtectedPropertyGleaningService();
      case 'Private Property':
        return new gs.PrivatePropertyGleaningService();

      default:
        throw new Error(`Element ${name} is not known.`);
    }
  }
}
