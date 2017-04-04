import * as vscode from 'vscode';

import { FileArrangementModule } from './file-arrangement';

export class CommandRegistrator {
  public registerAllCommands(context: vscode.ExtensionContext): void {
    const arrangeFileCommand = vscode.commands.registerCommand('extension.arrangeFile', () => {
      try {
        const fileArranger = new FileArrangementModule();
        fileArranger.arrangeWithinFile();
      } catch (err) {
        vscode.window.showErrorMessage(err.message);
      }
    });

    context.subscriptions.push(arrangeFileCommand);
  }
}
