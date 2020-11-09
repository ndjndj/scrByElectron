const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
    // mainWindow を作成
    mainWindow = new BrowserWindow({width: 400, height: 400, fullscreen: true});

    // html を指定
    let path = __dirname + '/index.html';
    mainWindow.loadURL(path);

    // chromium の Dev ツールを開く
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});