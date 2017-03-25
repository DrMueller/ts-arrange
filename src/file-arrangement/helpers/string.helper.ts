export class StringHelper {
  public static indexOfCaseInsensitive(text: string, search: string, startPosition: number): number {
    const result = text.toLowerCase().indexOf(search.toLowerCase(), startPosition);
    return result;
  }
}
