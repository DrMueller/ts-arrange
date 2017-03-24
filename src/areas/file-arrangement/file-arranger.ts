import * as vscode from 'vscode';

import { TextEditorHandler, ClassArrangementHandler } from './handlers';

export class FileArranger {
  public arrangeCurrentFile(): void {
    const textEditorHandler = new TextEditorHandler();

    let text = textEditorHandler.getTextInCurrentlEditorWindow();
    if (!text) {
      return;
    }

    const classArrangementHandler = new ClassArrangementHandler();
    text = classArrangementHandler.arrangeWithinClass(text);

    textEditorHandler.setDocumentText(text);
  }
}
