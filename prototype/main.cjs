const { app, BrowserWindow, globalShortcut, ipcMain, screen, Tray, Menu, nativeImage } = require('electron');
const path = require('node:path');

let companion;
let tray;

function createCompanion() {
  const display = screen.getPrimaryDisplay();
  const { x, y, width, height } = display.workArea;
  companion = new BrowserWindow({
    width: 410,
    height: 600,
    x: x + width - 430,
    y: y + height - 620,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    resizable: false,
    show: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  companion.setAlwaysOnTop(true, 'floating');
  companion.loadFile(path.join(__dirname, 'index.html'));
  companion.once('ready-to-show', () => companion.showInactive());
  companion.on('closed', () => { companion = null; });
}

function moveCompanion() {
  if (!companion) return;
  const displays = screen.getAllDisplays();
  const display = displays[Math.floor(Math.random() * displays.length)];
  const { x, y, width, height } = display.workArea;
  const bounds = companion.getBounds();
  const nextX = Math.round(x + Math.random() * Math.max(0, width - bounds.width));
  const nextY = Math.round(y + Math.random() * Math.max(0, height - bounds.height));
  companion.webContents.send('companion:glitch');
  setTimeout(() => companion?.setPosition(nextX, nextY, true), 170);
}

app.whenReady().then(() => {
  createCompanion();
  globalShortcut.register('CommandOrControl+Alt+Space', () => {
    if (!companion) return createCompanion();
    companion.isVisible() ? companion.hide() : companion.show();
  });
  globalShortcut.register('CommandOrControl+Alt+P', moveCompanion);
  const icon = nativeImage.createEmpty();
  tray = new Tray(icon);
  tray.setToolTip('Neon Companion');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Show companion', click: () => companion?.show() },
    { label: 'Teleport', click: moveCompanion },
    { type: 'separator' },
    { label: 'Quit', click: () => app.quit() }
  ]));
  tray.on('click', () => companion?.show());
});

ipcMain.on('companion:close', () => companion?.hide());
ipcMain.on('companion:teleport', moveCompanion);

app.on('will-quit', () => globalShortcut.unregisterAll());
app.on('window-all-closed', (event) => event.preventDefault());
