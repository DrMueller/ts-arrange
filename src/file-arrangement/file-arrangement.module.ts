import { window } from 'vscode';

import { FileArrangementService } from './file-arrangement.service';
import { TextEditorHelper } from './helpers';

export class FileArrangementModule {
  public arrangeWithinFile(): void {

    const text = TextEditorHelper.getDocumentText();
    const service = new FileArrangementService();

    if (text) {
      const arrangedText = service.arrangeWithinClass(text);
      TextEditorHelper.overwriteDocumentText(arrangedText);
    }
  }
}
