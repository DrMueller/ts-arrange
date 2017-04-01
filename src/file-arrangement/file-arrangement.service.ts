import { Element, ElementCollection } from './models/elements';
import { ConfigurationCollection } from './models/configuration';
import { Constants } from './infrastructure';
import { TextBuilder } from './handlers';
import { IElementHandler, ElementHandlerFactory } from './handlers/element-handlers';
import { ConfigHandler } from './handlers/config-handlers';

export class FileArrangementService {

  public arrangeWithinClass(text: string): string {
    const classHeadingText = this.getClassHeading(text);

    const textBuilder = new TextBuilder()
      .appendText(classHeadingText);

    this.appendElements(text, textBuilder);

    const result = textBuilder.appendText(Constants.CLOSING_BRACKET)
      .appendEmptyLine()
      .build();

    return result;
  }

  private appendElements(text: string, textBuilder: TextBuilder): void {
    const configEntries = ConfigHandler.readConfigurationCollection();
    configEntries.sortBySequence();

    configEntries.elements.forEach(configEntry => {
      const elementHandler = ElementHandlerFactory.createByConfigEntry(configEntry);
      const elementEntries = elementHandler.getElements(text);

      if (elementEntries.length > 0) {
        textBuilder.appendElements(elementEntries, configEntry.emptyLineBetween);

        if (configEntries.elements.indexOf(configEntry) < (configEntries.elements.length - 1)) {
          textBuilder.appendEmptyLine();
        }
      }
    });
  }

  private getClassHeading(str: string): string {
    const classStartingPos = str.indexOf('export class');
    let elementString = str.substr(0, classStartingPos);
    let i = classStartingPos;

    while (true) {
      const char = str.charAt(i);
      elementString += char;
      if (char === Constants.OPENING_BRACKET) {
        break;
      }

      i++;
    }

    elementString += Constants.NEW_LINE;
    return elementString;
  }
}
