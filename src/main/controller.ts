import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import { dialog } from 'electron';

export const initController = (mainWindow: any) => {
  ipcMain.on('choose-file', async (event, arg) => {
    const chosen = await dialog.showOpenDialog(mainWindow, {
      properties: [arg, 'createDirectory']
    });
    console.log('controller.chosen', chosen);
    event.reply('choose-file', chosen.filePaths?.[0]);
  });
};
