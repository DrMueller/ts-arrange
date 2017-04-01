import { workspace } from 'vscode';

import { ConfigurationCollection, ConfigEntry } from '../../models/configuration';
import { ElementSortingStrategyFactory, IElementSortingStrategy } from '../../handlers/sorting-handlers';
import { ElementSortingType } from '../../models/elements/enums';

export class ConfigHandler {
  public static readConfigurationCollection(): ConfigurationCollection {
    //  File > Preferences > Settings
    const tsArrangeConfig = workspace.getConfiguration('tsarrange');
    const sortingConfig = tsArrangeConfig.get<any[]>('file-sorting');

    const result = this.createConfigEntries(sortingConfig);
    return result;
  }

  private static createConfigEntry(configEntry: any): ConfigEntry {
    const elementName = configEntry['element-name'] as string;
    const sequence = configEntry['sequence'] as number;
    const emptyLineBetweenElements = configEntry['empty-line-between'] as boolean;

    const result = new ConfigEntry(elementName, sequence, emptyLineBetweenElements);

    return result;
  }

  private static createConfigEntries(entriesFromConfig: any[] | undefined): ConfigurationCollection {
    const allFileSortings = new Array<ConfigEntry>();
    if (entriesFromConfig) {
      entriesFromConfig.forEach(f => {
        const configEntry = this.createConfigEntry(f);
        allFileSortings.push(configEntry);
      });
    }

    const result = new ConfigurationCollection(allFileSortings);
    return result;
  }
}
