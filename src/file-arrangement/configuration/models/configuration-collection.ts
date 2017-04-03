import { ConfigurationEntry } from '.';

export class ConfigurationCollection {
  constructor(public elements: ConfigurationEntry[]) {
  }

  public sortBySequence(): void {
    this.elements = this.elements.sort((a, b) => {
      return a.sequence - b.sequence;
    });
  }
}
