import * as vscode from 'vscode';

import { FileArranger } from './areas';

export class CommandRegistrator {
  public registerAllCommands(context: vscode.ExtensionContext): void {
    const arrangeFileCommand = vscode.commands.registerCommand('extension.arrangeFile', () => {
      const fileArranger = new FileArranger();
      fileArranger.arrangeCurrentFile();
    });

    context.subscriptions.push(arrangeFileCommand);
  }
}