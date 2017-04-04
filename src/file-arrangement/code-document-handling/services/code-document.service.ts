import * as vscode from 'vscode';

export class CodeDocumentService {
  public static getDocumentText(): string | null {
    const textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
      return null;
    }

    const result = textEditor.document.getText();
    return result;
  }

  public static overwriteDocumentText(documentText: string): void {
    const textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
      return;
    }

    const textEditOptions = {
      undoStopBefore: true,
      undoStopAfter: true
    };

    textEditor.edit(f => {
      f.delete(new vscode.Range(0, 0, textEditor.document.lineCount, textEditor.document.getText().length));
    }, textEditOptions).then(f => {
      textEditor.edit(t => {
        t.insert(new vscode.Position(0, 0), documentText);
      });
    });
  }
}