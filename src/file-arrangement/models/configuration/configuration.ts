import { ConfigEntry } from '.';

export class ConfigurationCollection {
  constructor(public elements: ConfigEntry[]) {
  }

  public sortBySequence(): void {
    this.elements = this.elements.sort((a, b) => {
      return a.sequence - b.sequence;
    });
  }
}
