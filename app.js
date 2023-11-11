const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const {execSync} = require('child_process');

let output = execSync('python get_url.py').toString();

function urlify(text) {
    var urlRegex = /(http?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {return url})

}


function createWindow () {
  const win = new BrowserWindow({
    width: 1270,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

//   console.log(output);
  win.loadURL(output);
//   win.loadURL('http://127.0.0.1:8888/tree')
//   win.loadURL('http://localhost:8888/?token=d15daec51fda02d04178dbc92115c99e695805a12c7bd4de')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})