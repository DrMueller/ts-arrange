import * as vscode from 'vscode';

// import * as vscode from './infrastructure/global-imports';

import { CommandRegistrator } from '.';

export function activate(context: vscode.ExtensionContext) {
  const registrator = new CommandRegistrator();
  registrator.registerAllCommands(context);
}

export function deactivate() {
}