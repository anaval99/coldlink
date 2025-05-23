export class IOService {
  static chooseFile(isDirectory: boolean) {
    return new Promise<string>(resolve => {
      window.electron.ipcRenderer.once('choose-file', args => {
        resolve(args as string);
      });
      window.electron.ipcRenderer.sendMessage('choose-file', [isDirectory ? 'openDirectory' : 'openFile']);
    });
  }
}