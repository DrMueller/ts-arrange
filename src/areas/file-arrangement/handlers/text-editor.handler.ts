import * as vscode from 'vscode';

export class TextEditorHandler {
  public getTextInCurrentlEditorWindow(): string | null {
    const textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
      return null;
    }

    const result = textEditor.document.getText();
    return result;
  }

  public setDocumentText(documentText: string): void {
    const textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
      return null;
    }

    textEditor.edit(f => {
      f.delete(new vscode.Range(0, 0, textEditor.document.lineCount, textEditor.document.getText().length));
    }).then(f => {
      textEditor.edit(t => {
        t.insert(new vscode.Position(0, 0), documentText);
      });
    });
  }
}
