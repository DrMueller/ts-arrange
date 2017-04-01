import { IElementHandler } from '.';
import * as handlers from './implementation';
import { ConfigurationCollection, ConfigEntry } from '../../models/configuration';

export class ElementHandlerFactory {
  public static createByConfigEntry(config: ConfigEntry): IElementHandler {
    const result = this.create(config.elementName);
    return result;
  }

  private static create(name: string): IElementHandler {
    switch (name) {
      case 'Public Readonly Field':
        return new handlers.PublicReadonlyFieldElementHandler();
      case 'Internal Readonly Field':
        return new handlers.InternalReadonlyFieldElementHandler();
      case 'Protected Readonly Field':
        return new handlers.ProtectedReadonlyFieldElementHandler();
      case 'Private Readonly Field':
        return new handlers.PrivateReadonlyFieldElementHandler();

      case 'Public Field':
        return new handlers.PublicFieldElementHandler();
      case 'Internal Field':
        return new handlers.InternalFieldElementHandler();
      case 'Protected Field':
        return new handlers.ProtectedFieldElementHandler();
      case 'Private Field':

        return new handlers.PrivateFieldElementHandler();
      case 'Constructor':

        return new handlers.ConstructorElementHandler();
      case 'Public Function':
        return new handlers.PublicFunctionElementHandler();
      case 'Internal Function':
        return new handlers.InternalFunctionElementHandler();
      case 'Protected Function':
        return new handlers.ProtectedFunctionElementHandler();
      case 'Private Function':
        return new handlers.PrivateFunctionElementHandler();

      case 'Public Property':
        return new handlers.PublicPropertyElementHandler();
      case 'Internal Property':
        return new handlers.InternalPropertyElementHandler();
      case 'Protected Property':
        return new handlers.ProtectedPropertyElementHandler();
      case 'Private Property':
        return new handlers.PrivatePropertyElementHandler();

      default:
        throw new Error(`Element ${name} is not known.`);
    }
  }
}
