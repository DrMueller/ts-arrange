import { window } from 'vscode';

import { FileArrangementService } from './file-arrangement.service';
import { CodeDocumentService } from './code-document-handling';

export class FileArrangementModule {
  public arrangeWithinFile(): void {

    const text = CodeDocumentService.getDocumentText();
    const service = new FileArrangementService();

    if (text) {
      const arrangedText = service.arrangeWithinClass(text);
      CodeDocumentService.overwriteDocumentText(arrangedText);
    }
  }
}
