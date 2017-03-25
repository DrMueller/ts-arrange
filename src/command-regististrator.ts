import * as vscode from 'vscode';

import { FileArrangementModule } from './file-arrangement';

export class CommandRegistrator {
  public registerAllCommands(context: vscode.ExtensionContext): void {
    const arrangeFileCommand = vscode.commands.registerCommand('extension.arrangeFile', () => {
      const fileArranger = new FileArrangementModule();
      fileArranger.arrangeWithinFile();
    });

    context.subscriptions.push(arrangeFileCommand);
  }
}
