import {app, BrowserWindow, ipcMain} from "electron";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {preload: path.join(__dirname, 'preload.js')}
    });
    const controllerWindow = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {preload: path.join(__dirname, 'preload.js')}
    });


    const isDev = process.env.NODE_ENV === "development";

    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
        controllerWindow.loadURL("http://localhost:5173#controller", );

    } else {
        const indexPath = path.join(__dirname, "../renderer-dist/index.html")
        mainWindow.loadFile(indexPath);
        controllerWindow.loadFile(indexPath, {hash: "controller"});
    }

    ipcMain.on('data-to-main', (event, data) => {
        // Relay it specifically to the mainWindow (Window A)
        if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('data-from-main', data);
        }
    });
}

app.whenReady().then(() => {
    createWindow()
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
